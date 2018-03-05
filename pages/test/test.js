Page({
  data:{

  },
  onLoad:function(){
    console.log("onLoad")
  },
  onShow:function(){
    console.log("onShow")
  },
  onReady:function(){
    console.log("onReady")
  },
  handleTap1:function(){
    console.log("handle-outer->1")
  },
  handleTap2: function () {
    console.log("handle-middler->2")
  },
  handleTap3: function () {
    console.log("handle-inner->3")
  }
})