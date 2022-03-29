import { isWindowDefined } from './utils'

const landingPages = {
  'ios-app-development-services': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `gtag('event', 'conversion', {'send_to': 'AW-724062770/l_WpCIu31MIBELKkodkC'});`,
  },
  'ios-app-development-company': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `gtag('event', 'conversion', { 'send_to': 'AW-724062770/2Z7TCK7z5sIBELKkodkC', 'value': 20000.0, 'currency': 'USD' });`,
  },
  'mobile-app-development-company': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `gtag('event', 'conversion', { 'send_to': 'AW-724062770/BJCiCOnQ8MIBELKkodkC', 'value': 20000.0, 'currency': 'USD' });`,
  },
  'mobile-app-development-services': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `gtag('event', 'conversion', { 'send_to': 'AW-724062770/JkpUCLiG58IBELKkodkC', 'value': 20000.0, 'currency': 'USD' });`,
  },
}

const contactPageRedirects = {
  'ios-app-development-services': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-724062770/6wQLCLnf8MIBELKkodkC', 'value': 20000.0, 'currency': 'USD', 'event_callback': callback }); return false; }`,
  },
  'ios-app-development-company': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-724062770/8XchCNOP58IBELKkodkC', 'value': 20000.0, 'currency': 'USD', 'event_callback': callback }); return false; }`,
  },
  'mobile-app-development-company': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-724062770/G5ueCP3q8MIBELKkodkC', 'value': 20000.0, 'currency': 'USD', 'event_callback': callback }); return false; }`,
  },
  'mobile-app-development-services': {
    link: 'https://www.googletagmanager.com/gtag/js?id=AW-724062770',
    initialScript: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-724062770');`,
    postScript: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-724062770/hX4WCNPj1sIBELKkodkC', 'value': 20000.0, 'currency': 'USD', 'event_callback': callback }); return false; }`,
  },
}

export const appendScript = pageLink => {
  if (isWindowDefined) {
    for (let item in landingPages) {
      if (pageLink.includes(item)) {
        const scripts = landingPages[item]

        let link = document.createElement('script')
        link.src = scripts.link
        let initialScript = document.createElement('script')
        initialScript.innerHTML = scripts.initialScript
        let postScript = document.createElement('script')
        postScript.innerHTML = scripts.postScript

        document.body.appendChild(link)
        document.body.appendChild(initialScript)
        document.body.appendChild(postScript)
        return
      }
    }
  }
}

export const appendContactPageScript = () => {
  if (isWindowDefined) {
    const previousPageLink = window.previousPath
    for (let item in contactPageRedirects) {
      if (previousPageLink.includes(item)) {
        console.log({ item })
        const scripts = contactPageRedirects[item]

        let link = document.createElement('script')
        link.src = scripts.link
        let initialScript = document.createElement('script')
        initialScript.innerHTML = scripts.initialScript
        let postScript = document.createElement('script')
        postScript.innerHTML = scripts.postScript

        document.body.appendChild(link)
        document.body.appendChild(initialScript)
        document.body.appendChild(postScript)
        return
      }
    }
  }
}
