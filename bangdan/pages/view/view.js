var WxParse = require('../../../wxParse/wxParse.js');
Page({
    data: {
        systemInfo:{},
        toView: 'default',
        regionData: ['全部', '', ''],
        customItem: '',
        regionData1: ['全部', '', ''],
        customItem1: '',
        digest:{},
        agentlist:[],
        cailist:[]
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
        url: 'https://smartprogram.ceramicschina.com/viewpinpai',
        method: 'GET',
        data: {
            id: options.id
        },
        dataType: 'json',
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
           //console.log(res.data.pg_PinpaiJiaMeng);
             that.setData({
              digest:res.data,
             // agentlist:res.data.pg_PinpaiJiaMeng,
              // cailist:res.data.pg_purchasing
            })

         WxParse.wxParse('wxParseData', 'html', res.data.pinpaijianjie, that, 10);
          WxParse.wxParse('wxParseData_pinpaitiaojian', 'html', res.data.pinpaitiaojian, that, 10);
            WxParse.wxParse('wxParseData_pinpaiyousi', 'html', res.data.pinpaiyousi, that, 10);
              WxParse.wxParse('wxParseData_pinpaizhichi', 'html', res.data.pinpaizhichi, that, 10);

    WxParse.wxParse('wxParseData_pinpailiucheng', 'html', res.data.pinpailiucheng, that, 10);



swan.setNavigationBarTitle({
    title: res.data.pinpainame
});
swan.setPageInfo({
            title: res.data.pinpainame + '怎么样_'+res.data.pinpainame+'企业简介_中国陶瓷网',
            keywords: res.data.pinpainame + "怎么样," +  res.data.pinpainame + "企业简介",
            description: res.data.pinpaidescription,
            articleTitle:res.data.pinpainame + '怎么样_'+res.data.pinpainame+'企业简介_中国陶瓷网',
             image: ['https://img1.ceramicschina.com'+res.data.pinpailogo+''],
            success: function () {
                console.log('setPageInfo success');
            },
            fail: function (err) {
                console.log('setPageInfo fail', err);
            }
        })
        /*
   swan.request({
        url: 'https://smartprogram.ceramicschina.com/getjiameng',
        method: 'GET',
        data: {
            id: options.id,
            pageid:1,
            pagesize:5
        },
        dataType: 'json',
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (re) {
            var datalists=re.data;

 that.setData(
            'agentlist',datalists
        );

        }
   });
    swan.request({
        url: 'https://smartprogram.ceramicschina.com/getcai',
        method: 'GET',
       data: {
            pageid:1,
            pagesize:5
        },
        dataType: 'json',
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (re2) {
 that.setData(
            'cailist',re2.data
        );

        }
   });
   */
        }
        })

swan.getSystemInfo({
    success: function (res3) {
          that.setData(
           'systemInfo',res3
        )

       // console.log(res3.windowHeight);
    }
});

        // 监听页面加载的生命周期函数
    },
  notice: function(str){
    swan.showModal({
      title: '',
      content: str,
      success: function (res) {
      }
    })
  },
    formSubmitHandle: function(e) {
       var istrue=true;
        var that=this;
        var formData = e.detail.value;   // 声明变量，值为表单内容
      if(formData.sheng==0)
      {
         var hint = "请选择开店地点";
          this.notice(hint);
        istrue = false;
         return false;
      }
        if(formData.KaidianAddress=="")
      {
         var hint = "请输入开店详细地址";
          this.notice(hint);
        istrue = false;
         return false;
      }
         if(formData.TouZiE=="")
      {
         var hint = "请填写投资金额";
          this.notice(hint);
        istrue = false;
         return false;
      }
        if(formData.Name=="")
      {
         var hint = "请填写您的真实姓名";
          this.notice(hint);
        istrue = false;
         return false;
      }

    var res=this.checkPhone(formData.PhoneNumber);
      if(res!='1'){
          this.notice(res);
           istrue = false;
         return false;
      }

	if (istrue){
		// 反之，表单填写正常，返回true，执行后续操作
		//return true;  // 通过验证，返回true
		// console.log("通过检测，执行业务...")

      console.log(formData.pinpaiid)
      var sh=formData.sheng;
      var strsh="";
      var str="";
       for (var ar in sh) {
           strsh=sh[0];
           str+=sh[ar];
           	}
       console.log(strsh);

 swan.request({
        url: 'https://smartprogram.ceramicschina.com/SubmitJiaMeng',
        method: 'GET',
        dataType: 'json',
        data: {
            DailiPinpaiID: formData.pinpaiid,
            JiamengXingshi:  formData.DailiPinpaiID,
            sheng:strsh,
            KaidianAddress:str+formData.KaidianAddress,
            TouZiE: formData.TouZiE,
            XiangguanHangye: formData.XiangguanHangye,
            Name: formData.Name,
            PhoneNumber: formData.PhoneNumber,
            AgentYuanyin:formData.AgentYuanyin,
            UserID:formData.UserID
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
           if (res.data.id==1){
              that.notice(res.data.msm);
              swan.navigateTo({
              url: '/bangdan/pages/view/view?id='+formData.pinpaiid+''
            });
            }else{
              that.notice("提交失败");
            }
        }
    });


    }
      //  console.log('form表单submit：',e.detail.value);
     // console.log('form表单submit：', e.detail.formId);
    },
    checkPhone: function (phone) {
    if (phone.length == 0) {
      return '请输入手机号码！';
    }
    if (phone.length != 11) {
      return '请输入有效的手机号码！'
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(phone)) {
      return '请输入有效的手机号码！'
    }
    return '1'
  },
   formSubmitcai: function(e) {
       var istrue=true;
        var that=this;
        var formData = e.detail.value;   // 声明变量，值为表单内容
         if(formData.cai_sheng==0)
      {
         var hint = "请选择采购地点";
          this.notice(hint);
        istrue = false;
         return false;
      }
        if(formData.address=="")
      {
         var hint = "请输入采购详细地址";
          this.notice(hint);
        istrue = false;
         return false;
      }
         if(formData.purchasingnumber=="")
      {
         var hint = "请填写采购面积";
          this.notice(hint);
        istrue = false;
         return false;
      }
        if(formData.cai_Name=="")
      {
         var hint = "请填写您的真实姓名";
          this.notice(hint);
        istrue = false;
         return false;
      }

    var res=this.checkPhone(formData.cai_PhoneNumber);
      if(res!='1'){
          this.notice(res);
           istrue = false;
         return false;
      }

	if (istrue){
		// 反之，表单填写正常，返回true，执行后续操作
		//return true;  // 通过验证，返回true
		// console.log("通过检测，执行业务...")

      // console.log(formData.pinpaiid)
      var sh=formData.cai_sheng;
      var strsh="";
      var str="";
       for (var ar in sh) {
           strsh=sh[0];
           str+=sh[ar];
           	}
       //console.log(str);

 swan.request({
        url: 'https://smartprogram.ceramicschina.com/Submitcai',
        method: 'GET',
        dataType: 'json',
        data: {
            id: formData.cai_pinpaiid,
            UserID:formData.UserID,
            sheng:strsh,
            Address:str+formData.address,
            PurchasingNumber: formData.purchasingnumber,
            PurchasingType: formData.purchasingtype,
            Name_cai: formData.cai_Name,
            PhoneNumber_cai: formData.cai_PhoneNumber,
            remark:formData.remark
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
           if (res.data.id==1){
              that.notice(res.data.msm);
              swan.navigateTo({
             url: '/bangdan/pages/view/view?id='+formData.cai_pinpaiid+''
            });
            }else{
              that.notice("提交失败");
            }
        }
    });



    }
       //  console.log('form表单submit：',e.detail.value);
     // console.log('form表单submit：', e.detail.formId);
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
    },
     regionChange(e) {
        this.setData(
            'regionData', e.detail.value
        );
        console.log('picker-time changed，值为', e.detail.value);
    },
     regionChange1(e) {
        this.setData(
            'regionData1', e.detail.value
        );
        console.log('picker-time changed，值为', e.detail.value);
    },
     DailiPinpaiIDChange: function(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
    },
    XiangguanHangyeChange: function(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
    },
    jmClick:function(e)
    {
        var that=this;
        var hash=e.target.dataset.hash;
          that.setData(
           'toView',hash
        )

        // console.log('采购：', hash);
    },
    caiClick:function(e)
    {
        var that=this;
        var hash=e.target.dataset.hash;
          that.setData(
           'toView',hash
        )

        // console.log('采购：', hash);
    }
    ,
    makePhoneCall(e) {
        let phoneNumber ="400-115-2002";
        if (!phoneNumber) {
            swan.showToast({
                title: '请输入电话号码',
                icon: 'none'
            });
            return;
        }
        swan.makePhoneCall({
            phoneNumber,
            // phoneNumber: '0313-xxxx xxxx',
            // phoneNumber: '(0313)xxxx xxxx',
            // phoneNumber: '0313 xxxx xxxx',
            // phoneNumber: 'txk0bkt', // 8950258
            fail: err => {
                swan.showModal({
                    title: '拨打失败',
                    content: '请检查是否输入了正确的电话号码',
                    showCancel: false
                });
            }
        });
    }


});