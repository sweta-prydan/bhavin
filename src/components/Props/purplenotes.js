import React from 'react'
import { images } from '../../config/images'

export const purplenotesProps = {
  bannerProps: {
    heading: 'PurpleNotes',
    bannerPara:
      'Custom app solutions for education industries',
    BannerAlt: 'PurpleNotes',

  },
  introductionContent: {
    maintile: 'Introduction',
    mainpara: (
      <>
        India is developing country and hence many Indian people are attracted
        by high qulity of life in developed countries like USA, UK, Canada and Australia.
        Students opted to Study in these develop countries and wanted to to settle down their.
        As result there are high demand for visa and immagration consultants who can help them
        to study aborad and settle there.
        .{' '}
        <br />
        <br />
        Purplnotes wanted to create their own brand being a new bussiness in this industury
        and seek the help from Prydan. We have designed their logo, website, advertisment, stationary,
        visiting cards and brochure. We have created wordpress bases CMS Website and custom software for billing and CRM. \

      </>
    ),
  },
  FasterdevelopmentData: {
    heading: 'Quality check and Hosting Challenges',
    maintitle:
      'Apps will help their clients manage workout, diet plans, supplement dosage, etc. at a single place.',
    ServiceDetails: (
      <>
        Trainers, gyms and dieticians find it very challenging to use multiple
        apps for managing different fitness programs for their clients like
        workouts, yoga, meal plans et al. Even users lose their interest by
        keeping track of the progress in different apps. <br />
        <br />
        To tackle this, Fitcom wanted to build a platform where gyms, fitness
        clubs/studios, physical therapy centers, dieticians et al can craft a
        personalized fitness app for their clients for a small monthly fee. Such
        apps will help their clients manage workout, diet plans, supplement
        dosage, etc. at a single place. <br />
        <br />
        One of the major technical challenges was to build customizable
        packages, maintaining different instances for hosting of different
        whitelabled apps. Moreover, performing full QA of the customized app
        before it hits the app store was a tedious job.
      </>
    ),


  },
  casereSultsecProps: {
    heading: 'Result',
    RightSubHead: 'Cost saving custom apps using White label platform',
    maincontent: (
      <>
        We built a SaaS platform, where fitness studios can build custom iOS and
        Android native apps by not just adding their logo and brand color but
        also adding curated workouts and nutrition plans for their customers. By
        utilizing Appium for automated testing, we removed the need of 1 week
        long manual QA cycle and reduced the deployment time to few hours with
        automation script. <br /> <br />
        FITCOM had great reach among different fitness entities like gyms,
        coaches, clubs, trainers et al, hence it didn’t take much time to get
        traction.
      </>
    ),
    imgURL2x: images.purplenotesResultScreen2x,
    imgURL: images.purplenotesResultScreen,
  },
  AppplatformProps: {
    Title: 'Design',
    subTitle: (
      <>
        One app that <br />
        fits all size
      </>
    ),
    para: (
      <>
        Before mobilizing the development team, we wanted to add value to the
        platform so that it can easily penetrate the market. We conducted
        research on various fitness apps available in the market and decided to
        add pre-existing key features to the platform. Apart from creating
        value, it also helped us to quickly roll-out the new custom apps as
        majority of the features were already covered in pre-existing features.
        Some of the Major features that comes with basic app package -
      </>
    ),
    AppplatformBlock: [
      {
        title: <>Marketing</>,
        platformList: [
          'Lead generation tool',
          <>Space for Supplement advertisements</>,
          'Suggest products',
          <>1 month free trial option for end clients</>,
        ],
      },
      {
        title: <>Workout</>,
        platformList: [
          'Stopwatch for workouts',
          'Custom workouts',
          'Mentors & Tech Leads',
          'Code Quality',
        ],
      },
      {
        title: (
          <>
            Tracking <br />
            Tools
          </>
        ),
        platformList: [
          'BMR Calculator',
          'Body stats tracking',
          'Calorie meter',
          'Mange billing',
        ],
      },
    ],
    featuresDetails:
      'If the studio has a requirement for some additional custom features, then the app can be launched in a short span of few weeks depending on the complexity of the features.',
    // caseQuoteProps: {
    //   maintext: (
    //     <>
    //       <span>“Simform have gone above and beyond our expectations,</span>{' '}
    //       integrating seamlessly with our own team to deliver cutting edge
    //       technology in a timely and professional manner.”
    //     </>
    //   ),
    //   userImg: images.edna,
    //   userImg2x: images.edna2x,
    //   userName: 'Edna Schwartz',
    //   designation: 'Chief Executive Officer',
    // },
  },
  FitcomappscreenProps: {
    Heading: 'Heading',
  },
  ReliabilityinstancesTopProps: {
    trackheading:
      'Utilizing Vonage(Nexmo) Video API for high quality and scalable video communications and messaging',
    ReliabilityinstancesDetails: [
      {
        trackbottomPara:
          'One of the major offerings by Fitcom is its personalized coaching by fitness experts to their customers. App provides facility to schedule video call sessions with their favorite fitness expert. To achieve that, we used Live Video API by Vonage which is cross platform so that it can be easier to scale on other platforms like web or desktop. Moreover it also offers real-time messaging so it helped us facilitate real time chat feature between customer and fitness expert prior to their scheduled video call. Vonage offers most extensive list of capabilities and features on the market for WebRTC so that we do not need to switch to any other providers in the foreseeable future.',
      },
    ],
  },
  ResultimgsectionProps: {
    heading: 'Easy to use CMS for white-labeling',
    content: (
      <>
        There are lots of white-label fitness apps available, but they tend to
        have a narrow focus on customization, and many are limited to features
        that are not useful for many people. Our main focus was to provide
        modern fitness features, with simple and less time consuming roll-out of
        white labeled app for the fitness partners. The partner can add app
        logo, brand logo, theme, workouts, programs, team members as well as
        trainers. Also, the users can be added to the application by just
        uploading the CSV file which made it very easy for studios with large
        number of members. The partner can also add its team to the platform,
        which can manage the content and the user in the application.
      </>
    ),
  },
  caseIntegrateProps: {
    heading: 'Testing and Deployment Automation to reduce the time to market',
    para: (
      <>
        Launching multiple apps with same functionality in a single week isn’t
        possible without automation, especially in testing. We developed a Unix
        Shell script that fetches the code of default and common app features
        and merges it with the branding related response (Logo, colors, fonts
        etc) submitted by the partner. <br /> <br />
        The script automatically generates the new build along with versioning
        for both the platforms i.e. iOS and Android which then goes under
        quality check using Appium mobile automation tool. With the help of
        Appium, system can perform more than 500 test cases in minutes removing
        the need to manual testing. Automation scripts were designed to perform
        UI testing, Functional testing as well as Performance testing.
      </>
    ),
    imgCaption: 'Appium for testing automation for new whitelabled builds',
    secondPara:
      'Publishing iOS & Android apps on the stores is the most tedious task and it also increases the release cycle drastically. We used Fastlane, which is a collection of 12 tools, that allowed us to define the workflows like automate screenshots for different devices, dealing with code signing and ultimately publishes a new release on stores automatically.',
    // caseQuoteProps: {
    //   maintext: (
    //     <>
    //       <span>“Simform have gone above and beyond our expectations,</span>{' '}
    //       integrating seamlessly with our own team to deliver cutting edge
    //       technology in a timely and professional manner.”
    //     </>
    //   ),
    //   userImg: images.edna,
    //   userImg2x: images.edna2x,
    //   userName: 'Edna Schwartz',
    //   designation: 'Chief Executive Officer',
    // },
  },
  ReliabilityinstancesProps: {
    trackheading:
      'Reliability and Scalability achieved through multiple instances',
    ReliabilityinstancesDetails: [
      {
        trackbottomPara:
          'One of the critical success factors for this business is to provide 24*7 availability when the platform and user base grows. Though we have auto scaling facilities on hosting server, it is not wise to host all the APIs, databases for all the studios on single instance. We leveraged Microsoft Azure Virtual Mchine to cater the hosting needs and deployed app packages on different instances each time we built new app for any studio.',
      },
    ],
  },
  relatedcaselistProps: {
    heading: 'Related Case Studies',
    caselistProps: [
      {
        title: 'Tryg',
        para:
          'Scandinavia`s second largest general insurer brings transparency to insurance claims with telematics',
        className: 'light-peach-five',
        link: 'case-studies/tryg/',
      },
      {
        title: 'Decora',
        para: 'Meaningful innovation to drive Interior Designing virtually',
        className: 'robin-egg-blue',
        link: 'case-studies/decora-systems/',
      },
    ],
  },
  CasecontactcardinfoProps: {
    CTACard: {
      title: (
        <>
          Speak to our experts to unlock the value Mobility, IoT, and Data
          Insights!
        </>
      ),
      buttonName: 'Contact Us',
      buttonLink: '/contact/',
    },
  },
}
