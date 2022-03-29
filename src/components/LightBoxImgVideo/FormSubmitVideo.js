import React from 'react'
import loadable from '@loadable/component'
import 'lightbox-react/style.css'

const VimeoVideo = loadable(() => import('../Video/VimeoVideo'))
const LB = loadable.lib(() => import('lightbox-react'))

const FormSubmitVideo = ({ isOpen, url, closeLightbox = () => { } }) => {
  return (
    <div>
      {isOpen && (
        <LB>
          {({ default: Lightbox }) => (
            <Lightbox
              mainSrc={<VimeoVideo videoUrl={url} />}
              onCloseRequest={closeLightbox}
              enableZoom={false}
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            />
          )}
        </LB>
      )}
    </div>
  )
}

export default FormSubmitVideo
