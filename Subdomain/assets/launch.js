
cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Node,
        recordTemp: cc.Prefab,
        data: [],
        records: [],
        showState:0,         //0代表分数score 1代表通过关卡数量 2代表...
        currentPage:0
    },

    start() {
        wx.onMessage(data => {
            switch (data.message) {
                case 'Show':
                    wx.getFriendCloudStorage({
                        keyList: ['score'],
                        success: res => {
                            console.log('seccessfully get the data of friends!')
                            this._show();
                            this.data = res.data
                            this.maxPage = parseInt((this.data.length - 1) / 6)
                            this.clearInfo()
                            this.rankRecords()
                            this.loadInfo()
                        }
                    })
                    break;
                case 'Hide':
                    this._hide();
                    this.clearInfo()
                    break;
                case 'Left':
                    if(this.currentPage===0) {
                        console.log('This is the first page!')                     
                        return
                    }
                    else{
                        this.clearInfo()
                        this.currentPage -= 1
                        this.loadInfo()
                    }
                    break
                case 'Right':
                    if(this.currentPage===this.maxPage){
                        console.log('No more pages!')
                        return
                    }
                    else{
                        this.clearInfo()
                        this.currentPage += 1
                        this.loadInfo()
                    }
                    break
                case 'UpdateScore':
                    wx.getUserCloudStorage({
                        keyList:['score'],
                        success:res=>{
                            if(parseInt(data.score)>parseInt(res.KVDataList[0].value)){
                                let kvdataList = []
                                kvdataList.push({
                                    key:'score',
                                    value:data.score
                                })
                                wx.setUserCloudStorage({
                                    KVDataList:kvdataList
                                })
                            }
                        }
                    })
            }
        });
    },

    loadInfo: function () {
        if (this.data.length === 0) return
        //没有好友玩过这个游戏

        for (let i = this.currentPage*6; i < this.currentPage*6+6 && i<this.data.length; ++i) {
            if (this.data[i].KVDataList.length === 0) continue

            let newRecord = cc.instantiate(this.recordTemp)
            cc.loader.load(this.data[i].avatarUrl + '?aaa=aa.jpg', (err, tex) => {
                newRecord.getChildByName('friend').getChildByName('avatar').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex)
            })
            newRecord.getChildByName('ranking').getComponent(cc.Label).string = `${i+1}`
            newRecord.getChildByName('friend').getChildByName('nickname').getComponent(cc.Label).string = this.data[i].nickname
            newRecord.getChildByName('score').getComponent(cc.Label).string = this.data[i].KVDataList[0].value

            this.display.getChildByName('View').getChildByName('Content').addChild(newRecord)
        }
    },

    clearInfo: function () {
        this.records = this.display.getChildByName('View').getChildByName('Content').children
        if (this.records.length <= 2) return    //没有排名

        for (let i = 2; i < this.records.length; ++i) {
            this.records[i].destroy()
        }
    },

    rankRecords: function () {
        const sortby = function (a, b) {
            if (b.KVDataList.length === 0)
                return -1
            if (a.KVDataList.length === 0)
                return 1

            return parseInt(a.KVDataList[0].value) >= parseInt(b.KVDataList[0].value) ? -1 : 1
        }
        this.data.sort(sortby)
    },

    _show() {
        let moveTo = cc.moveTo(0.5,0,0)
        this.display.runAction(moveTo)
    },

    _hide() {
        let moveTo = cc.moveTo(0.5,0,1500)
        this.display.runAction(moveTo)
    }
});
