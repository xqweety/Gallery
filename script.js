const items = document.querySelector('.items')
const itemsWrap = document.querySelector('.itemWrap')

const totalImage = 13

const image = Array.from({ length: totalImage },
    (_, i) => `./img/image${i + 1}.webp`
)

image.forEach((item) => {
    items.innerHTML += `
    <div class="item">
        <div class="itemWrap">
            <img src="${item}" alt="">
        </div>
        <div class="itemOverlay">
        </div>
    </div>
    `
})
const item = document.querySelector('.item')
const itemWidth = item.offsetWidth
let currentX = 0
const maxScroll = -(items.offsetWidth - window.innerWidth)

items.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        currentX -= itemWidth
    } else {
        currentX += itemWidth
    }

    currentX = Math.max(maxScroll, Math.min(0, currentX))

    gsap.to(items, {
        x: currentX,
        duration: 1
    })
})



