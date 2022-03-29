import React from 'react'
import { images } from '../../config/images'

export const SoftwareDevServicesProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Dedicated Software Devlopment Team
      </>
    ),
    bannerContent:
      'Hire  an on-site,off-site or offshore dedicated software development team with highly skilled IT Professionals.Save yourself from recuritment hassles and infrastructure cost.',
    BannerAlt: 'Software Development Services',
  },
  ourServiceProps: {
    heading: 'Diffrent Dedicated Team Models Offering',
    serviceContents: [
      {
        id: '1',
        serviceHeading: 'Full-Service Dedicated Team',
        serviceParagraph:
          'Leverage our team’s expertise for end-to-end support in product development, testing, and managed IT service activities. We follow a focused approach and give you the flexibility to reconfigure the team based on the requirements of your project. We follow a monthly payment based on team size, which would also include fixed service costs. ',
        serviceIcon: images.serCustom,
        serviceAlt: 'Software',
        serviceClass: 'very-light-pink',
        serviceLink: '/services/custom-software-development/',
      },
      {
        id: '2',
        serviceHeading: 'On-Demand Dedicated Team',
        serviceParagraph:
          'Our UI / UX design studio crafts digital products and experiences.  We are specialized in  user research, user experience design, and user interface design for web, mobile, IoT',
        serviceIcon: images.serUiux,
        serviceAlt: 'Software',
        serviceClass: 'pale',
        serviceLink: '/services/ui-ux-design-services/',
      },
      {
        id: '3',
        serviceHeading: 'Maintenance Dedicated Team',
        serviceParagraph:
          'Get continuous maintenance support to meet the evolving efficiency needs of your product or service. Maintenance teams ensure deployed products are enabled to deliver results and are continuously improved to meet changing user expectations. Enterprises opting for a maintenance team will incur a monthly cost based on project size and the number of team members involved. ',
        serviceIcon: images.serDedicated,
        serviceAlt: 'Team',
        serviceClass: 'very-light-pink',
        serviceLink: '/services/mobile-app-development/',
      },
      // {
      //   id: '4',
      //   serviceHeading: 'Web Application Development Services',
      //   serviceParagraph:
      //     'We provide top-notch web application development services. Help you leverage full potential of web and cloud technologies.',
      //   serviceIcon: images.serWebapp,
      //   serviceAlt: 'Web',
      //   serviceClass: 'ice-blue',
      //   serviceLink: '/services/web-apps-development/',
      // },
      // {
      //   id: '5',
      //   serviceHeading: 'Dedicated Software Development Team',
      //   serviceParagraph:
      //     'We made it easy to get skilled and experienced the Dedicated Software Development Team. Save significantly on cost without compromising in quality. ',
      //   serviceIcon: images.serDedicated,
      //   serviceAlt: 'Dedicated',
      //   serviceClass: 'ice',
      //   serviceLink: '/hire/dedicated-development-team/',
      // },
      // {
      //   id: '6',
      //   serviceHeading: 'Software Product Development Services',
      //   serviceParagraph:
      //     'We are passionate to build a great software products. We partner with you on every single stage of your software product development journey. ',
      //   serviceIcon: images.serProduct,
      //   serviceAlt: 'Product',
      //   serviceClass: 'pale-lavender',
      //   serviceLink: '/services/software-product-development/',
      // },
      // {
      //   id: '7',
      //   serviceHeading: (
      //     <>
      //       API Integration
      //       <br />
      //       Services
      //     </>
      //   ),
      //   serviceParagraph:
      //     'We offer Application Development Services which is best in class. Build an app for mobile, web, wearable, IoT, or desktop. ',
      //   serviceIcon: images.serApi,
      //   serviceAlt: 'Legacy Modernization',
      //   serviceClass: 'very-light-pink-two',
      //   serviceLink: '/services/api-integration-development/',
      // },
      // {
      //   id: '8',
      //   serviceHeading: 'Application Development Services',
      //   serviceParagraph:
      //     'We offer Application Development Services which is best in class. Build app for mobile, web, wearable, IoT or desktop. ',
      //   serviceIcon: images.serAppdev,
      //   serviceAlt: 'Application',
      //   serviceClass: 'off-white',
      //   serviceLink: '/services/application-development/',
      // },
      // {
      //   id: '9',
      //   serviceHeading: (
      //     <>
      //       Hire Dedicated <br />
      //       Developers
      //     </>
      //   ),
      //   serviceParagraph:
      //     'We help you add more developers to your exiting team. Hire dedicated developers from us and get your project done.',
      //   serviceIcon: images.serHire,
      //   serviceAlt: 'Hire',
      //   serviceClass: 'very-light-pink-three',
      //   serviceLink: '/hire/dedicated-developers/',
      // },
      // {
      //   id: '10',
      //   serviceHeading: (
      //     <>
      //       eCommerce Development <br />
      //       Services
      //     </>
      //   ),
      //   serviceParagraph:
      //     'Desing, Redesign, Scale, Build and promote your online stores. ',
      //   serviceIcon: images.serEcommerce,
      //   serviceAlt: 'Real-time',
      //   serviceClass: 'very-light-pink-three',
      //   serviceLink: '/services/ecommerce-development/',
      // },

    ],
  },

  getStartedProps: {
    heading: 'World class services for better tomorrow',
    Para:
      'We are committed to providing you excellent Software Development, IT Consulting, and Design services at economical prices. With our passion for technology and design, we have committed ourselves to the success of our client business. We wanted to help you grow your business and get an edge on the competition.',
    buttonName: 'Get In Touch with Us',
    buttonLink: '/',
  },

}
