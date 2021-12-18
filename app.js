const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      container = document.querySelector('.container'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      slidesCount = sidebar.children.length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))
document.addEventListener('keydown', event => {
    if (event.key === "ArrowUp"){
        changeSlide('up')
    } else if (event.key === "ArrowDown"){
        changeSlide('down')
    }
})

function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}