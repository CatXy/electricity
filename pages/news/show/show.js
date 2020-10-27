// pages/news/show/show.js
const app = getApp()
Page({
  /** 页面的初始数据*/
  data: {
    //定义一个资讯空对象
    notice:{}
  },
  //根据传递的新闻编号，查询对应的新闻
  getNews(nid){
    wx.request({
      url:app.Server+ '/api/notice/show',
      data:{'nid':nid},
      success:res=>{
        let n = res.data
        n.pic = app.Server+'/storage/' + n.pic
        this.setData({notice:n})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews(options.nid)
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