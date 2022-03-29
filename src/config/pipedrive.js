import { isWindowDefined, fetchItem, GOOGLE_PARAMS, logMessage } from './utils'
import { formFields } from '../components/ContactStepForm/contactFormConstants'

const PIPEDRIVE_API =
  process.env.GATSBY_PIPEDRIVE_API || 'http://localhost:3000'

export const fetchKeywords = () => {
  try {
    let googleTags = fetchItem(GOOGLE_PARAMS)
    let params = new URLSearchParams(googleTags)
    let values = {}
    if (params.has('utm_source')) {
      for (let [key, value] of params) {
        values[formFields[key]] = value
      }
      return values
    }
    return {}
  } catch (error) {
    logMessage('failed to fetch google keywords')
  }
}

export const addPipeDrivePerson = person => {
  if (isWindowDefined) {
    return fetch(`${PIPEDRIVE_API}/addPerson`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(person),
    }).then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
  }
}

export const addPipeDriveDeal = deal => {
  if (isWindowDefined) {
    return fetch(`${PIPEDRIVE_API}/addDeal`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(deal),
    }).then(res => {
      if (!res.ok) throw new Error()
      return res.json()
    })
  }
}

export const addPipeDriveDealFile = dealfile => {
  let formData = new FormData()
  formData.append('file', dealfile.file)
  formData.append('deal_id', dealfile.deal_id)
  formData.append('person_id', dealfile.person_id)

  return fetch(`${PIPEDRIVE_API}/addFile`, {
    method: 'POST',
    body: formData,
  }).then(res => {
    if (!res.ok) throw new Error()
    return res.json()
  })
}

export const sendMail = async ({ emailFields }) => {
  try {
    let res = await fetch(`${PIPEDRIVE_API}/sendMail`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        text: emailFields,
      }),
    })
    if (!res.ok) throw new Error()
  } catch (error) {
    logMessage('failed to send contact mail')
  }
}

export const autopilotAdd = async ({ fields, _autopilot_session_id }) => {
  try {
    let res = await fetch(`${PIPEDRIVE_API}/autopilot/service`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ fields, _autopilot_session_id }),
    })
    if (!res.ok) throw new Error()
  } catch (error) {
    logMessage('failed to send contact mail')
  }
}
