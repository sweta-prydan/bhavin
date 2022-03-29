import React from 'react'
import * as yup from 'yup'

export const [minBudget, maxBudget] = [5000, 500000]

export const windowWidth = 768

export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

export const timezones = [
  { label: 'EST', value: 'EST' },
  { label: 'MST', value: 'MST' },
  { label: 'PST', value: 'PST' },
  { label: 'CST', value: 'CST' },
]

export const timeSlots = [
  {
    label: '06:00 AM - 07:00 AM',
    value: '06:00 AM - 07:00 AM',
  },
  {
    label: '07:00 AM - 08:00 AM',
    value: '07:00 AM - 08:00 AM',
  },
  {
    label: '08:00 AM - 09:00 AM',
    value: '08:00 AM - 09:00 AM',
  },
  {
    label: '09:00 AM - 10:00 AM',
    value: '09:00 AM - 10:00 AM',
  },
  {
    label: '10:00 AM - 11:00 AM',
    value: '10:00 AM - 11:00 AM',
  },
  {
    label: '11:00 AM - 12:00 PM',
    value: '11:00 AM - 12:00 PM',
  },
  {
    label: '12:00 PM - 01:00 PM',
    value: '12:00 PM - 01:00 PM',
  },
  {
    label: '01:00 PM - 02:00 PM',
    value: '01:00 PM - 02:00 PM',
  },
  {
    label: '02:00 PM - 03:00 PM',
    value: '02:00 PM - 03:00 PM',
  },
  {
    label: '03:00 PM - 04:00 PM',
    value: '03:00 PM - 04:00 PM',
  },
  {
    label: '04:00 PM - 05:00 PM',
    value: '04:00 PM - 05:00 PM',
  },
  {
    label: '05:00 PM - 06:00 PM',
    value: '05:00 PM - 06:00 PM',
  },
  {
    label: '06:00 PM - 07:00 PM',
    value: '06:00 PM - 07:00 PM',
  },
  {
    label: '07:00 PM - 08:00 PM',
    value: '07:00 PM - 08:00 PM',
  },
  {
    label: '08:00 PM - 09:00 PM',
    value: '08:00 PM - 09:00 PM',
  },
  {
    label: '09:00 PM - 10:00 PM',
    value: '09:00 PM - 10:00 PM',
  },
  {
    label: '10:00 PM - 11:00 PM',
    value: '10:00 PM - 11:00 PM',
  },
  {
    label: '11:00 PM - 12:00 AM',
    value: '11:00 PM - 12:00 AM',
  },
]

export const workingOnOptions = [
  {
    id: 1,
    label: (
      <>
        Web or Mobile Apps <br />
        Development
      </>
    ),
    value: 'Web or Mobile Apps Development',
    className: '',
  },
  {
    id: 2,
    label: (
      <>
        Hire Dedicated <br />
        Developers
      </>
    ),
    value: 'Hire Dedicated Developers',
    className: 'periwinkle',
  },
  {
    id: 3,
    label: (
      <>
        AI/ML Development <br />
        Services
      </>
    ),
    value: 'AI/ML Development Services',
    className: 'robin-s-egg',
  },
  {
    id: 4,
    label: (
      <>
        Custom Software <br />
        Development
      </>
    ),
    value: 'Custom Software Development',
    className: 'beige',
  },
  {
    id: 5,
    label: (
      <>
        {' '}
        Software Testing <br />
        and QA
      </>
    ),
    value: 'Software Testing and QA',
    className: 'powder-pink',
  },
  {
    id: 6,
    label: (
      <>
        {' '}
        API Development &amp; <br />
        Integration
      </>
    ),
    value: 'API Development & Integration',
    className: 'light-peach',
  },
]

export const workingOnValues = workingOnOptions.reduce((acc, option) => {
  acc[option.value] = false
  return acc
}, {})

export const formNames = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  website: 'Website',
  challenge: 'Challenge',
  projectDescription: 'ProjectDescription',
  budget: 'Budget',
  timezone: 'Timezone',
  interestedIn: 'InterestedIn',
  selectedDay: 'SelectedDay',
  timeSlot: 'TimeSlot',
  pageType: 'PageType',
  pageLink: 'PageLink',
  utm_source: 'utm_source',
  utm_medium: 'utm_medium',
  utm_campaign: 'utm_campaign',
  utm_term: 'utm_term',
  utm_content: 'utm_content',
}

export const formFields = {
  [formNames.name]: 'Name',
  [formNames.email]: 'ade1f9d5bbdae7971154f02935d7f48cbf828cbe',
  [formNames.phone]: '3d598b81a793d494493ec86aa4211ffeff007368',
  [formNames.website]: '6ffef9813534a2dc28c9d8854c036cdc125c41d6',
  [formNames.challenge]: '21fb0c5a8132fcb44262d907ef00edc722d5480d',
  [formNames.projectDescription]: '1d7ce87a85532cb3406211cb4b9fe02de0d5bc22',
  [formNames.budget]: '1a84c16341a8216024f5121650a171891792852b',
  [formNames.timezone]: 'fd4ce31dd2b7f5d3730eb0c4c60f8ddee3cfb362',
  [formNames.interestedIn]: '28977c57ade55d983ac5d1b802cb4501f5b57a9d',
  [formNames.selectedDay]: '60af8df46d530f566ddd9b1646fe1c2d34fc7af5',
  [formNames.timeSlot]: '0b8678f39207002d2772611472c74890dfb6a427',
  [formNames.pageType]: '12709837d9fb1d7c31b7adcc289bf0cb3f48c16a',
  [formNames.pageLink]: '950822667f865760be65306db1a04ddc0868688f',
  [formNames.utm_source]: '31c2eaa18578b8d647048747ab2785817113c8eb',
  [formNames.utm_medium]: 'fea74c9c09c9555c84d028a2ccb31939a9478788',
  [formNames.utm_campaign]: '719c588be4b25d5c0294965007d9fd2f853956d4',
  [formNames.utm_term]: '23f0927116370ea69278a9ed8ab2b3949f7d6c8a',
  [formNames.utm_content]: 'e4005cd995cf6026dba79746dad86d697a467eef',
}

export const appendToSite = value => {
  let website = ''
  if (value === 'https://' || value === '') {
    website = ''
  } else {
    website = value.replace(/https?:\/\//i, '')
    website = `https://${website}`
  }
  return website
}

export const ContactUsSchema = yup.object().shape({
  [formNames.name]: yup.string().required('Name is Required'),
  [formNames.email]: yup
    .string()
    .email('Please Enter a Valid Email Address')
    .required('Please Enter a Valid Email Address'),
  [formNames.phone]: yup.string(),
  [formNames.website]: yup.string(),
  [formNames.challenge]: yup.string(),
  [formNames.projectDescription]: yup
    .string()
    .required('Project Description is Required'),
  [formNames.budget]: yup.object().shape({
    max: yup.number(),
    min: yup.number(),
  }),
  [formNames.timezone]: yup.string(),
  [formNames.interestedIn]: yup.array().nullable(),
  [formNames.selectedDay]: yup.string(),
})
