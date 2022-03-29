import { useEffect, useRef } from 'react'

export const useDraggable = selector => {
  let elems = useRef()
  useEffect(() => {
    elems.current = document.querySelectorAll(selector)
    // listeners
    function removeClass() {
      isDown = false
      this.classList.remove('active')
    }

    function mousedown(e) {
      isDown = true
      this.classList.add('active')
      startX = e.pageX - this.offsetLeft
      scrollLeft = this.scrollLeft
    }

    function mousemove(e) {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - this.offsetLeft
      const walk = (x - startX) * 3 //scroll-fast
      this.scrollLeft = scrollLeft - walk
      //   console.log(walk)
    }

    let isDown = false
    let startX
    let scrollLeft

    if (elems.current) {
      for (let e of elems.current) {
        e.addEventListener('mouseleave', removeClass)
        e.addEventListener('mouseup', removeClass)
        e.addEventListener('mousedown', mousedown)
        e.addEventListener('mousemove', mousemove)
      }
    }
    return () => {
      for (let e of elems.current) {
        e.removeEventListener('mouseleave', removeClass)
        e.removeEventListener('mouseup', removeClass)
        e.removeEventListener('mousedown', mousedown)
        e.removeEventListener('mousemove', mousemove)
      }
    }
  }, [elems, selector])
}
