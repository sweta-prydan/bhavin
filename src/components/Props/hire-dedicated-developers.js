import React from 'react'
import { images } from '../../config/images'

export const HireDedicatedDevProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Hire <span className="heading-red">Dedicated Developers</span>
      </>
    ),
    bannerContent: (
      <>
        Get risk free trial period of two weeks. Pay only if you are satisfy.
      </>
    ),
    BannerAlt: 'Hire Dedicated Developers',
    buttonName: 'Call us now',
    buttonLink: '/contact/',
  },
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        <span className="highlight-head">High Skilled Developers</span>{' '}
        , engineers, coders, QAs and Designers
      </>
    ),
    buildAppPara: (
      <>
        We help you build software development team in no time with zero overhead
      </>
    ),
  },

  customDevProps: {
    serviceHeading: (
      <>
        Our Developers <span className="highlight-head"> Offerings</span>
      </>
    ),
    serviceContents: [
      {
        id: '1',
        serviceHeading: ' Mobile App Development',
        serviceParagraph: (
          <>
            Our developers, programmers, coders, QAs and designers has build dozens of Mobile from scratch and we are happy to do it for you.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Cross Platform Mobile App ',
        serviceClass: 'very-light-pink',
      },
      {
        id: '2',
        serviceHeading: (
          <>
            MVP Development
          </>
        ),
        serviceParagraph: (
          <>
            Our developers, programmers, QA and designers can build MVP for your product in just three month in tight deadline and limited budget.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'System Integration Services',
        serviceClass: 'pale-grey',
      },
      {
        id: '3',
        serviceHeading: 'Web Development',
        serviceParagraph: (
          <>
            Hire our developers, coders, programmers, QA and designer to accomplish your web project with latest tool-set and technologies.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Web Development',
        serviceClass: 'ice-blue',
      },
      {
        id: '4',
        serviceHeading: 'Application Modernization',
        serviceParagraph: (
          <>
            Our designers and engineers help you modernize your outdated software to the latest one.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Legacy Modernization',
        serviceClass: 'pale',
      },
      {
        id: '5',
        serviceHeading: (
          <>
            Code Audit
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
        serviceHeading: 'App Support & Maintenance',
        serviceParagraph: (
          <>
            Our engineers and designers can offer the support and maintenance service for your products
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
          'How is Prydan Consultancy different from other online talent marketplaces, local agencies, and software consulting companies?',
        faqPara: (
          <>
            The big difference is results. Our years of experience working remotely and expertise in software engineering help us to deliver results. We nurture good engineers and take all the deligence before we deploy them to for your business.
          </>
        ),
      },

      {
        faqTitle:
          'How do you make sure we get the best dedicated developers? What is your developer vetting process?',
        faqPara: (
          <>
            Our founder Amit Kumar Trivedi himself is the hands on coders and developer. He took active part in screening and vetting developers.
          </>
        ),
      },

      {
        faqTitle: 'How do you make working remotely successful?',
        faqPara: (
          <>
            We have decades of experience working for our oversease clients, developers, designers and business partners. We have learn the art and science of dynamics of remote software developement. We have equipped ourself with all the latest tools and techniques to make remote colloboration successful.
          </>
        ),
      },

      {
        faqTitle: 'Will the hired developer work only for me?',
        faqPara: (
          <>
            Yes. He will. It is your developer and works only for you.
          </>
        ),
      },

      {
        faqTitle: "What if I am not satisfied with the developer's work?",
        faqPara: (
          <>
            We will replace the developer or give your money back.
          </>
        ),
      },
    ],
    contactHeading: 'Do you have more questions?',
    contactPara:
      'We would love to answer ',
    supportImg: images.contactLadySm,
    buttonName: 'Call us now',
    buttonLink: '/contact/',
  },
}
