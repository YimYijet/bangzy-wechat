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
    url: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached() {
    }
  }
})