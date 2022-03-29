import React from 'react'
import { images } from '../../config/images'

export const DedicatedDevelopmentProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Dedicated Software Development <br />
        team <span className="heading-red">to give you competitive edge</span>
      </>
    ),
    bannerContent: (
      <>
        Dedicated team of Pre-vetted engineers, designers and QA works for you as part of your team       </>
    ),
    BannerAlt: 'Dedicated Software Development Team',
    buttonName: 'Contact Us',
    buttonLink: '/contact/',
  },
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        <span className="highlight-head">On-demand team of </span>  prevented software developers, designers and QA
      </>
    ),
    buildAppPara: (
      <>
        When you are hiring Dedicated Software Development team you save significant cost and time on Hiring and onboarding cost without comprising with developers quality.
      </>
    ),

  },

  WhyShouldHireUsProps: {
    heading: 'Why should you hire us?',
    para:
      'The three aspects of about our developers and designers make us right choice for your hiring requirement. ',
    serviceContents: [
      {
        id: '1',
        serviceHeading: 'Communication',
        serviceParagraph:
          'Clear and transparent communication is a key success factor for any project. Our developers are very good at English communication. They work directly with the client almost every day of the project. They are active participants in daily stand-up, planning, bug fixing, and demo. We enjoy working remotely with clients, developers, and designers who are geographically dispersed in different parts of the world.',
        serviceIcon: images.serCustom,
        serviceAlt: 'Software',
        serviceClass: 'very-light-pink',
        serviceLink: '/services/custom-software-development/',
      },
      {
        id: '2',
        serviceHeading: (
          <>
            Expertise

          </>
        ),
        serviceParagraph:
          'We claim our expertise in software technologies because We have spent decades building our knowledge, we’re confident in our skills, and co-workers regularly seek our advice on web and mobile app development. We deliver a talk and help the community of software developers and designers.',
        serviceIcon: images.serUiux,
        serviceAlt: 'Software',
        serviceClass: 'pale',
        serviceLink: '/services/ui-ux-design-services/',
      },
      {
        id: '3',
        serviceHeading: 'Dedication',
        serviceParagraph:
          'Our team liaises with you all the phases of your project development. We work with you hand in hand. Right from Idea Discussion, to UX Design, UI Design, Coding, Testing till final deployment of the app on the app store. We do whatever it takes to make your project successful and never hesitate to go beyond our boundaries. We fully dedicate ourselves to the project we work on.',
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Mobile',
        serviceClass: 'pale-grey',
        serviceLink: '/services/mobile-app-development/',
      },


    ],
  },


  faqSectionProps: {
    heading: 'FAQs',
    faqProps: [
      {
        faqTitle:
          'Why should I choose thses model?',
        faqPara: (
          <>
            Due to progress in communication software and infrastructure now days it is more beneficial to hire remote development team rather than in house team. If you have full product to work on for longer run hring dedicated software development team might be the first option you should consider. It help you reduce cost and overhead.
          </>
        ),
      },

      {
        faqTitle: 'How do you make working remotely successful?',
        faqPara: (
          <>
            We are working remotely for our partners overseas for than decades. We are proactive communicators and equipped with all the latest tools for collaboration.

          </>
        ),
      },
    ],
    contactHeading: 'Have more questions?',
    contactPara: 'Let us know and our experts will get in touch with you ASAP.',
    supportImg: images.contactLadySm,
    buttonName: 'We would love to answer',
    buttonLink: '/contact/',
  },
}
