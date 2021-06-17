function lazyload () {
    const imgs = document.getElementsByTagName('img')
    const len = imgs.length
    const viewHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
    for (let i = 0; i < len; i++) {
        const offsetHeight = imgs[i].offsetTop
        if (offsetHeight < viewHeight + scrollHeight) {
            const src = img[i].dataset.src
            img[i].src = src
        }        
    }
}
window.addEventListener('scroll', lazyload)
