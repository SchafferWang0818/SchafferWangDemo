// pages/lassie/baby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toast: ["你是我的小宝贝啊", 
    "我好想跟你抱抱", 
    "哼,要抱抱要亲亲", 
    "你不要不理我嘛", 
    "此刻我很挂念你，请为我小心照顾自己", 
    "你给我带来一生中最大的撞击，我会铭记此生", 
    "如果非要给这个爱一个期限，我希望是一万年", 
    "与你一见如故，是我今生最美丽的相遇"],
    size:5
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
  onSwiperItemClick: function () {
    var num = Math.ceil(Math.random()*8);
    wx.showToast({
      title: this.data.toast[num],
    })
  }
})