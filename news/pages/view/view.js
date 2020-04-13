var WxParse = require('../../../wxParse/wxParse.js');
Page({
    data: {
        pg_news:{},
        list:[]
    },
    onLoad: function (options) {
       var that=this; 
          swan.request({
        url: 'https://smartprogram.ceramicschina.com/view',
        method: 'GET',
        data: {
            id: options.id
        },
        dataType: 'json',
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
             that.setData({              
              pg_news:res.data
              //,
              //list:res.data.PG_NewsList
            })

         WxParse.wxParse('wxParseData', 'html', res.data.news_exps, that, 10); 
        
swan.setNavigationBarTitle({
    title: '中国陶瓷网'
});
swan.setPageInfo({
            title: res.data.news_title + '-中国陶瓷网行业资讯',
            keywords: res.data.keys ,
            description: res.data.sdescription,
            articleTitle:res.data.news_title + '-中国陶瓷网行业资讯',
             image: ['https://img1.ceramicschina.com'+res.data.ispic+''],
            success: function () {
                console.log('setPageInfo success');
            },
            fail: function (err) {
                console.log('setPageInfo fail', err);
            }
        });

        }
        })  
 swan.request({
        url: 'https://smartprogram.ceramicschina.com/indexhot',
        method: 'GET',
        dataType: 'json',
        data: {        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {           
               that.setData({              
              list:res.data
            }) 
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