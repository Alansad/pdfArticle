const pdf = require('html-pdf')

// 生成pdf的参数
const optionDefault = {
  'format': 'A4',
  'header': {
    'height': '10mm',
    'contents': '',
  }
}

// html模版，根据title变化标题
const getHtml = (params) => {
  const {
    title = ' ',
  } = params
  return (`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <title>demo</title>
</head>
<body>
<div class="wrapper">
  <h style="color:red">${title}</h>
  <div>
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs6%2FM00%2FFC%2FCC%2FwKgB4lNzI2yAK4tdAAELj6RBVtE37.jpeg%3FimageMogr2%252Fthumbnail%252F%21310x207r%252Fgravity%252FCenter%252Fcrop%252F%21310x207%252Fquality%252F90&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634331&t=0efacd9a64806ffc74c5cdfa8f7f261f" alt="">
    <img src="https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg" alt="">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs6%2FM00%2FFC%2FCC%2FwKgB4lNzI2yAK4tdAAELj6RBVtE37.jpeg%3FimageMogr2%252Fthumbnail%252F%21310x207r%252Fgravity%252FCenter%252Fcrop%252F%21310x207%252Fquality%252F90&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634331&t=0efacd9a64806ffc74c5cdfa8f7f261f" alt="">
    <img src="https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg" alt="">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs6%2FM00%2FFC%2FCC%2FwKgB4lNzI2yAK4tdAAELj6RBVtE37.jpeg%3FimageMogr2%252Fthumbnail%252F%21310x207r%252Fgravity%252FCenter%252Fcrop%252F%21310x207%252Fquality%252F90&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634331&t=0efacd9a64806ffc74c5cdfa8f7f261f" alt="">
    <img src="https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg" alt="">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs6%2FM00%2FFC%2FCC%2FwKgB4lNzI2yAK4tdAAELj6RBVtE37.jpeg%3FimageMogr2%252Fthumbnail%252F%21310x207r%252Fgravity%252FCenter%252Fcrop%252F%21310x207%252Fquality%252F90&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634331&t=0efacd9a64806ffc74c5cdfa8f7f261f" alt="">
    <img src="https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg" alt="">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs6%2FM00%2FFC%2FCC%2FwKgB4lNzI2yAK4tdAAELj6RBVtE37.jpeg%3FimageMogr2%252Fthumbnail%252F%21310x207r%252Fgravity%252FCenter%252Fcrop%252F%21310x207%252Fquality%252F90&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634331&t=0efacd9a64806ffc74c5cdfa8f7f261f" alt="">
    <img src="https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg" alt="">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs6%2FM00%2FFC%2FCC%2FwKgB4lNzI2yAK4tdAAELj6RBVtE37.jpeg%3FimageMogr2%252Fthumbnail%252F%21310x207r%252Fgravity%252FCenter%252Fcrop%252F%21310x207%252Fquality%252F90&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634331&t=0efacd9a64806ffc74c5cdfa8f7f261f" alt="">
    <img src="https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg" alt="">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs6%2FM00%2FFC%2FCC%2FwKgB4lNzI2yAK4tdAAELj6RBVtE37.jpeg%3FimageMogr2%252Fthumbnail%252F%21310x207r%252Fgravity%252FCenter%252Fcrop%252F%21310x207%252Fquality%252F90&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627634331&t=0efacd9a64806ffc74c5cdfa8f7f261f" alt="">
    <img src="https://img1.baidu.com/it/u=1361135963,570304265&fm=26&fmt=auto&gp=0.jpg" alt="">
  </div>
</div>
</html>
  `)
}

// 将html转为pdf
const exportPdf = (html, options = optionDefault) => {
  return new Promise((resolve, reject) => {
    pdf.create(html, options).toBuffer((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = {
  getHtml,
  exportPdf
}
