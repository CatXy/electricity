// pages/goods/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid:null,
    smList:[],
    myclick:0
  },
  //点击左边列表项
  setActived(e){
    //设置当前被点击的索引号
    let index = e.currentTarget.id
    this.setData({myclick:index})
  },
  /**生命周期函数--监听页面加载*/
  onLoad: function (p) {
    //模拟请求回来的数据
    let list = [
      { smid:1,smname:'手机',cid:1 },
      { smid:2,smname:'笔记本电脑',cid:1 },
      { smid:3,smname:'台式机',cid:1 },
      { smid:4,smname:'打印机',cid:1 },
      { smid:5,smname:'平板',cid:1 },
      { smid:6,smname:'游戏装备',cid:1 },
      { smid:7,smname:'平板',cid:1 },
      { smid:8,smname:'耳机',cid:1 },
      { smid:9,smname:'显示器',cid:1 },
      { smid:10,smname:'相机',cid:1 },
      { smid:11,smname:'手环',cid:1 },
      { smid:12,smname:'充电器',cid:1 },
      { smid:13,smname:'数据线',cid:1 },
      { smid:14,smname:'手环',cid:1 },

      { smid:15,smname:'衣架',cid:2 },
      { smid:16,smname:'热水壶',cid:2 },
      { smid:17,smname:'垃圾袋',cid:2 },
      { smid:18,smname:'脸盆',cid:2 },
      { smid:19,smname:'镜子',cid:2 },
      { smid:20,smname:'化妆用品',cid:2 },
      { smid:21,smname:'收纳盒',cid:2 },
      { smid:22,smname:'暖手宝',cid:2 },
      { smid:23,smname:'蚊帐',cid:2 },
      { smid:24,smname:'抱枕',cid:2 },
      { smid:25,smname:'水壶',cid:2 },

      { smid:26,smname:'球类',cid:3 },
      { smid:27,smname:'瑜伽垫',cid:3 },
      { smid:28,smname:'健身器材',cid:3 },

      { smid:29,smname:'万用表',cid:4 },
      { smid:30,smname:'直角长尺',cid:4 },
      { smid:31,smname:'绘图套装',cid:4 },
      { smid:32,smname:'水平仪',cid:4 },
      { smid:33,smname:'电笔',cid:4 },
      { smid:34,smname:'床上书桌',cid:4 },
      { smid:35,smname:'颜料',cid:4 },
      { smid:36,smname:'画架',cid:4 },

      { smid:37,smname:'平行车',cid:5 },
      { smid:38,smname:'打印服务',cid:5 },
      { smid:39,smname:'花草',cid:5 },
      { smid:40,smname:'取快递',cid:5 },
      { smid:41,smname:'课程辅导',cid:5 },
      { smid:42,smname:'自行车',cid:5 },
    ]
    //数据取回后，要筛选符合要求的内容
    list = list.filter(item=>{
      return item.cid == p.cid
    })
    this.setData({cid:p.cid,smList:list})
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