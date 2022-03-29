/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import React from 'react'
// import posed, { PoseGroup } from 'react-pose'

// const Transition = posed.div({
//   enter: { opacity: 1, delay: 300, beforeChildren: true },
//   exit: { opacity: 0 },
// })

// export const replaceComponentRenderer = ({ props, ...other }) => {
//   const { component } = props.pageResources
//   return (
//     <PoseGroup>
//       <Transition key={props.location.key}>
//         {React.createElement(component, props)}
//       </Transition>
//     </PoseGroup>
//   )
// }

exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer]
  window.locations.push(window.location.pathname)
  window.previousPath = window.locations[window.locations.length - 2]
}
exports.disableCorePrefetching = () => true