var WxParse = require('../../../wxParse/wxParse.js');
Page({
    data: {
        pg_news:{},
        list:[],
        commentParam: {},
        toolbarConfig: {
            // 若 moduleList 中配置有 share 模块，默认是有，则该属性为必填，title 必传
            share: {
                title: '中国陶瓷网'
            }
        }
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
            that.setData({
                commentParam: {
                    snid: options.id,
                    path: '/news/pages/view/view?id='+options.id+'',
                    title: res.data.newsTitle + '-中国陶瓷网行业资讯',
                    content: res.data.sdescription,
                    images: ['https://img1.ceramicschina.com'+res.data.ispic+'']
                }
            });

         WxParse.wxParse('wxParseData', 'html', res.data.newsExps, that, 10);

swan.setNavigationBarTitle({
    title: '中国陶瓷网'
});
swan.setPageInfo({
            title: res.data.newsTitle + '-中国陶瓷网行业资讯',
            keywords: res.data.keys ,
            description: res.data.sdescription,
            articleTitle:res.data.newsTitle + '-中国陶瓷网行业资讯',
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
         // 用于实现页面间的跳转
         requireDynamicLib('myDynamicLib').listenEvent();
        // 监听页面初次渲染完成的生命周期函数
    },
    clickComment(e) {
        swan.showToast({
            title: '评论成功'
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
    }
});