import '../../static/styles/global.css'


/* variables */
export const white = '#fff'
export const black = '#171c3f'
export const primaryColor = '#171c3f'
export const themeColor = '#ff017d'
export const themeGrn = '#00d7fc'
export const bodyFont = 'Graphik'
export const headingFont = '"Spartan", sans-serif'
export const metaFont = 'merriweatherbold_italic'
/* variables */

/* media queries */
export const sm = content => `
@media (max-width: 479px) {
  ${content};
}
`
export const md = content => `
@media (max-width: 767px) {
  ${content};
}
`
export const lg = content => `
@media (max-width: 991px) {
  ${content};
}
`
export const xl = content => `
@media (min-width: 992px) and (max-width: 1199px) {
  ${content};
}
`
export const xll = content => `
@media (min-width: 1200px) and (max-width: 1370px) {
  ${content};
}
`
export const device = content => `
@media (max-width: 1024px) {
  ${content};
}
`
export const sh = content => `
@media (min-width: 1200px) and (max-width: 1441px) and (max-height: 850px) {
  ${content};
}
`
/* media queries */
