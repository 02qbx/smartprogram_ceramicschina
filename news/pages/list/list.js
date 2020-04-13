Page({
    data: {
ProClass:'',
list:[],
pageid:1,
id:'',
webtitle:'',
webkey:'',
webds:''
    },
    onLoad: function (options) {
            var that=this; 
            swan.setNavigationBarTitle({
    title: '中国陶瓷网'
    });    
     
           this.loadData(options.id,1);
  swan.setPageInfo({
    title: that.data.webtitle,
    keywords:that.data.webkey,
    description: that.data.webds,
    articleTitle:that.data.webtitle,
    image: ['https://m.ceramicschina.com/Content/m_img/LOGO.png'],
            success: function () {
                console.log('setPageInfo success');
            },
            fail: function (err) {
                console.log('setPageInfo fail', err);
            }
        })
        // 监听页面加载的生命周期函数
    }, 
     
      loadMore: function (e) {
           var that=this;
    var page =e.target.dataset.hash;
    var id=that.data.id;
   // console.log( id);
    this.loadData(id,page);
    
  },
  loadData: function (id,pageid) {
    var that = this
    swan.request({
        url: 'https://smartprogram.ceramicschina.com/newlist',
        method: 'GET',
        dataType: 'json',
        data: {
            id:id,
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
              ProClass:res.data.zonetype,              
              list:newarr,
            pageid:pageidn,
            id:id
            })

           }else
           {
              // console.log(res.data.PG_NewsContent);
               that.setData({ 
                   ProClass:res.data.zonetype,              
              list:res.data,
            pageid:pageidn,
            id:id,
            webtitle:res.data.zonetype+"-陶瓷新闻资讯中心-中国陶瓷网",
webkey:res.data.zonetype,
webds:res.data.zonetype+"-陶瓷新闻资讯中心-中国陶瓷网"
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