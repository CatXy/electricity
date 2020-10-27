// pages/news/news.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[],
    x:0,
    y:0,
    page:1,
    isEnd:false //定义数据是否全部加载
  },
  //根据设备尺寸重新设置想x，y
  setSize(){
    let dev = wx.getSystemInfoSync()
    let w = dev.windowWidth
    let h = dev.windowHeight
    let q = wx.createSelectorQuery()
    q.select("#movbox").boundingClientRect()
    q.exec(r=>{
      w -= r[0].width * 1.5
      h -= r[0].height * 1.5
    })
    this.setData({x:w,y:h})
  },
  //调取数据库数据
  getList(){
    //如果已经全部加载，返回，不再执行查询操作
    if(this.data.isEnd) return false
    //调取新数据之前，要保留先前数据
    let oldList = this.data.newsList
    wx.request({
      url: app.Server + '/api/notice/getlist',
      data:{page:this.data.page},
      success:res=>{
        let list = res.data.data
        for(let n of list){
          n.pic=app.Server + '/storage/' + n.pic
        }
        //把新数据合并到先前数据
        list = oldList.concat(list)
        this.setData({newsList:list})
        //判断数据是否已经全部加载
        if(res.data.total==this.data.newsList.length){
          this.setData({isEnd:true})
        }
      },
      complete:res=>{
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用自定义函数
    this.getList()
    //调用尺寸函数
    this.setSize()
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
    //当监听到用户下拉页面时，重新加载数据
    //如果页码不是1，则需要重新设置新页码
    this.setData({page:1,isEnd:false,newsList:[]})
    this.getList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log('页面已经到达底部')
    //先把page+1
    ++this.data.page
    this.getList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})