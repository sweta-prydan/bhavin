import React, { useRef, memo } from 'react'
// import './accordion.css'

const Accordion = ({ children, atomic }) => {
  let containerRef = useRef()

  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        atomic: atomic,
        containerRef,
      })
    })
  }

  return (
    <div className="accordion" ref={containerRef}>
      {renderChildren()}
    </div>
  )
}

export default memo(Accordion)
