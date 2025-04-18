const headline = document.getElementsByTagName(h1)
headline(4) .innerText = 'เวฟ'

const getByClass = document.getElementsByClassName
console.log(getByClass)

const c = window.confirm(" ดู user agent ไม่ได้");
if (c) {
    window.alert("User agent: "+ navigator.userAgent)
}