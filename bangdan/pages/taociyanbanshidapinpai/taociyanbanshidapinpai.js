Page({
    data: {

    },
    //top
    scrollToTop() {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: 300,
            success: res => {
                console.log('pageScrollTo success', res);
            },
            fail: err => {
                console.log('pageScrollTo fail', err);
            }
        });
    },
    onLoad: function () {
        swan.setNavigationBarTitle({
            title:'岩板十大品牌'
        });
        swan.setPageInfo({
                    title:'陶瓷岩板/大板十大品牌最新排名榜单-岩板/大板十大品牌企业有哪些-中国陶瓷网',
                    keywords:'岩板十大品牌',
                    description:'中国岩板/大板十大品牌榜是由中国陶瓷网和中国建筑装饰协会于2020年6月18日陶瓷品牌日共同线上揭幕,获得年度岩板/大板十大品牌榜的品牌有:蒙娜丽莎瓷砖、高捷大岩板、壹號大理石瓷砖、依诺磁砖、领航岩板家居、顺辉瓷砖、将军•岩板、BOBO。',
                    articleTitle:'陶瓷岩板/大板十大品牌最新排名榜单-岩板/大板十大品牌企业有哪些-中国陶瓷网',
                    image: ['https://m.ceramicschina.com/images/s_2019bangdan.jpg'],
                    success: function () {
                        console.log('setPageInfo success');
                    },
                    fail: function (err) {
                        console.log('setPageInfo fail', err);
                    }
                })
                // 监听页面加载的生命周期函数
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
    }
});