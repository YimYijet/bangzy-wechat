Component({
  properties: {
    icon: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
    link: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    }
  },
  data: {
    msgCount: 0
  },
  lifetimes: {
    attached() {
      if (this.properties.url) {
        // wx.request({
        //   url: '',
        // })
      }
    }
  }
})