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
    title:'卫浴十大品牌'
});
swan.setPageInfo({
            title:'卫浴十大品牌最新排名榜单-卫浴十大品牌企业有哪些-中国十大卫浴品牌-中国陶瓷网',
            keywords:'卫浴十大品牌',
            description:'中国卫浴十大品牌榜是由中国陶瓷网和中国建筑装饰协会于2020年6月18日陶瓷品牌日共同线上揭幕,获得年度卫浴十大品牌榜的品牌有:九牧厨卫、TOTO卫浴、恒通卫浴、浪鲸卫浴、辉煌厨卫、恒洁卫浴、科勒卫浴、惠达卫浴、帝王洁具、欧路莎卫浴。',
            articleTitle:'卫浴十大品牌最新排名榜单-卫浴十大品牌企业有哪些-中国十大卫浴品牌-中国陶瓷网',
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