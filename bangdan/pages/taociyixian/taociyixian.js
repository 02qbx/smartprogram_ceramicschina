Page({
    data: {

    },
    onLoad: function () {
           swan.setNavigationBarTitle({
    title:'陶瓷一线品牌'
});
swan.setPageInfo({
            title:'陶瓷一线品牌最新排名榜单-陶瓷一线品牌企业有哪些-中国一线陶瓷品牌-中国陶瓷网',
            keywords:'陶瓷一线品牌',
            description:'中国陶瓷一线品牌榜是由中国陶瓷网和中国建筑装饰协会共同于2019年4月11日在北京人民大会堂举行评选颁奖活动，获得年度陶瓷一线品牌榜的品牌有: 诺贝尔磁砖、马可波罗磁砖、能强陶瓷、强牌陶瓷、新罗玛陶瓷、如意陶瓷砖、好来登陶瓷、金丝路瓷砖。',
            articleTitle:'陶瓷一线品牌最新排名榜单-陶瓷一线品牌企业有哪些-中国一线陶瓷品牌-中国陶瓷网',
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