Page({
    setTabBarStyle() {
        swan.setTabBarStyle({
            color: '#000', // black
            selectedColor: '#FF0000', // red
            backgroundColor: '#FFFFBD',
            borderStyle: 'black', // 可选值还有white
            success: () => {
                console.log('setTabBarStyle success');
            },
            fail: err => {
                console.log('setTabBarStyle fail', err);
            }
        });
    },
    data: {

    },
    onInit: function () {
        // 监听页面初始化的生命周期函数
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
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