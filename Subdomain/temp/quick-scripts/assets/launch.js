(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/launch.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4874dn6l+pDyq8ZeEXOiKD3', 'launch', __filename);
// launch.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Node,
        recordTemp: cc.Prefab,
        data: [],
        records: [],
        showState: 0, //0代表分数score 1代表通过关卡数量 2代表...
        currentPage: 0
    },

    start: function start() {
        var _this = this;

        wx.onMessage(function (data) {
            switch (data.message) {
                case 'Show':
                    wx.getFriendCloudStorage({
                        keyList: ['score'],
                        success: function success(res) {
                            _this._show();
                            _this.data = res.data;
                            _this.maxPage = parseInt((_this.data.length - 1) / 6);
                            _this.clearInfo();
                            _this.rankRecords();
                            _this.loadInfo();
                        }
                    });
                    break;
                case 'Hide':
                    _this._hide();
                    _this.clearInfo();
                    break;
                case 'Left':
                    if (_this.currentPage === 0) {
                        console.log('This is the first page!');
                        return;
                    } else {
                        _this.clearInfo();
                        _this.currentPage -= 1;
                        _this.loadInfo();
                    }
                    break;
                case 'Right':
                    if (_this.currentPage === _this.maxPage) {
                        console.log('No more pages!');
                        return;
                    } else {
                        _this.clearInfo();
                        _this.currentPage += 1;
                        _this.loadInfo();
                    }
                    break;
                case 'UpdateScore':
                    wx.getUserCloudStorage({
                        keyList: ['score'],
                        success: function success(res) {
                            if (res.KVDataList.length === 0 || parseInt(data.score) > parseInt(res.KVDataList[0].value)) {
                                var kvdataList = [];
                                kvdataList.push({
                                    key: 'score',
                                    value: data.score
                                });
                                wx.setUserCloudStorage({
                                    KVDataList: kvdataList
                                });
                            }
                        }
                    });
            }
        });
    },


    loadInfo: function loadInfo() {
        var _this2 = this;

        if (this.data.length === 0) return;
        //没有好友玩过这个游戏

        var _loop = function _loop(i) {
            if (_this2.data[i].KVDataList.length === 0) return 'continue';

            var newRecord = cc.instantiate(_this2.recordTemp);
            cc.loader.load(_this2.data[i].avatarUrl + '?aaa=aa.jpg', function (err, tex) {
                newRecord.getChildByName('friend').getChildByName('avatar').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
            newRecord.getChildByName('ranking').getComponent(cc.Label).string = '' + (i + 1);
            newRecord.getChildByName('friend').getChildByName('nickname').getComponent(cc.Label).string = _this2.data[i].nickname;
            newRecord.getChildByName('score').getComponent(cc.Label).string = _this2.data[i].KVDataList[0].value;

            _this2.display.getChildByName('View').getChildByName('Content').addChild(newRecord);
        };

        for (var i = this.currentPage * 6; i < this.currentPage * 6 + 6 && i < this.data.length; ++i) {
            var _ret = _loop(i);

            if (_ret === 'continue') continue;
        }
    },

    clearInfo: function clearInfo() {
        this.records = this.display.getChildByName('View').getChildByName('Content').children;
        if (this.records.length <= 2) return; //没有排名

        for (var i = 2; i < this.records.length; ++i) {
            this.records[i].destroy();
        }
    },

    rankRecords: function rankRecords() {
        var sortby = function sortby(a, b) {
            if (b.KVDataList.length === 0) return -1;
            if (a.KVDataList.length === 0) return 1;

            return parseInt(a.KVDataList[0].value) >= parseInt(b.KVDataList[0].value) ? -1 : 1;
        };
        this.data.sort(sortby);
    },

    _show: function _show() {
        var moveTo = cc.moveTo(0.5, 0, 0);
        this.display.runAction(moveTo);
    },
    _hide: function _hide() {
        var moveTo = cc.moveTo(0.5, 0, 1500);
        this.display.runAction(moveTo);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=launch.js.map
        