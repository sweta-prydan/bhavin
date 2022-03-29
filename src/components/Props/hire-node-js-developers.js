import React from 'react'
import { images } from '../../config/images'

export const HireNodeJSDevProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Hire <span className="heading-red">Node JS developers</span> <br />
      </>
    ),
    bannerContent: (
      <>
        Get expert programmers, engineers and coders on monthly, weekly or hourly basis
      </>
    ),
    BannerAlt: 'Hire dedicated developers',
    buttonName: 'Get Free Consultation',
    buttonLink: '/contact/',
  },
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        Hire Expert Node JS Developers
      </>
    ),
    buildAppPara: (
      <>

        We have in-house team of Expert Node JS Developers. Our Node.js developers are called experts for a reason! Our devoted team of Node.js developers has helped various types of enterprises to achieve their goals by developing web projects. Our developers are capable and updated with all technology trends. We offer a wide array of Node.js web development services.
      </>
    ),

  },
  customDevProps: {
    serviceHeading: (
      <>
        Our Node JS Developers <span className="highlight-head"> Offerings</span>
      </>
    ),
    serviceContents: [
      {
        id: '1',
        serviceHeading: 'Node.js API Development & Integration',
        serviceParagraph: (
          <>
            Create your product API in Node.js which is secure and easy to scale.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Application Development Services',
        serviceClass: 'very-light-pink',
      },
      {
        id: '2',
        serviceHeading: (
          <>
            Node.JS Support and Maintenance
          </>
        ),
        serviceParagraph: (
          <>
            Efficient Maintenance and support of NodeJS modules is crucial for scalibility and flexibility of your app.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Node.JS Support and Maintenance',
        serviceClass: 'pale-grey',
      },
      {
        id: '3',
        serviceHeading: 'Fullstake Development',
        serviceParagraph: (
          <>
            Our Node JS  developers knows nauances of front end like React JS, Angular and Mongo and good fit for fullstake develpment.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Fullstake Development',
        serviceClass: 'ice-blue',
      },
      {
        id: '4',
        serviceHeading: ' Build Microservices using Node.JS',
        serviceParagraph: (
          <>
            Our developers are proficient in Microservices building using Node JS.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Build Microservices using Node.JS',
        serviceClass: 'pale',
      },
      {
        id: '5',
        serviceHeading: (
          <>
            Node.js Server-Side Development
          </>
        ),
        serviceParagraph: (
          <>
            Our Node Js engineers are experience in cloud computing and server scripting languages.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Big Data',
        serviceClass: 'pale-lavender',
      },
      {
        id: '6',
        serviceHeading: 'Custom NodeJS Programming',
        serviceParagraph: (
          <>
            Any bespoke solution using NodeJS technology we can build.
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
      'The three aspects of about our Node JS developers make us right choice for your hiring requirement. ',
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
          'We claim our expertise in Node JS because We have spent years building our knowledge, we’re confident in our skills, and co-workers regularly seek our advice on NodeJS and JavaScript. We deliver a talk and help the community of React Native.',
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
          'How much does it cost to Hire a Node JS Developer?',
        faqPara: (
          <>
            Typically we charge $15/hour for Node JS developers. However, actual price varies based on skills and experience.
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
        faqTitle: 'What is your pricing and hiring engagement model for the Node JS project?',
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
