// pages/goods/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gid:null,
    goods:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let goods = {
      "photo":['/img/sj.png','/img/3.jpg'],
      "gname":'华为Meta40',
      "intro":'高清照相功能，给你最棒的体验',
      "price":2999,
      "level":8,
      "createtime":'2020-07-20 15:33:25',
      "state":'正常',
      "howbuy":'上门自取',
      "student":{'sid':'18001','sname':'张三'}
    }
    //设置商品价格，精确到小数位（两位小数）
    goods.price = goods.price.toFixed(2)
    this.setData({gid:options.gid,goods:goods})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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