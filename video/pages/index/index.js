Page({
    data: {
        pageid:1,
        id:'',
        videoindex:[],
        videoindex1:[],
        videoindex2:[],
        videoindex3:[]

    },
    onInit: function () {
        // 监听页面初始化的生命周期函数
    },
    onLoad: function () {
        var that=this;
        swan.request({
            url: 'https://smartprogram.ceramicschina.com/videoindex',
            method: 'GET',
            dataType: 'json',
            data: {        },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                   that.setData({
                    videoindex:res.data
                })
               }
            })
            swan.request({
                url: 'https://smartprogram.ceramicschina.com/videolist',
                method: 'GET',
                dataType: 'json',
                data: {
                     id:1,
                    page:1
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                       that.setData({
                        videoindex1:res.data
                    })
                   }
                })
                swan.request({
                    url: 'https://smartprogram.ceramicschina.com/videolist',
                    method: 'GET',
                    dataType: 'json',
                    data: {  id:2,
                        page:1 },
                    header: {
                        'content-type': 'application/json' // 默认值
                    },
                    success: function (res) {
                           that.setData({
                            videoindex2:res.data
                        })
                       }
                    })
                    swan.request({
                        url: 'https://smartprogram.ceramicschina.com/videolist',
                        method: 'GET',
                        dataType: 'json',
                        data: {  id:3,
                            page:1},
                        header: {
                            'content-type': 'application/json' // 默认值
                        },
                        success: function (res) {
                               that.setData({
                                videoindex3:res.data
                            })
                           }
                        })


        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        swan.setPageInfo({
            title:"陶瓷行业微电影_瓷砖卫浴评测短片|专访记录片-中国陶瓷网微电影",
            keywords:"陶瓷视频,瓷砖视频,卫浴视频",
            description: "中国陶瓷网视频专区提供陶瓷行业视频在线观看、人物专访视频下载、瓷砖产品测评短片、陶瓷展厅展示微电影网络直播。",
            articleTitle:"陶瓷行业微电影_瓷砖卫浴评测短片|专访记录片-中国陶瓷网微电影",
            image: ['https://m.ceramicschina.com/Content/m_img/LOGO.png'],
                    success: function () {
                        console.log('setPageInfo success');
                    },
                    fail: function (err) {
                        console.log('setPageInfo fail', err);
                    }
                })

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