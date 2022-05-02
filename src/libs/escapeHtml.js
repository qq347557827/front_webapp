// import faces from '@/assets/js/face.js';
import faces from '@/config/face'

export function escapeHtml(val) {
  // debugger
  if (!val) return ''
  // console.log('escapeHtml')
  let result = val
  // const img = /!\[.*\]\(.+?\)/g  \[[\u4e00-\u9fa5A-Za-z]{1,8}\]
  const faceRule = /\[[\u4e00-\u9fa5A-Za-z]{1,8}\](?!\()/g
  // const faceRule = /\[\S+?\](?!\()/g

  if (faceRule.test(result)) {
    const faceGroup = result.match(faceRule)
    faceGroup.map((item) => {
      // console.log(item)
      const emoji = faces.filter((value) => {
        // if (value.cn === item) {
        //   return value.style
        // }
        return value.source === item
      })
      // debugger
      const imgUrl = emoji[0].show
      // console.log(imgUrl)
      // const emojiDiv = `<span style="display: inline-block; vertical-align: sub; background:${imgUrl}; background-position:${style['background-position']}; background-size:${style['background-size']}; height:${style.height}; width:${style.width}"></span>`
      const emojiDiv = `<span style="display: inline-block; vertical-align: sub; background: url('${imgUrl}') no-repeat; background-size:100% 100%; width: 20px; height: 20px;"></span>`
      result = result.replace(item, emojiDiv)
    })
  }

  const img = /!\[[\s\S]*?\]\([\s\S]*?\)/g
  if (img.test(result)) {
    const group = result.match(img)
    // console.log(group)
    group.map((item) => {
      // console.log('item', item);
      const toimgUrl = item.match(/\((.+)\)/g)
      // console.log('toimgUrl', toimgUrl);
      const imgUrl = toimgUrl[0].substr(1, toimgUrl[0].length - 2)
      // console.log('imgUrl', imgUrl);
      const imgdiv = `<div><img src="${imgUrl}"></div>`
      result = result.replace(item, imgdiv)
    })
    // group.map((item) => {
    //   result = result.replace(item, `<img src="${item.substr()}">`)
    // })
  }
  // 解析链接
  const urlRult = /\[[\s\S]*?\]\([\s\S]*?\)/g
  if (urlRult.test(result)) {
    const urlGroup = result.match(urlRult)
    urlGroup.map((item) => {
      const urlTitleGroup = item.match(/\[(.+)\]/g)
      const urlTitle = urlTitleGroup[0].substr(1, urlTitleGroup[0].length - 2)
      // console.log(urlTitle);
      const urlGroup = item.match(/\((.+)\)/g)
      const url = urlGroup[0].substr(1, urlGroup[0].length - 2)
      // console.log(url);
      const tag = `<a href="${url}">${urlTitle}</a>`
      result = result.replace(item, tag)
    })
  }

  const quoteRult = /\n(&gt;|\>)(.*)/g
  if (quoteRult.test(result)) {
    const quoteGroup = result.match(quoteRult)
    // console.log('quoteGroup', quoteGroup)
    quoteGroup.map((item) => {
      const quote = item.substr(2, item.length - 2)
      // console.log(quote)
      const tag = `<div class="pre-quote">${quote}</div>`
      result = result.replace(item, tag)
    })
  }

  const codeRult = /`{1,2}[^`](.*?)`{1,2}/g
  if (codeRult.test(result)) {
    const codeGroup = result.match(codeRult)
    codeGroup.map((item) => {
      const val = item.substr(1, item.length - 2)
      const val2 = val.replace(/\</g, '&lt;')
      const val3 = val2.replace(/\>/g, '&gt;')
      // console.log('val', val3);
      const tag = `<div class="pre-code">${val3}</div>`
      result = result.replace(item, tag)
    })
    // console.log(codeGroup);
  }
  return result
}
