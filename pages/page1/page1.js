Page({

  /**
   * 页面的初始数据
   */
  data: {
    initText:"这是初始化的文本内容",
    initBoolean:true,
    items:[1,2,3,4,5,6,7,8,9,10]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    
  },
  btnClick:function(){
    console.log("按钮被电击了")
    this.setData({initText:"这是一个新的内容"})
   var show = this.data.initBoolean
   this.setData({initBoolean:!show})

   var newItems = this.data.items
  //  删除 position=0的值
   newItems.shift()

   this.setData({items:newItems})
  }
})