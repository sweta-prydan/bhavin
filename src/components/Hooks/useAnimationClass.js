import { useEffect } from 'react'

export const useAnimationClass = ({ showContent = true } = {}) => {
  const selector = 'span.color-through'
  const animatedClass = 'animated'

  useEffect(() => {
    let selectors = document.querySelectorAll(selector)
    let observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          if (entry.target) {
            entry.target.classList.add(animatedClass)
            observer2.unobserve(entry.target)
          }
        }
      })
    })

    for (let image of selectors) {
      observer2.observe(image)
    }
  }, [showContent])
}
