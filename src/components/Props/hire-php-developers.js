import React from 'react'
import { images } from '../../config/images'

export const HirePHPDevProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Hire <span className="heading-red">PHP developers</span> <br/>   
      </>
    ),
    bannerContent: (
      <>
        Get top notch programmers, engineers and coders on monthly, weekly or hourly basis  
      </>
    ),
    BannerAlt: 'Hire dedicated PHP developers',
    buttonName: 'Get in touch',
    buttonLink: '/contact/',
  },
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        Hire best PHP Developers
      </>
    ),
    buildAppPara: (
      <>
        
  Hire top notch PHP developers who works dedicately for your web development project. PHP developers has more than decades of experience at Prydan Software.
      </>
    ),
    
  },
  customDevProps: {
    serviceHeading: (
      <>
        As reputed web development company  our PHP developers <span className="highlight-head"> Offerings</span>
      </>
    ),
    serviceContents: [
      {
        id: '1',
        serviceHeading: 'Codeigniter Development',
        serviceParagraph: (
          <>
            Built Custome web application build using Codeigniter for your business. 
          </>
        ),
        serviceIcon: images.iconCodeigniter,
        serviceAlt: 'Codeigniter Development Services',
        serviceClass: 'very-light-pink',
      },
      {
        id: '2',
        serviceHeading: (
          <>
            Laravel Development
          </>
        ),
        serviceParagraph: (
          <>
        Our PHP Develoepers are expert in Laravel and help you build backend and web application using Laravel. 
          </>
        ),
        serviceIcon: images.iconLaravel,
        serviceAlt: 'Laravel Development Services',
        serviceClass: 'pale-grey',
      },
      {
        id: '3',
        serviceHeading: 'Zend framework Development',
        serviceParagraph: (
          <>
          Future reday application build with Zend framework. Our PHP developers has decades of experience in Zend.  
          </>
        ),
        serviceIcon: images.iconZend,
        serviceAlt: 'Dashboards, ETL, and Reporting Services',
        serviceClass: 'ice-blue',
      },
      {
        id: '4',
        serviceHeading: 'CMS Development',
        serviceParagraph: (
          <>
            Our PHP engineers are expert in Cutomizing Wordpress, Joomla, Magento open-source as per your business requirement very efficiently. 
          </>
        ),
        serviceIcon: images.serEcommerce,
        serviceAlt: 'Legacy Modernization',
        serviceClass: 'pale',
      },
      {
        id: '5',
        serviceHeading: (
          <>
            Yii Development
          </>
        ),
        serviceParagraph: (
          <>
            Robust application developed by our PHP developers with Yii which give you competitive edge. 
          </>
        ),
        serviceIcon: images.iconYii,
        serviceAlt: 'Yii Development',
        serviceClass: 'pale-lavender',
      },
      {
        id: '6',
        serviceHeading: 'SaaS Applications Development Services',
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
      'The three aspects of about our PHP developers make us right choice for your hiring requirement. ',
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
          'We claim that our PHP Developers are excellent because We have spent decades building our knowledge, we’re confident in our skills, and co-workers regularly seek our advice on Web Development and Opensource. We deliver a talk and help the community of Web App Development.',
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
          'How much does it cost to Hire a PHP Developer?',
        faqPara: (
          <>
            Typically we charge $10/hour for PHP developers. However, actual price varies based on skills and experience. 
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
        faqTitle: 'What is your pricing and hiring engagement model for the PHP project?',
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
