// pages/shopcar/shopcar.js
Page({
  data: {
    carList:[
      {sid:1,gpic:"/img/sj.png",gname:"华为Mate30",gintro:"九成新，低价处理",gprice:2999,num:1},
      {sid:2,gpic:"/img/sjk.png",gname:"手机壳",gintro:"男女通用情侣款",gprice:9.9,num:1},
      {sid:3,gpic:"/img/sjx.png",gname:"数据线",gintro:"原装tpc接口，华为通用",gprice:59,num:1},
    ],
    ckAll:false,
    totalPrice: 0.0,
    totalCount:0,
  },
  //修改购买数量
setNum(e){
  //需要知道修改的商品
  let i = e.currentTarget.id;
  // console.log(i);
  //此处还需要知道用户点击的是加还是减
  let fh = e.currentTarget.dataset.fh;
  if(fh=='+'){
    //连接数据库
    this.data.carList[i].num++
  }else if(fh=='-'){
    if(this.data.carList[i].num<=1) return false;
    this.data.carList[i].num--
  }
  this.setData({carList:this.data.carList})
  this.getTotal()
},
//修改选中状态
setCK(e){
  let i = e.currentTarget.id;
  let car = this.data.carList;
  car[i].ck = !car[i].ck
  //如果当前商品取消，则全选取消
  // if(!car[i].ck) this.setData({ckAll:false})
  //如果所有商品选中，则全部选中
  let cnt = 0;
  for(let g of car){
    if(g.ck) cnt++
  }
  this.setData({ckAll:cnt==this.data.carList.length})
  this.setData({carList:car})
  this.getTotal()
},
//修改全选抓状态：全选/全不选
setCkAll(){
  //思路：改变全选按钮的同时，要改变每个商品的选中状态
  let c = !this.data.ckAll
  let car = this.data.carList
  for(let g of car){
    g.ck = c
  }
  this.setData({carList:car,ckAll:c})
  this.getTotal()
},
//定义用于计算总计
getTotal(){
  //需要知道客户购选购了哪些商品
  let car = this.data.carList
  let sum = 0
  let cnt = 0
  for(let g of car){
    if(g.ck){
      sum += g.num * g.gprice
      cnt += g.num
    }
  }
  this.setData({ totalCount:cnt,totalPrice:sum.toFixed(2) })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //学习使用给数据添加“额外的属性”（数据库本身不存在的属性）
    for(let g of this.data.carList){
      g.ck = false;
    }
    this.setData({carList:this.data.carList})
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