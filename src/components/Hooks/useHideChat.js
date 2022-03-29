import { useEffect } from 'react'
import { isWindowDefined } from 'config/utils'

const routes = ['/careers/', '/current-openings/']

export const useHideChat = ({ pathname }) => {
  useEffect(() => {
    if (isWindowDefined) {
      if (routes.includes(pathname))
        document.body.classList.add('current-openings')
      else document.body.classList.remove('current-openings')
    }
  }, [pathname])
}
