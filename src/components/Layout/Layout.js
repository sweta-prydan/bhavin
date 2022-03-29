import 'intersection-observer'
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { GlobalStyles } from '../Layout/GlobalStyles'
import {
  appendDMCAScript,
  appendChatScript,
  appendAnalyticScripts,
} from '../../config/scriptAdders'

import {
  isWindowDefined,
  storeItem,
  GOOGLE_PARAMS,
  getViewerCountry,
} from '../../config/utils'

const Layout = ({
  children,
  mainClass,
  location,
  showFooter = true,
  data = {},
}) => {


  let [footer, setFooter] = useState(false)

  useEffect(() => {
    if (isWindowDefined) {
      window.addEventListener('mousemove', appendAnalyticScripts, {
        once: true,
      })
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setFooter(true)
    }, 2000)
  }, [])



  return (
    <>
      <GlobalStyles />
      <div className="page-main">
        <div className={`content-area ${mainClass || ''}`}>
          <Header />
          {children}
          {showFooter && <Footer {...data} />}
        </div>
      </div>
    </>
  )
}

export default Layout
