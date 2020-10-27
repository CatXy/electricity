// pages/my/my.js
//引入全局实例
const app = getApp()
Page({
  /**页面的初始数据*/
  data: {
    userInfo:{},
    hasUserInfo:false,//是否已经存在用户信息
    canIUse:wx.canIUse('button.open-type.getUserInfo')
  },
  //呼叫客服电话
callTel(){
  //调用微信开放能力，实现拨打电话
  wx.makePhoneCall({
    phoneNumber: '17345240626',
  })
},
  /** 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    //如果全局数据已经存在用户信息，则使用该信息
    if(app.globalData.userInfo){
      this.setUserInfo(app.globalData.userInfo)
    }else if(this.data.canIUse){
      app.userInfoReadyCallBack = (res)=>{
        this.setUserInfo(res.userInfo)
      }
      //否则，调用微信的开放能力，获取授权
      wx.getUserInfo({
        success:(res)=>{
          this.setUserInfo(res.userInfo)
        }
      })
    }
  },
  //设置当前的用户信息
  setUserInfo(user){
    console.log(user)
    //获取到用户信息后，写入界面和全局数据，以便下次使用
    if(user!=null){
      app.globalData.userInfo = user
      this.setData({userInfo:user,hasUserInfo:true})
    }
  },
  //按钮获取用户授权
  getUserInfo(e){
    this.setUserInfo(e.detail.userInfo)
  },
  /**生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})