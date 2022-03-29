import { useEffect, useRef } from 'react'

export const usePreventScroll = selector => {
  let elems = useRef()
  useEffect(() => {
    elems.current = document.querySelectorAll(selector)
    // listeners
    function touchStart(e) {
      this.firstClientX = e.touches[0].clientX
      this.firstClientY = e.touches[0].clientY
    }

    function preventTouch(e) {
      const minValue = 5 // threshold

      this.clientX = e.touches[0].clientX - this.firstClientX
      this.clientY = e.touches[0].clientY - this.firstClientY

      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(this.clientX) > minValue) {
        e.preventDefault()
        e.returnValue = false
        return false
      }
    }

    if (elems.current) {
      for (let e of elems.current) {
        e.addEventListener('touchstart', touchStart)
        e.addEventListener('touchmove', preventTouch, { passive: false })
      }
    }

    return () => {
      for (let e of elems.current) {
        e.addEventListener('touchstart', touchStart)
        e.addEventListener('touchmove', preventTouch, { passive: false })
      }
    }
  }, [elems, selector])
}
