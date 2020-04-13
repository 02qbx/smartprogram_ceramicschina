Page({
    data: {

    },
    onLoad: function () {
           swan.setNavigationBarTitle({
    title:'功能瓷砖十大品牌'
});
swan.setPageInfo({
            title:'功能瓷砖十大品牌精工瓷砖领军品牌最新排名榜单-负离子瓷砖十大品牌企业有哪些-中国泳池砖领军品牌-中国陶瓷网',
            keywords:'功能瓷砖十大品牌',
            description:'中国功能瓷砖十大品牌榜是由中国陶瓷网和中国建筑装饰协会共同于2019年4月11日在北京人民大会堂举行评选颁奖活动，获得年度功能瓷砖十大品牌榜的品牌有: 马可波罗磁砖、诺贝尔磁砖、强辉陶瓷、淘陶泳池砖、君悦磁砖、企鹅大板瓷砖、剑牌健康瓷砖。',
            articleTitle:'功能瓷砖十大品牌精工瓷砖领军品牌最新排名榜单-负离子瓷砖十大品牌企业有哪些-中国泳池砖领军品牌-中国陶瓷网',
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