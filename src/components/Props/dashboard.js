import React from 'react'
import { images } from '../../config/images'

export const DashboardProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Web and Mobile App Development Company   
        
      </>
    ),
    bannerContent: (
      <>
        We build awesome mobile and web applications. Helping startups and enterprises worldwide. 
      </>
    ),
    BannerAlt: 'Prydan Consultancy Banner',
    buttonName: 'Let’s start!',
    buttonLink: '/contact/',
  },
  homebannerProps:{
    homebannerHeading: (
      <>
        Stay in Talk  <br /> with Optimal Business Performance  
        
      </>
    ),
    homebannerContent: (
      <>
        Your partner for incredible mobile and web products.<br /> Finally delivered in great quality and on time.
      </>
    ),
    BannerAlt: 'Prydan Consultancy Banner',
    buttonName: 'Know More',
    buttonLink: '/contact/',
  },
  homeServiceProps: {
    homeServiceHeading: (
      <>
      Expertise
        {/* Services we offer<br />
        <span className="highlight-head">our core expertise</span> */}
      </>
    ),
    serviceContents: [
      {
        id: '1',
        serviceHeading: 'Consulting & Ideation',
        // 'Custom Software Development Services',
        serviceParagraph: (
          <>
            We prioritize credibility with unique {' '}
            <strong>solutions for your original ideas.</strong>
          </>
        ),
        serviceIcon: images.serCustom,
        serviceAlt: 'Custom Software Development Services',
        serviceClass: 'very-light-pink',
        serviceLink: 'services/custom-software-development/',
      },
      {
        id: '2',
        serviceHeading: 'Dedicated Team',
        // 'Application Development Services',
        serviceParagraph: (
          <>
            Our teams are dedicated to fulfilling your <strong> necessity with undivided </strong> attention.
          </>
        ),
        serviceIcon: images.serAppdev,
        serviceAlt: 'Application Development Services',
        serviceClass: 'off-white',
        serviceLink: 'services/application-development/',
      },
      {
        id: '3',
        serviceHeading: (
          <>
            UI / UX Design<br />
            Services
          </>
        ),
        serviceParagraph: (
          <>
            Our sleek and irresistible User{' '}
            <strong> Experience and Interaction manners </strong> will amaze your clients for sure.
          </>
        ),
        serviceIcon: images.serUiux,
        serviceAlt: 'Software Testing Services',
        serviceClass: 'pale',
        serviceLink: 'services/ui-ux-design/',
      },
      {
        id: '4',
        serviceHeading: (
          <>
          E-commerce Solution
          </>
        ),
        serviceParagraph: (
          <>
            {' '}
            You can assuredly rely on our solutions that promise a  {' '}
            <strong>  profitable environment </strong>{' '}for your E-commerce area.
          </>
        ),
        serviceIcon: images.serEcommerce,
        serviceAlt: 'E Commerce Development Services',
        serviceClass: 'sky-blue',
        serviceLink: '/services/ecommerce-development/',
      },
      {
        id: '5',
        serviceHeading: (
          <>
            Mobile Application
            <br />
            Development
          </>
        ),
        serviceParagraph: (
          <>
            We deliver smoothly functioning mobile applications that are <strong> user-friendly and engaging.</strong>
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Mobile Application',
        serviceClass: 'pale-grey',
        serviceLink: '/services/mobile-app-development/',
      },
      {
        id: '6',
        serviceHeading:  'Web Development Services',
        // 'E-commerce Solution',
        // 'Dedicated Software Development Team',
        serviceParagraph: (
          <>
          Make sure that your business reaches out to people across the globe with the {' '}assistance of our Web Application Development Service.
          </>
        ),
        serviceIcon: images.serWebapp,
        serviceAlt: 'Web App Development',
        serviceClass: 'off-white',
        serviceLink: '/services/web-apps-development/',
      },
      // {
      //   id: '7',
      //   serviceHeading: 'API Integration & Development Services',
      //   serviceParagraph: (
      //     <>
      //       Inegrate API to Make your legacy application talk to plethora of modern softwares and other components to add business value. 
      //     </>
      //   ),
      //   serviceIcon: images.serApi,
      //   serviceAlt: 'API integration Services',
      //   serviceClass: 'very-light-pink-two',
      //   serviceLink: '/services/api-integration-development/',
      // },
      // {
      //   id: '8',
      //   serviceHeading: <>Web Application Development Services</>,
      //   serviceParagraph: (
      //     <>
      //       High quality  <strong> web applications</strong> for enterprise application.
      //     </>
      //   ),
      //   serviceIcon: images.serWebapp,
      //   serviceAlt: 'Web App Development',
      //   serviceClass: 'ice-blue',
      //   serviceLink: '/services/web-apps-development/',
      // },

      // {
      //   id: '9',
      //   serviceHeading: 'Software Product Development Services',
      //   serviceParagraph: (
      //     <>
      //       Realise your dream product with us. Leverage our decades of experience to build awesome product that creat impact on life.
      //     </>
      //   ),
      //   serviceIcon: images.serProduct,
      //   serviceAlt: 'Product development services',
      //   serviceClass: 'pale-lavender',
      //   serviceLink: '/services/software-product-development/',
      // },

      // {
      //   id: '10',
      //   serviceHeading: (
      //     <>
      //       Hire Dedicated <br />
      //       Developers
      //     </>
      //   ),
      //   serviceParagraph: (
      //     <>
      //       Best <strong> engineers and Designers </strong> works only for you, follow you process and get it done.
      //     </>
      //   ),
      //   serviceIcon: images.serHire,
      //   serviceAlt: 'Hire Dedicated Developers',
      //   serviceClass: 'very-light-pink-three',
      //   serviceLink: '/hire/dedicated-developers/',
      // },
    ],
  },

  caseStudyProps: {
    caseStudyheading: (
      <>
        <span  >Works </span>
      </>
    ),
    caseStudiesContents: [
      {
        caseStudiesTitle:
          'Qwetu Student Residence',
        caseStudiesParaGraph:
          '…Qwetu prides itself in being the only student accommodation provider in Kenya…',
        caseStudiesClassName: 'pale-mauve',
        caseStudiesImgAlt: 'Mobile Mockup',
        caseURL: 'case-studies/Qwetu/',
      },
      {
        caseStudiesTitle:
          'Purple Notes',
        caseStudiesParaGraph:
          '…Built wordpress based custom website for Purple Notes. Purple Notes provides IELTS coaching and Visa Services…',
        caseStudiesClassName: 'pale-peach',
        caseStudiesImgAlt: 'Mobile Mockup',
        caseURL: 'case-studies/purplenotes/',
      },
      {
        caseStudiesTitle:
          'Hetero Analyticals ',
        caseStudiesParaGraph:
          '…Built wordpress based custom website for Hetero Analytical. Hetero  is Analytical Testing Laboratory …',
        caseStudiesClassName: 'pastel-blue',
        caseStudiesImgAlt: 'Corporate Website',
        caseURL: 'case-studies/Hetero/',
      },

    ],
    buttonName: 'Read more case studies',
    buttonURL: 'case-studies/',
  },
  techstacksProps: {
    heading: 'Technologies',
    tabContents: [
      {
        tabName: 'Backend',
        tabimages: [
          {
            src: images.iconNodeJS,
            alt: 'Node.js',
          },
          {
            src: images.iconNETCore,
            alt: '.Net Core',
          },
          {
            src: images.iconAspNET,
            alt: 'asp.Net (C#)',
          },
          {
            src: images.iconPHP,
            alt: 'PHP',
          },
          {
            src: images.iconPython,
            alt: 'Python',
          },
          {
            src: images.iconJava,
            alt: 'Java',
          },
          {
            src: images.iconRubyOnRails,
            alt: 'Ruby On Rails',
          },
          {
            src: images.iconGo,
            alt: 'Go',
          },
        ],
      },
      {
        tabName: 'Frontend',
        tabimages: [
          {
            src: images.iconElectron,
            alt: 'Electron',
          },
          {
            src: images.iconFlutter,
            alt: 'Flutter',
          },
          {
            src: images.iconTypeScript,
            alt: 'TypeScript',
          },
          {
            src: images.iconXamarin,
            alt: 'Xamarin',
          },
          {
            src: images.iconVue,
            alt: 'Vue',
          },
          {
            src: images.iconReact,
            alt: 'React',
          },
          {
            src: images.iconReactNative,
            alt: 'ReactNative',
          },
          {
            src: images.iconWPF,
            alt: 'WPF',
          },
          {
            src: images.iconAdnroid,
            alt: 'Adnroid',
          },
          {
            src: images.iconJavaScript,
            alt: 'JavaScript',
          },
          {
            src: images.iconAngularJS,
            alt: 'AngularJS',
          },
          {
            src: images.iconiOS,
            alt: 'iOS',
          },
          {
            src: images.iconUnity,
            alt: 'Unity',
          },
        ],
      },
      {
        tabName: 'Databases',
        tabimages: [
          {
            src: images.iconGroup32,
            alt: 'DynamoDB',
          },
          {
            src: images.iconCloudera,
            alt: 'Cloudera',
          },
          {
            src: images.iconGroup42,
            alt: 'Cosmos DB',
          },
          {
            src: images.iconMySQL,
            alt: 'MySQL',
          },
          {
            src: images.iconRethinkDB,
            alt: 'RethinkDB',
          },
          {
            src: images.iconFirestore,
            alt: 'Firestore',
          },
          {
            src: images.iconSQLServer,
            alt: 'SQLServer',
          },
          {
            src: images.iconPostageSQL,
            alt: 'PostageSQL',
          },
          {
            src: images.iconOracle,
            alt: 'Oracle',
          },
          {
            src: images.iconhbase,
            alt: 'hbase',
          },
          {
            src: images.iconMAPR,
            alt: 'MAPR',
          },
          {
            src: images.iconHortonworks,
            alt: 'Hortonworks',
          },
          {
            src: images.iconHadoop,
            alt: 'Hadoop',
          },
          {
            src: images.iconFirebase,
            alt: 'Firebase',
          },
          {
            src: images.iconCouchbase,
            alt: 'Couchbase',
          },
          {
            src: images.iconNeptune,
            alt: 'Neptune',
          },
          {
            src: images.iconRedis,
            alt: 'Redis',
          },
          {
            src: images.iconMongoDB,
            alt: 'MongoDB',
          },
          {
            src: images.iconcassandra,
            alt: 'cassandra',
          },
          {
            src: images.iconElasticSearch,
            alt: 'ElasticSearch',
          },
        ],
      },
      {
        tabName: 'CMS',
        tabimages: [
          {
            src: images.iconSuccessfactors,
            alt: 'Successfactors',
          },
          {
            src: images.iconWordpress,
            alt: 'Wordpress',
          },
          {
            src: images.iconMagento,
            alt: 'Magento',
          },
          {
            src: images.iconCanvas,
            alt: 'Canvas',
          },
          {
            src: images.iconLitmus,
            alt: 'Litmus',
          },
          {
            src: images.iconLiferay,
            alt: 'Liferay',
          },
          {
            src: images.iconShopify,
            alt: 'Shopify',
          },
          {
            src: images.iconDocebo,
            alt: 'Docebo',
          },
          {
            src: images.iconMoodle,
            alt: 'Moodle',
          },
          {
            src: images.iconUmbraco,
            alt: 'Umbraco',
          },
          {
            src: images.iconSitecore,
            alt: 'Sitecore',
          },
          {
            src: images.iconTotara,
            alt: 'Totara',
          },
          {
            src: images.iconAdapt,
            alt: 'Adapt',
          },
        ],
      },
      {
        tabName: 'Cloud',
        tabimages: [
          {
            src: images.iconGooglecloud,
            alt: 'Google cloud',
          },
          {
            src: images.icontwilio,
            alt: 'twilio',
          },
          {
            src: images.iconAlgolia,
            alt: 'Algolia',
          },
          {
            src: images.iconTalend,
            alt: 'Talend',
          },
          {
            src: images.iconSpluck,
            alt: 'Spluck',
          },
          {
            src: images.iconAWS,
            alt: 'AWS',
          },
          {
            src: images.iconAlfresco,
            alt: 'Alfresco',
          },
          {
            src: images.iconStripe,
            alt: 'Stripe',
          },
          {
            src: images.iconSharePoint,
            alt: 'SharePoint',
          },
          {
            src: images.iconApigee,
            alt: 'Apigee',
          },
          {
            src: images.iconPivotal,
            alt: 'Pivotal',
          },
          {
            src: images.iconSalesforce,
            alt: 'Salesforce',
          },
          {
            src: images.iconDocker,
            alt: 'Docker',
          },
          {
            src: images.iconMulesoft,
            alt: 'Mulesoft',
          },
          {
            src: images.iconNexmo,
            alt: 'Nexmo',
          },
          {
            src: images.iconkubernetes,
            alt: 'kubernetes',
          },
          {
            src: images.iconAzure,
            alt: 'Azure',
          },
          {
            src: images.digitalOcean,
            alt: 'Ocean',
          },
        ],
      },
      {
        tabName: 'Testing',
        tabimages: [
          {
            src: images.iconSoupUI,
            alt: 'SoupUI',
          },
          {
            src: images.iconMochas,
            alt: 'Mochas',
          },
          {
            src: images.iconAppium,
            alt: 'Appium',
          },
          {
            src: images.iconHoverfly,
            alt: 'Hoverfly',
          },
          {
            src: images.iconJMeter,
            alt: 'JMeter',
          },
          {
            src: images.iconKatalon,
            alt: 'Katalon',
          },
          {
            src: images.iconSelenium,
            alt: 'Selenium',
          },
          {
            src: images.iconGatling,
            alt: 'Gatling',
          },
          {
            src: images.iconSaucelabs,
            alt: 'Saucelabs',
          },
        ],
      },
      {
        tabName: 'DevOps',
        tabimages: [
          {
            src: images.iconTravisCI,
            alt: 'TravisCI',
          },
          {
            src: images.iconCircleCI,
            alt: 'CircleCI',
          },
          {
            src: images.iconCodeship,
            alt: 'Codeship',
          },
          {
            src: images.icongradle,
            alt: 'gradle',
          },
          {
            src: images.iconJenkins,
            alt: 'Jenkins',
          },
        ],
      },
    ],
  },


}
