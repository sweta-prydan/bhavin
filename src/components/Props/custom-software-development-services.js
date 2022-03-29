import React from 'react'
import { images } from '../../config/images'

export const CustomSoftwareDevProps = {
  bannerProps: {
    bannerHeading: (
      <>
        Custom Software Development Services{' '}
        <span className="heading-red">that solve your unique business problems</span>
      </>
    ),
    bannerContent: (
      <>
        Leverage the full potential of software technologies for your business to gain edge on competition
      </>
    ),
    BannerAlt: 'Custom Software Development Services ',
    buttonName: 'Get Free Consultation!',
    buttonLink: '/contact/',
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
        serviceHeading: 'Application Development Services',
        serviceParagraph: (
          <>
            Bespoke software solution for your business{' '}
            that made just for your group of user and solve your specific business problems.
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
            System Integration <br />
            Services
          </>
        ),
        serviceParagraph: (
          <>
            We can help you speak your different software components with each other. We integrate you softwares and make efficient use of knowledge and data just in real time.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'System Integration Services',
        serviceClass: 'pale-grey',
      },
      {
        id: '3',
        serviceHeading: 'Dashboards, ETL, and BI Services',
        serviceParagraph: (
          <>
            Get more insights from your data and make informed decision powered by facts.
          </>
        ),
        serviceIcon: images.serEnterprise,
        serviceAlt: 'Dashboards, ETL, and Reporting Services',
        serviceClass: 'ice-blue',
      },
      {
        id: '4',
        serviceHeading: 'Legacy Modernization & Application Migration',
        serviceParagraph: (
          <>
            We help you modernize your outdated software to the latest one.
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
            Big Data Application <br />
            Services
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
  buildApplicationProps: {
    buildApplicationHeading: (
      <>
        Do you need <span className="highlight-head">Custom Software?</span>
      </>
    ),
    buildAppPara: (
      <>
        Most likely yes because every business is unique and need to innovate the unique way to solve business problems.
        Custom software help you to solve your business problem more effectively and give you edge on competition.
        Obviously, off-the-self software may not fit with your way to doing business many times, no worries
        let's develope a custom software for you that exactly solve your own unique business problem perfectly.
        Leverage our decades of experience in crafting bespoke software solution for businesses. Which is user
        friendly, save you operational cost, scale with your business and secure.
      </>
    ),


  },
  faqSectionProps: {
    heading: 'FAQs',
    faqProps: [
      {
        faqTitle:
          'What is custom software development? What are custom applications?',
        faqPara: (
          <>
            <strong>Custom software development</strong> is the process of engineering and building software solution for your specific business need.
          </>
        ),
      },
      {
        faqTitle: 'How much does custom software development cost?',
        faqPara: (
          <>
            Cost of building custom software development varies a lot based on number of parameters like technology, user group and complexity of problems.
            Typically it starts with just $1,000 to to $100,000 to give high level idea.
            <br /> <br />
            Honestly, this doesn't give you any ideal. Let us give you some specific example. We have recently develop invoicing software for one of our client for just $1000. It was just desktop based application and print invoice and keep record of invoice. Generate few reports like sales by month and customer. We completed this project with only one developer in 2 week.
            On other-hand, we have developed a custom  software for Petro Chemical Company which do lot of thing in diffrent departs like HR, Finance, Marketing, Sales and Purchase. We integrate our solution with SAP ERP and develop couple of mobile apps. The cost of whole solution was around 4 million dollar. We deployed around 150 expert and they worked for 4 years.
            <br /> <br />
          </>
        ),
      },
      {
        faqTitle: 'How do you choose the right tech architecture?',
        faqPara: (
          <>
            Obviously, like any other profession its matter of skill, expertise and experience. We have decades of experience in doing same thing and we are open to take expert advice as and when required. <br /> <br />
            <br /> <br />
            This is both art and science. We follow best practice like persona design, customer journey, touch points, UI Design, prototyping, and development, testing and deployment. We love agile methodology and practice it a lot.
          </>
        ),
      },
      {
        faqTitle: 'What technologies will be used to develop custom software?',
        faqPara: (
          <>
            Again, there is no single fit for every need and requirement.
            <br /> <br />

          </>
        ),
      },

    ],
    contactHeading: 'Do you have more questions?',
    contactPara:
      'We are here to answer',
    supportImg: images.contactLadySm,
    buttonName: 'Let’s talk!',
    buttonLink: '/contact/',
  },
}
