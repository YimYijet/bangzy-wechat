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
    msgCount: {
      type: String,
      value: ''
    }
  },
  lifetimes: {
    attached() {
    }
  }
})