window.z = {
  phones: {
    iphone:   { width:320, height:568 },
    galaxy:   { width:360, height:640 },
    iphone6:  { width:375, height:667 },
    iphone6p: { width:414, height:736 }
  },
  tablets: {
    ipad:     { width:768,  height:1024 },
    galaxy:   { width:800,  height:1280 },
    surface:  { width:720,  height:1280 },
    ipadpro:  { width:1024, height:1366 },
    surface3: { width:1024, height:1440 }
  },
  widths: {
    100:  { width: 100 },
    200:  { width: 200 },
    300:  { width: 300 },
    400:  { width: 400 },
    500:  { width: 500 },
    600:  { width: 600 },
    700:  { width: 700 },
    800:  { width: 800 },
    900:  { width: 900 },
    1000: { width: 1000 },
    1100: { width: 1100 },
    1200: { width: 1200 },
    1300: { width: 1300 },
    1400: { width: 1400 },
    1500: { width: 1500 },
    1600: { width: 1600 },
    1700: { width: 1700 },
    1800: { width: 1800 },
    1900: { width: 1900 },
    2000: { width: 2000 }
  },
  heights: {
    100:  { height: 100 },
    200:  { height: 200 },
    300:  { height: 300 },
    400:  { height: 400 },
    500:  { height: 500 },
    600:  { height: 600 },
    700:  { height: 700 },
    800:  { height: 800 },
    900:  { height: 900 },
    1000: { height: 1000 },
    1100: { height: 1100 },
    1200: { height: 1200 }
  },
  basic: {
    iphone: { width:375, height:667 }
  },
  open(width = 375, height = 667) {
    const windowLeft = (window.screen.availWidth - width) / 2
    const windowTop = (window.screen.availHeight - height) / 2
    window.open(location.href,'window',`directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=${width},height=${height},left=${windowLeft},top=${windowTop}`)
  },
  resize(obj = basic, portrait = true) {
    const offset = window.outerHeight - window.innerHeight
    portrait ? window.resizeTo(obj.width, obj.height + offset) : window.resizeTo(obj.height, obj.width + offset)
  },
  play(obj, speed = 1) {
    let i = 0
    for (let item in obj) {
      if (obj.hasOwnProperty(item)) {
        i++
        obj[item].width = obj[item].width || window.screen.availWidth
        obj[item].height = obj[item].height || window.screen.availHeight
        const windowLeft = (window.screen.availWidth - obj[item].width) / 2
        const windowTop = (window.screen.availHeight - obj[item].height) / 2
        setTimeout(() => {
          console.log(`width: ${obj[item].width}${' '.repeat(12 - String(obj[item].width).length)}|${' '.repeat(9)}height: ${obj[item].height}${' '.repeat(12 - String(obj[item].height).length)}|${' '.repeat(9)}${item}`)
          window.resizeTo(obj[item].width, obj[item].height)
          window.moveTo(windowLeft, windowTop)
        }, i * (speed * 1000))
      }
    }
  },
  reset() {
    this.resize({ width:375, height:667 })
  },
  test(obj) {
    const name = obj.iphone
    let width = name.width
    let height = name.height
    const screenWidth = screen.availWidth
    const screenHeight = screen.availHeight
    let i = 0
    while (width < screenWidth || height < screenHeight) {
      i++
      width += 20
      height += 20
      const windowLeft = (screenWidth - width) / 2
      const windowTop = (screenHeight - height) / 2
      const defaultSpace = ' '.repeat(10)
      const widthSpace = ' '.repeat(12 - String(width).length)
      const heightSpace = ' '.repeat(12 - String(height).length)
      setTimeout(function() {
        console.log(`width: ${width}${widthSpace}|${defaultSpace}height: ${height}${heightSpace}|${defaultSpace}${name}`)
        window.moveTo(windowLeft, windowTop)
        window.resizeBy(width,height)
      }, i * 500)
    }
  },
  build(devices) {
    const el = document.createElement('span')
    el.setAttribute('style','position:fixed;bottom:0;right:0;background:#070707;cursor:pointer;z-index:999;height:2em;width:2em;display:block')
    document.body.appendChild(el)
    el.addEventListener('click', this.play(devices))
  },
  init() {
    const obj = Object.assign({}, this.phones, this.tablets)
    setTimeout(function() { this.build(obj) }, 2000)
  }
}
z.init()



(function newWindow(width = 375, height = 667) {
  const windowLeft = (window.screen.availWidth - width) / 2
  const windowTop = (window.screen.availHeight - height) / 2
  window.open(location.href,'window',`directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=${width},height=${height},left=${windowLeft},top=${windowTop}`)
})()
