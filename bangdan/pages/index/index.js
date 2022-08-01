Page({
    data: {
      list:[],
      enname:'',
      strname:'',
      PG_PinpaiData:[],
      listdata:'',
RedirectUrl:''
    },
    onLoad: function (options) {
          var that=this;
          var  listdata="";
            var strname="";
            var RedirectUrl="";
       swan.request({
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

        swan.request({
        url: 'https://smartprogram.ceramicschina.com/pinpai_ty',
        method: 'GET',
        dataType: 'json',
         data: {
            enname: options.typename
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            console.log(res);
            for (var index in res.data.pg_pinpaidata) {
         listdata+= res.data.pg_pinpaidata[index].pg_pinpaidigest.pinpainame+'、';
        }
         listdata = listdata.substring(0, listdata.length - 1);

               that.setData({
              PG_PinpaiData:res.data.pg_pinpaidata,
              listdata:listdata,
               enname:options.typename,
               strname:res.data.pinpaitypename,
               RedirectUrl:res.data.redirecturl
            })
            swan.setNavigationBarTitle({
    title: res.data.pinpaitypename
});
swan.setPageInfo({
            title: res.data.pinpaitypewebtitle,
            keywords: res.data.pinpaitypewebkeywords,
            description:RedirectUrl+"·"+strname+"”的有："+listdata+"（以上排名不分前后）",
            articleTitle: res.data.pinpaitypewebtitle,
            image: ['https://m.ceramicschina.com/images/logo121.jpg'],
            success: function () {
                console.log('setPageInfo success');
            },
            fail: function (err) {
                console.log('setPageInfo fail', err);
            }
        })

           }
        })

       /*    swan.request({
        url: 'https://smartprogram.ceramicschina.com/getty',
        method: 'GET',
        data: {
            enname: options.typename
        },
        dataType: 'json',
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {

strname=res.data.PinpaiTypeName;
          that.setData(
            'strname',res.data.PinpaiTypeName
        );



       // console.log('picker-time changed，值为', res.data);
        }
    });
        */
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