import { useEffect, useState } from 'react'

export const useLazyLoad = selector => {
  let [showContent, shouldShowContent] = useState(false)
  useEffect(() => {
    import('intersection-observer').then(_ => {
      let elem = document.querySelector(selector)
      const options = {
        rootMargin: '0px',
        threshold: 0.1,
      }

      if (elem) {
        let observer = new IntersectionObserver(entries => {
          let entry = entries[0]
          if (entry && entry.isIntersecting) {
            shouldShowContent(true)
            observer.unobserve(elem)
          }
        }, options)
        observer.observe(elem)
      }
    })
  }, [selector])

  return { showContent }
}
