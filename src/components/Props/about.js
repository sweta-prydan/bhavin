import React from 'react'
import { images } from '../../config/images'

export const AboutProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Your Own Consultancy Development Company
      </>
    ),

    bannerContent: (
      <>
        Prydan Consultancy is a Web and Mobile App development company founded in the year 2016. We are a team of passionate engineers and designers building awesome mobile and web applications for startups and enterprises worldwide.
        <br />
        <br />
        By creating great user experiences across web, eCommerce, and mobile platforms we have proudly delivered multiple projects on time within budget with utmost quality.

        <br />
        <br />
        Our teams have mastered remote collaboration and have built strong community ties around remote locations in the U.S., Australia, UK and Canada.
        <br />
        <br />

      </>
    ),
    banner: images.dvdBanner,
    BannerAlt: 'About Prydan Consultancy',
  },

  leadershipTeamProps: {
    heading: (
      <>
        Leadership <span className="highlight-head">Team</span>
      </>
    ),
    teamListProps: [
      {
        memberListProps: [
          {
            name: 'Amit Kumar Trivedi ',
            designation: '— CEO and Founder',
          },

        ],
      },

    ],
  },


}
