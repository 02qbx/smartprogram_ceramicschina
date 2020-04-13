const app = getApp()

Page({
   data: {
ad:[],
list:[],
pageid:1,
canIUse: swan.canIUse('swiper')
    },
    onLoad: function () {
       var that=this; 
            swan.setNavigationBarTitle({
    title: '中国陶瓷网'
    });    
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
              ad:res.data
            }) 
           }     
        })
           this.loadData(1);
 
        // 监听页面加载的生命周期函数
    }, 
     
      loadMore: function (e) {
    var id =e.target.dataset.hash;
    // console.log('picker-time changed，值为', id);
    this.loadData(id);
    
  },
  loadData: function (pageid) {
    var that = this
    swan.request({
        url: 'https://smartprogram.ceramicschina.com/index',
        method: 'GET',
        dataType: 'json',
        data: {
            page:pageid
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            var pageidn=that.data.pageid+1;
           // console.log('picker-time changed，值为', pageidn);
           if(pageid>1)
           {
            var arr = that.data.list
            var newarr = arr.concat(res.data);
            that.setData({              
              list:newarr,
            pageid:pageidn
            })

           }else
           {
               that.setData({              
              list:res.data,
            pageid:pageidn
            })
 
           }
       // console.log('picker-time changed，值为', res.data);
        }
    });


 
     },

    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        swan.setPageInfo({
    title: '中国陶瓷网|瓷砖卫浴行业门户网站',
    keywords: '陶瓷,瓷砖,卫浴,陶瓷网,中国陶瓷网,陶瓷十大品牌,卫浴十大品牌,瓷砖十大品牌,陶瓷一线品牌,抛光砖十大品牌,仿古砖十大品牌,微晶石,微晶石十大品牌,全抛釉,全抛釉十大品牌,瓷片,瓷片十大品牌,木纹砖,木纹砖十大品牌,佛山陶瓷,陶瓷品牌,陶瓷信息,陶瓷企业,陶瓷展会',
    description: '中国陶瓷网是陶瓷行业门户网站，提供陶瓷、瓷砖、卫浴、原料设备等企业供求商机发布的电子商务平台，举办陶瓷十大品牌、陶瓷展会和陶瓷卫浴优秀经销商评选等活动，长期致力于服务佛山、山东、江西、福建等大型陶瓷产区，为终端经销商和消费者提供陶瓷卫浴行业一手资讯。现在，中国陶瓷网已成为我国陶瓷行业中专业、丰富、具特色的陶瓷信息资讯网站。',
    articleTitle: '中国陶瓷网|瓷砖卫浴行业门户网站',
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
    }
});

