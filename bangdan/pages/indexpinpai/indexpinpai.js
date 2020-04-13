const app = getApp()

Page({
   data: {
list:[],
PG_PinpaiData:[],
PG_PinpaiData2:[] 
    },
    onLoad: function () {
       var that=this; 
            swan.setNavigationBarTitle({
    title: '中国陶瓷网十大品牌榜'
    });   
    swan.request({
        url: 'https://smartprogram.ceramicschina.com/pinpai_ty',
        method: 'GET',
        dataType: 'json',
         data: {
            enname: 'taocishidapinpai'
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) { 
            
               that.setData({              
              PG_PinpaiData:res.data
            })
        }     
        })
        swan.request({
        url: 'https://smartprogram.ceramicschina.com/pinpai_ty',
        method: 'GET',
        dataType: 'json',
         data: {
            enname: 'cizhuanshidapinpai'
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) { 
            
               that.setData({              
              PG_PinpaiData2:res.data
            })
        }     
        })

     /* swan.request({
        url: 'https://smartprogram.ceramicschina.com/pinpaitype',
        method: 'GET',
        dataType: 'json',
         
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {           
               that.setData({              
              list:res.data
            }) 
           }     
        })
        */
 
        // 监听页面加载的生命周期函数
    }, 

    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        swan.setPageInfo({
    title: '陶瓷十大品牌,瓷砖十大品牌,陶瓷一线品牌,卫浴十大品牌,大理石瓷砖十大品牌,十大品牌陶瓷排行榜-中国陶瓷网',
    keywords: '陶瓷十大品牌,瓷砖十大品牌,陶瓷一线品牌,卫浴十大品牌,大理石瓷砖十大品牌',
    description: '十大陶瓷排行榜为中国陶瓷网举行的中国建筑卫生陶瓷年度榜单评选，其中包括陶瓷十大品牌,瓷砖十大品牌,陶瓷一线品牌,卫浴十大品牌,大理石瓷砖十大品牌,十大品牌陶瓷排行榜,全抛釉十大品牌等。',
    articleTitle: '陶瓷十大品牌,瓷砖十大品牌,陶瓷一线品牌,卫浴十大品牌,大理石瓷砖十大品牌,十大品牌陶瓷排行榜-中国陶瓷网',
    image: ['https://m.ceramicschina.com/images/2019bdfm.jpg'],
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
    }
});
