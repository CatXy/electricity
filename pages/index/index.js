//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swList:[
      '../../img/1.jpg',
      '../../img/2.jpg',
      '../../img/3.jpg'
    ],
    cList:[],
    goodList:[
      {gid:1,pic:'/img/sjk.png',gname:'荣耀手机壳',gintro:'防摔情侣可爱小清新',gprice:"9.9"},
      {gid:2,pic:'/img/sj.png',gname:'华为手机',gintro:'高清照相功能，给你最棒的体验',gprice:'4999'},
      {gid:3,pic:'/img/sjx.png',gname:'华为原装tpc数据线',gintro:'原装便携数据线',gprice:'59'},
      {gid:4,pic:'/img/sjk.png',gname:'荣耀手机壳',gintro:'防摔情侣可爱小清新',gprice:"9.9"},
      {gid:5,pic:'/img/sj.png',gname:'华为手机',gintro:'高清照相功能，给你最棒的体验',gprice:'4999'},
      {gid:6,pic:'/img/sjx.png',gname:'华为原装tpc数据线',gintro:'原装便携数据线',gprice:'59'},
    ],
    
  },
  //定义用于“读取轮播图数据”的函数
  getSwiper(){
    // wx.request({
    //   url: app.Server + '/api/goods/tj',
    //   success:res=>{
    //     let list = res.data
    //     for(let s of list){
    //       s.pic = app.Server + "/storage/" + s.pic
    //     }
    //     this.setData({swList:list})
    //   }
    // })
  },
  //定义用于读取“物品大类数据”函数
  getBigClass(){
    wx.request({
      url:app.Server + "/api/goods/bigclass",
      success:res=>{
        let list = res.data
        for(let c of list){
          c.bpic = app.Server + "/storage/" + c.bpic
        }
        //将更改后的数据填充到data定义的变量，以便在界面显示
        this.setData({cList:list})
      }
    })
  },
  onLoad: function () {
    this.getSwiper()
    this.getBigClass()
  },
})
