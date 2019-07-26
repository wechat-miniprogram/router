Component({
  properties: {
    url: {
      type: String,
      value: ''
    },
    params: {
      type: Object,
      value: {}
    },
    query: {
      type: Object,
      value: {}
    },
    'open-type': {
      type: String,
      value: 'navigate'
    },
    delta: {
      type: Number,
      value: 1
    }
  },
  data: {
  },
  methods: {
    onTap() {
      let url = this.data.url
      for (const key in this.data.params) {
        if (Object.prototype.hasOwnProperty.call(this.data.params, key)) {
          const reg = new RegExp(`:${key}`, 'g')
          url = url.replace(reg, this.data.params[key])
        }
      }
      const queryArr = []
      for (const key in this.data.query) {
        if (Object.prototype.hasOwnProperty.call(this.data.query, key)) {
          queryArr.push(`${key}=${this.data.query[key]}`)
        }
      }
      if (queryArr.length && url.indexOf('?') > 0) {
        url += '&' + queryArr.join('&')
      } else if (queryArr.length && url.indexOf('?') < 0) {
        url += '?' + queryArr.join('&')
      }
      const methodType = {
        navigate: 'navigateTo',
        redirect: 'redirectTo',
        switchTab: 'switchTab',
        reLaunch: 'reLaunch',
        navigateBack: 'navigateBack'
      }
      const method = methodType[this.data['open-type']]
      this.triggerEvent('beforeroute')
      if (method === 'navigateBack') {
        wx[method]({
          delta: this.data.delta,
          success: () => {
            this.triggerEvent('afterroute')
          }
        })
      } else {
        wx[method]({
          url,
          success: () => {
            this.triggerEvent('afterroute')
          }
        })
      }
    }
  },
  lifetimes: {
    attached() {
    }
  }
})
