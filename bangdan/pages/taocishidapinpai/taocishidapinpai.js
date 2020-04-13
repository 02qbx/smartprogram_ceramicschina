Page({
    data: {

    },
    onLoad: function () {
               swan.setNavigationBarTitle({
    title:'陶瓷十大品牌'
});
swan.setPageInfo({
            title:'陶瓷十大品牌最新排名榜单-陶瓷十大品牌企业有哪些-中国十大陶瓷品牌-中国陶瓷网',
            keywords:'陶瓷十大品牌',
            description:'中国陶瓷十大品牌榜是由中国陶瓷网和中国建筑装饰协会共同于2019年4月11日在北京人民大会堂举行评选颁奖活动，获得年度陶瓷十大品牌榜的品牌有: 威尔斯陶瓷、强辉陶瓷、顺辉瓷砖、能强陶瓷、嘉俊陶瓷、白兔瓷砖、金丝玉玛瓷砖、大角鹿超耐磨大理石瓷砖、通利大理石瓷砖、狮王陶瓷。',
            articleTitle:'陶瓷十大品牌最新排名榜单-陶瓷十大品牌企业有哪些-中国十大陶瓷品牌-中国陶瓷网',
            image: ['https://m.ceramicschina.com/images/s_2019bangdan.jpg'],
            success: function () {
                console.log('setPageInfo success');
            },
            fail: function (err) {
                console.log('setPageInfo fail', err);
            }
        })
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