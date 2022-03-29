export const isWindowDefined = typeof window !== 'undefined'

export const EXTERNAL_LINK = 'external-link'
export const GOOGLE_PARAMS = 'SEARCH'
export const USER_COUNTRY = 'country'
export const COOKIES_STATUS = 'accepted'

export const getElementOffset = el => {
  let rect = el.getBoundingClientRect()
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export const isElementInViewport = (selector, mainOffsetTop) => {
  let el = selector
  if (typeof selector === 'string') {
    el = document.querySelector(selector)
  }
  if (!el) return false

  let heightElement = document.querySelector(`.static-class`)

  let offset1 =
    window.pageYOffset >= mainOffsetTop &&
    window.pageYOffset <=
    mainOffsetTop +
    (heightElement ? heightElement.getBoundingClientRect().height : 0)
  return offset1
}

export const formTypes = {
  ppc: 'ppc',
  services: 'services',
  contactUs: 'Contact Us',
}

export const getPageType = () => {
  let type = ''
  if (isWindowDefined) {
    if (window.location.pathname.includes('/lp')) {
      type = formTypes.ppc
    } else {
      type = formTypes.services
    }
  }
  return type
}

export const getPageLink = () => {
  if (isWindowDefined) {
    return window.location.pathname
  }
  return ''
}

export const logError = err => {
  if (isWindowDefined) {
    window.Sentry.captureException(err)
  }
}

export const logMessage = message => {
  if (isWindowDefined) {
    window.Sentry.captureMessage(message)
  }
}

export const thankYouVideo = '//player.vimeo.com/video/348319194'

export const sendFormSuccessGAEvent = () => {
  if (isWindowDefined) {
    try {
      window.dataLayer.push({
        event: 'Form-success',
        category: 'ContactForm',
        action: 'SubmitForm',
      })
    } catch (e) {
      logMessage('adblocker being used')
    }
  }
}

export const getViewerCountry = async () => {
  if (isWindowDefined) {
    let userLocalCountry = fetchItem(USER_COUNTRY)
    if (!userLocalCountry) {
      try {
        let res = await fetch(
          `https://api.ipfind.com/me?auth=${process.env.GATSBY_IPFIND_API_KEY ||
          '5fa16b8d-d318-472b-9156-67dc938585b2'}`
        )
        if (!res.ok) throw new Error()
        res = await res.json()
        let countryHeader = res.country_code
        if (countryHeader) storeItem(USER_COUNTRY, countryHeader)
        return countryHeader
      } catch (error) {
        logMessage('error with fetching country')
      }
    }
    return userLocalCountry
  }
}

// storage utils
export const storeItem = (key, value) => {
  if (isWindowDefined) {
    window.localStorage.setItem(key, value)
  }
}

export const fetchItem = key => {
  if (isWindowDefined) {
    return window.localStorage.getItem(key)
  }
  return null
}

export const removeItem = key => {
  if (isWindowDefined) {
    window.localStorage.removeItem(key)
  }
}
