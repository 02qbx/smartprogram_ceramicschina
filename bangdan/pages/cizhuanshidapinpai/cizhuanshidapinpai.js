Page({
    data: {

    },
    onLoad: function () {
           swan.setNavigationBarTitle({
    title:'瓷砖十大品牌'
});
swan.setPageInfo({
            title:'瓷砖十大品牌最新排名榜单-瓷砖十大品牌企业有哪些-中国十大瓷砖品牌-中国陶瓷网',
            keywords:'瓷砖十大品牌',
            description:'中国瓷砖十大品牌榜是由中国陶瓷网和中国建筑装饰协会共同于2019年4月11日在北京人民大会堂举行评选颁奖活动，获得年度瓷砖十大品牌榜的品牌有: 亚细亚瓷砖、金牌亚洲磁砖、钻石瓷砖、大角鹿超耐磨大理石瓷砖、金玉名家瓷砖、汇亚磁砖、利家居瓷砖、来德利陶瓷、大将军陶瓷、双庆陶瓷。',
            articleTitle:'瓷砖十大品牌最新排名榜单-瓷砖十大品牌企业有哪些-中国十大瓷砖品牌-中国陶瓷网',
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