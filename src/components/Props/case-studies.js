import React from 'react'

export const CaseStudiesProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Recent Case Studies on how{' '}
        <span className="heading-red">we have helped companies</span>
      </>
    ),
    bannerHeadingSpan: 'help',
  },
  caseStudyProps: {
    caseStudyheading: (
      <>
        Our recent <span className="highlight-head">success stories</span>
      </>
    ),
    caseStudiesContents: [

      {
        caseStudiesTitle:
          'Custom App Solutions For Education Industries',
        caseStudiesParaGraph:
          '…a platform where students, immigrants, visa councellers, faculties and language experts can interact to solve real life challenges...',
        caseStudiesClassName: 'bluegrey',
        caseStudiesImgAlt: 'Purple Notes',
        caseURL: '/case-studies/purplenotes/',
        category: 'mobile',
      },

    ],
  },
}
