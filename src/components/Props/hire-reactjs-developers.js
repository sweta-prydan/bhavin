import React from 'react'
import { images } from '../../config/images'

export const HireReactJSDevProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Hire <span className="heading-red">React JS Developers</span> <br />
      </>
    ),
    bannerContent: (
      <>
        Get high skill programmers, engineers and coders on monthly, weekly or hourly basis.
      </>
    ),
    BannerAlt: 'Hire dedicated developers',
    buttonName: 'Get Free Consultation',
    buttonLink: '/contact/',
  },
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        We have made it easy to Hire React JS Developers
      </>
    ),
    buildAppPara: (
      <>
        As we at Prydan are using React JS in many of the web development projects, we have in house team of React JS developers.  We have pool of react js developers who has demonstrated strong expertise in React JS and worked on multiple web development projects.
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
        serviceHeading: 'ReactJS Front-End Development',
        serviceParagraph: (
          <>
            Develop attractive and interactive Front-ends and UI designs for your apps and web interfaces.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'ReactJS Front-End Development',
        serviceClass: 'very-light-pink',
      },
      {
        id: '2',
        serviceHeading: (
          <>
            ReactJS Custom Development
          </>
        ),
        serviceParagraph: (
          <>
            Develop Custom ReactJS app or module as per you specific business need and sets of users.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: ' ReactJS Custom Development',
        serviceClass: 'pale-grey',
      },
      {
        id: '3',
        serviceHeading: 'React JS FullStake Development',
        serviceParagraph: (
          <>
            Our React full-stake developers are expert in Mongo DB, NodeJS, Experss.js and many of the modern web technologies and tools.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'React JS FullStake Development',
        serviceClass: 'ice-blue',
      },
      {
        id: '4',
        serviceHeading: 'React JS Dashboards Development and Admin Panels',
        serviceParagraph: (
          <>
            Our react programmers can help you create complete admin panel and dashboard for your app with rich UI like graphs, adjustable widgets and much more features.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'React JS Dashboards Development and Admin Panels',
        serviceClass: 'pale',
      },
      {
        id: '5',
        serviceHeading: (
          <>
            React JS Code Audit
          </>
        ),
        serviceParagraph: (
          <>
            We help you optimize and analyse large and rapidly growing volume of data and information. So that you can make timely and accurate decisions.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Big Data',
        serviceClass: 'pale-lavender',
      },
      {
        id: '6',
        serviceHeading: 'React JS E Commerce Development',
        serviceParagraph: (
          <>
            React JS programmers at Prdyan can build greate shopping card UI on top of Shopify, Magento or any of existing platform you have.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'React JS E Commerce Development',
        serviceClass: 'very-light-pink-three',
      },
    ],
  },
  WhyShouldHireUsProps: {
    heading: 'Why should you hire us?',
    para:
      'The three aspects of about our React JS developers make us right choice for your hiring requirement. ',
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
          'We claim our expertise in React Native because We have spent years building our knowledge, we’re confident in our skills, and co-workers regularly seek our advice on React Native and JavaScript. We deliver a talk and help the community of React Native.',
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
          'How much does it cost to Hire a ReactJS Developer?',
        faqPara: (
          <>
            Typically we charge $15/hour for React JS developers. However, actual price varies based on skills and experience.
          </>
        ),
      },

      {
        faqTitle:
          'Is 15 days risk-free trial period completely freeHow do you make sure we get the best dedicated developers? What is your developer vetting process?',
        faqPara: (
          <>
            Yes it is. You have 15 days to evaluate our developers and we don't charge anything. At the end of trial period if you are satisfy than we will raise the invoice. If you are not satisfied you can cancel the order without any obligation.
            <br />
            <br />
          </>
        ),
      },

      {
        faqTitle: 'What is your pricing and hiring engagement model for the React.js project?',
        faqPara: (
          <>
            We have flexible pricing model to choose from.
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
