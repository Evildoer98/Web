/**
 * 首先将页面上的图片的属性设为空字符串，而图片的真实路径则设置在自定义的 data-src 属性，
 * 当页面滚动的时候需要去监听 scroll 事件，在 scroll 事件的回调中，判断懒加载的图片是否进入可视区域
 * 如果图片在可视区内就将图片的的 src 属性设置为 data-original 的值，这样就可以实现延迟加载
 */

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

