import React from 'react'
import { images } from '../../config/images'

export const HireReactNativeDevProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Hire <span className="heading-red">React Native developers</span> <br/>   
      </>
    ),
    bannerContent: (
      <>
        Get high skill programmers, engineers and coders on monthly, weekly or hourly basis  
      </>
    ),
    BannerAlt: 'Hire dedicated developers',
    buttonName: 'Get Free Consultation',
    buttonLink: '/contact/',
  },
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        Hire High Skilled React Native Developers
      </>
    ),
    buildAppPara: (
      <>
        
        Hiring a right react native developer is crucial for the success of your project. We are a team of experienced React Native Developers, programmers, coders, and engineers. Each of our developers has 4+ years of experience in React Native and has built Dozens of Apps which are live in the App store. Our strong expertise in cross platform  Mobile App development is the result of our clear focus on React Native and JavaScript. 
      </>
    ),
    
  },
  customDevProps: {
    serviceHeading: (
      <>
        Our React Native Developers <span className="highlight-head"> Offerings</span>
      </>
    ),
    serviceContents: [
      {
        id: '1',
        serviceHeading: 'Cross Plateform Mobile App Development Services',
        serviceParagraph: (
          <>
            Our React Native developers are experts in building cross-platform mobile apps which runs on both Android and iOS.  We can build it for your business professionally.   
          </>
        ),
        serviceIcon: images.iconReactNative,
        serviceAlt: 'Cross Plateform Mobile App Development Services ',
        serviceClass: 'very-light-pink',
      },
      {
        id: '2',
        serviceHeading: (
          <>
          MVP Development with React Native
          </>
        ),
        serviceParagraph: (
          <>
          Our React Native developer can build MVP for your product in just three month. 
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'System Integration Services',
        serviceClass: 'pale-grey',
      },
      {
        id: '3',
        serviceHeading: 'React Native iOS Development Services',
        serviceParagraph: (
          <>
          Build iOS app with JavaScript using React Native with our React Native developers. 
          </>
        ),
        serviceIcon: images.iconiOS,
        serviceAlt: 'React Native iOS Development Services',
        serviceClass: 'ice-blue',
      },
      {
        id: '4',
        serviceHeading: 'React Native Android Development',
        serviceParagraph: (
          <>
            It is quite possible and economical as well sometime to build Android App using javascript with our react native developers. 
          </>
        ),
        serviceIcon: images.iconAdnroid,
        serviceAlt: 'React Native Android Development Services',
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
            Code Audit services offered by our React Native Senior engineer will help you make right call when your technical debt has high. This will keep your app future ready.  
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Big Data',
        serviceClass: 'pale-lavender',
      },
      {
        id: '6',
        serviceHeading: 'React Native App Support & Maintenance',
        serviceParagraph: (
          <>
            We help you build commerical SaaS based application. 
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
      'The three aspects of about our React Native developers make us right choice for your hiring requirement. ',
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
          'How much does it cost to Hire a React Native Developer?',
        faqPara: (
          <>
            Typically we charge $15/hour for React Native developers. However, actual price varies based on skills and experience. 
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
        faqTitle: 'What is your pricing and hiring engagement model for the React.js project?',
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
