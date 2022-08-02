Page({
    data: {
        commentParam: {
            // 模拟数据，使用时请替换真实数据
            snid: 'BD20200202',
            path: '/page/list/index?snid=BD20200202',
            title: '测试文章标题',
            content: '测试文章内容',
            images: ['https://b.bdstatic.com/miniapp/images/demo-dog.png']
        },
        detailPath: '',
        // 底部互动 bar 的配置
        toolbarConfig: {
            // 若 moduleList 中配置有 share 模块，默认是有，则该属性为必填，title 必传
            share: {
                title: '测试文章标题'
            }
        }

    },

    onInit: function () {
        // 监听页面初始化的生命周期函数
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数

    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
        // 用于实现页面间的跳转，也可以放在 onLoad 生命周期中
        requireDynamicLib('myDynamicLib').listenEvent();
    },
    clickComment(e) {
        swan.showToast({
            title: 'click comment success'
        });
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    onError: function () {
        // 错误监听函数
    }
});