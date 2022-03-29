import { useEffect } from 'react'

export const useSlider = ({
  selector,
  wrapper,
  scroll,
  scrollIndecator,
  speed = 2,
}) => {
  useEffect(() => {
    let elem = document.querySelector(`.${selector}`)
    let scrollbar = document.querySelector(`.${scroll}`)
    let startPoint = (elem && elem.scrollLeft) || 0

    let originalScrollBarWidth = elem.scrollWidth
    let originalClientBarWidth = elem.clientWidth
    startPoint =
      (startPoint * 100) / (originalScrollBarWidth - originalClientBarWidth)

    let indicator = document.querySelector(`.${scrollIndecator}`)

    let indicatorWidth = indicator.offsetWidth
    let customScrollBarWidth = scrollbar.offsetWidth - indicatorWidth

    indicator.style.left = (customScrollBarWidth * startPoint) / 100 + 'px'

    scrollbar.style.left = startPoint

    let flag = false
    let reqId = undefined
    let x = undefined
    let mouseX = undefined
    let centerBreak = 100

    const mouseover = e => {
      x = e.pageX
      mouseX = e.clientX

      if (e.target.className.includes(wrapper)) {
        flag = false
      } else if (!flag) {
        flag = true
        reqId = requestAnimationFrame(scrollElement)
      }
    }

    const mouseenter = e => {
      reqId = requestAnimationFrame(scrollElement)
      flag = true
      x = e.pageX
      mouseX = e.clientX
    }

    const scrollElement = () => {
      let centerWidth = elem.offsetWidth / 2
      let xOffset = x - elem.getBoundingClientRect().left
      let clientWidthDT = elem.clientWidth / 2

      if (flag) {
        if (
          clientWidthDT - centerBreak <= mouseX &&
          mouseX <= clientWidthDT + centerBreak
        ) {
          flag = false
        } else if (xOffset < centerWidth) {
          let scroll = elem.scrollLeft - speed
          let percentageOriginal =
            (scroll * 100) / (originalScrollBarWidth - originalClientBarWidth)
          let newScrollLeft = (customScrollBarWidth * percentageOriginal) / 100
          elem.scroll
            ? elem.scroll({
              left: scroll,
              behavior: 'auto',
            })
            : (elem.scrollLeft = scroll)

          indicator.style.left = newScrollLeft + 'px'

          //  elem.scrollLeft -= 5
          reqId = requestAnimationFrame(scrollElement)
        } else if (xOffset > centerWidth) {
          let scroll = elem.scrollLeft + speed
          let percentageOriginal =
            (scroll * 100) / (originalScrollBarWidth - originalClientBarWidth)
          //let perceOne = (originalClientBarWidth * 100) / originalScrollBarWidth

          let newScrollLeft = (customScrollBarWidth * percentageOriginal) / 100

          elem.scroll
            ? elem.scroll({
              left: scroll,
              behavior: 'auto',
            })
            : (elem.scrollLeft = scroll)

          indicator.style.left = newScrollLeft + 'px'

          // elem.scrollLeft += 5
          reqId = requestAnimationFrame(scrollElement)
        }
      } else {
      }
    }

    const mouseleave = e => {
      flag = false
      cancelAnimationFrame(reqId)
      x = undefined
      mouseX = undefined
    }

    elem.addEventListener('mousemove', mouseover)
    elem.addEventListener('mouseenter', mouseenter)
    elem.addEventListener('mouseleave', mouseleave)

    return () => {
      elem.removeEventListener('mousemove', mouseover)
      elem.removeEventListener('mouseenter', mouseenter)
      elem.removeEventListener('mouseleave', mouseleave)
    }
  }, [scroll, scrollIndecator, selector, speed, wrapper])
}
