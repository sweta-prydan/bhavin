import React from 'react'
import { images } from '../../config/images'

export const HireMobileAppDevProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Hire <span className="heading-red">Mobile App developers</span> <br />
      </>
    ),
    bannerContent: (
      <>
        Get best programmers, engineers and coders on monthly, weekly or hourly basis
      </>
    ),
    BannerAlt: 'Hire Dedicated Mobile App Developers',
    buttonName: 'Get in touch',
    buttonLink: '/contact/',
  },
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        Hire best Mobile App Developers
      </>
    ),
    buildAppPara: (
      <>

        By Hiring best Mobile App Developers you can bring your product to new height. Mobile App Developers at Prydan Softwares has helped many products the give competitive edge over comptition by providing excellent performance and best user experience.
      </>
    ),

  },
  customDevProps: {
    serviceHeading: (
      <>
        As Custom Software Development Company our<span className="highlight-head"> Offerings</span>
      </>
    ),
    serviceContents: [
      {
        id: '1',
        serviceHeading: 'Mobile App Development',
        serviceParagraph: (
          <>
            Bespoke software solution for your business{' '}
            that made just for your group of user and solve your specific business problems.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Mobile App Development Services',
        serviceClass: 'very-light-pink',
      },
      {
        id: '2',
        serviceHeading: (
          <>
            iPhone App Development
          </>
        ),
        serviceParagraph: (
          <>
            We can help you speak your different software componants with each other. We integrate you softwares and make efficient use of knowledge and data just in real time.
          </>
        ),
        serviceIcon: images.iconiOS,
        serviceAlt: 'iPhone App Development Services',
        serviceClass: 'pale-grey',
      },
      {
        id: '3',
        serviceHeading: 'Andriod App Development',
        serviceParagraph: (
          <>
            Get more insights from your data and make informed decision powered by facts.
          </>
        ),
        serviceIcon: images.iconAdnroid,
        serviceAlt: 'Andriod App Development Services',
        serviceClass: 'ice-blue',
      },
      {
        id: '4',
        serviceHeading: 'React Native Development',
        serviceParagraph: (
          <>
            We help you modernize your outdated software to the latest one.
          </>
        ),
        serviceIcon: images.iconReactNative,
        serviceAlt: 'React Native Development Services',
        serviceClass: 'pale',
      },
      {
        id: '5',
        serviceHeading: (
          <>
            Flutter Development
          </>
        ),
        serviceParagraph: (
          <>
            We help you optimize and analyse large and rapidly growing volume of data and information. So that you can make timely and accurate decisions.
          </>
        ),
        serviceIcon: images.iconFlutter,
        serviceAlt: 'Flutter Development Services',
        serviceClass: 'pale-lavender',
      },
      {
        id: '6',
        serviceHeading: 'Cross Platform Mobile App ',
        serviceParagraph: (
          <>
            Cross platform mobile app which runs on both iOS and Anrdroid device but having the same code base.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Real-time',
        serviceClass: 'very-light-pink-three',
      },
    ],
  },

  WhyShouldHireUsProps: {
    heading: 'Why should you hire us?',
    para:
      'The three aspects of about our Mobile App developers make us right choice for your hiring requirement. ',
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
          'We claim that our Mobile App Developers are best because We have spent years building our knowledge, we’re confident in our skills, and co-workers regularly seek our advice on Mobile App Development. We deliver a talk and help the community of Mobile App Development.',
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
    heading: 'Frequently Asked Questions',
    faqProps: [
      {
        faqTitle:
          'How much does it cost to Hire a Mobile App Developer?',
        faqPara: (
          <>
            Typically we charge $15/hour for Mobile App developers. However, actual price varies based on skills and experience.
          </>
        ),
      },

      {
        faqTitle:
          'Is 15 days risk-free trial period completely freeHow do you make sure we get the best dedicated developers? What is your developer vetting process?',
        faqPara: (
          <>
            Yes it is. You have 15 days to evalute our developers and we don't charge anything. At the end of trial period if you are satisfy than we will raise the invoice. If you are not satisfied you can cancel the order without any obligation.
            <br />
            <br />
          </>
        ),
      },

      {
        faqTitle: 'What is your pricing and hiring engagement model for the Mobile App Development project?',
        faqPara: (
          <>
            We have flexibile pricing model to choose from.
            <br /> <br />

            <strong>1. Fix Price Model: </strong>
            <br /> <br />
            <strong>2. Hourly Model: </strong>
            <br /> <br />


            <strong>3. Weekly Model: </strong>
            <br /> <br />
            <strong>4. Monthly Model: </strong>


          </>
        ),
      },

      {
        faqTitle: 'Will the hired developer work only for me?',
        faqPara: (
          <>
            Yes, that’s what we offer- the developers you hire will work only on
            your project and terms. If you hire an entire dedicated developers’
            team then the entire team will work only on your project.
          </>
        ),
      },

      {
        faqTitle: "What if I am not satisfied with the developer's work?",
        faqPara: (
          <>
            In the unlikely case that you are not satisfied with one of our
            developers, we will replace him/her with someone having similar
            skills from our development team. And yes, you can thoroughly
            interview the developer before finalizing him/her.
          </>
        ),
      },
    ],
    contactHeading: 'Do You Have Any More Questions?',
    contactPara:
      'We would love to answer. ',
    supportImg: images.contactLadySm,
    buttonName: 'Call us now ',
    buttonLink: '/contact/',
  },
}
