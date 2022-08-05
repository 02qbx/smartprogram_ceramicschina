Page({
    data: {video:{},
        commentParam: {},
        toolbarConfig: {
            // 若 moduleList 中配置有 share 模块，默认是有，则该属性为必填，title 必传
            share: {
                title: '中国陶瓷网'
            }
        }

    },

    onInit: function () {
        // 监听页面初始化的生命周期函数
    },
    onLoad: function (options) {
        var that=this;
        swan.request({
      url: 'https://smartprogram.ceramicschina.com/videoview',
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
            video:res.data
            //,
            //list:res.data.PG_NewsList
          })
          that.setData({
              commentParam: {
                  snid: options.id,
                  path: '/video/pages/view/view?id='+options.id+'',
                  title: res.data.title + '-中国陶瓷网',
                  content: res.data.title,
                  images: ['https://img1.ceramicschina.com'+res.data.bigpic+'']
              }
          });



swan.setNavigationBarTitle({
  title: '中国陶瓷网'
});
swan.setPageInfo({
          title: res.data.title + '-中国陶瓷网',
          keywords: '' ,
          description: res.data.title,
          articleTitle:res.data.title + '-中国陶瓷网',
           image: ['https://img1.ceramicschina.com'+res.data.bigpic+''],
          success: function () {
              console.log('setPageInfo success');
          },
          fail: function (err) {
              console.log('setPageInfo fail', err);
          }
      });

      }
      })

        // 监听页面加载的生命周期函数

    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
        // 用于实现页面间的跳转，也可以放在 onLoad 生命周期中
        requireDynamicLib('myDynamicLib').listenEvent();
    },
    clickComment(e) {
        swan.showToast({
            title: 'click comment success'
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
    },
    onError: function () {
        // 错误监听函数
    }
});