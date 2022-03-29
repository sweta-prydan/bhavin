import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { PPCGetInTouchFormStyle } from './PPCGetInTouchForm.styles'
import loadable from '@loadable/component'
import * as Yup from 'yup'
import FormSubmitVideo from '../LightBoxImgVideo/FormSubmitVideo'
import {
  addPipeDrivePerson,
  addPipeDriveDeal,
  fetchKeywords,
  sendMail,
  autopilotAdd,
} from '../../config/pipedrive'
import {
  getPageLink,
  getPageType,
  formTypes,
  thankYouVideo,
  sendFormSuccessGAEvent,
  logError,
} from '../../config/utils'
import {
  formFields,
  formNames,
} from '../ContactStepForm/contactFormConstants'
import { images } from '../../config/images'

const FormikWrapper = loadable.lib(() => import('formik'))

class PPCGetInTouchForm extends Component {
  state = {
    isOpen: false,
  }

  validationSchema = () =>
    Yup.object().shape({
      [formNames.email]: Yup.string()
        .email()
        .required(`Please enter a valid email address`),
      [formNames.name]: Yup.string().required('Name is required'),
      [formNames.phone]: Yup.string().required(),
    })

  render() {
    const { CTAtext } = this.props
    const { isOpen } = this.state
    return (
      <PPCGetInTouchFormStyle className="form">
        <FormSubmitVideo
          isOpen={isOpen}
          url={thankYouVideo}
          closeLightbox={() => this.setState({ isOpen: false })}
        />
        <FormikWrapper>
          {({ Formik }) => (
            <Formik
              validationSchema={this.validationSchema()}
              initialValues={{
                [formNames.email]: '',
                [formNames.name]: '',
                [formNames.phone]: '',
                [formNames.interestedIn]: '',
                [formNames.projectDescription]: '',
              }}
              onSubmit={async (
                values,
                { setSubmitting, setErrors, setStatus, resetForm }
              ) => {
                try {
                  let addPerson = null
                  const personObj = {
                    [formNames.name]: values.name,
                    [formNames.email]: values.email,
                    [formNames.phone]: values.phone,
                  }
                  addPerson = await addPipeDrivePerson(personObj)

                  const dealObj = {
                    title: values[formNames.name],
                    person_id: addPerson.data.id,
                    [formFields.projectDescription]: values[formNames.name],
                    [formFields.interestedIn]: values[formNames.interestedIn],
                    [formFields.pageType]: getPageType(),
                    [formFields.pageLink]: getPageLink(),
                  }
                  await addPipeDriveDeal({ ...dealObj, ...fetchKeywords() })

                  let emailFields = {
                    ...values,
                    [formNames.pageType]: getPageType(),
                    [formNames.pageLink]: getPageLink(),
                    ...fetchKeywords(),
                  }

                  sendMail({ emailFields })
                  autopilotAdd({
                    fields: emailFields,
                    _autopilot_session_id: document.querySelector(
                      'input[name="_autopilot_session_id"]'
                    ).value,
                  })
                  sendFormSuccessGAEvent()
                  resetForm()
                  setSubmitting(false)
                  if (getPageType() === formTypes.ppc) {
                    this.setState({ isOpen: true })
                  } else {
                    navigate('/thank-you/?from=footer-form')
                  }
                } catch (error) {
                  logError(error)
                }
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                isSubmitting,
              }) => (
                <form
                  id="Service-Form"
                  className="service-footer-form"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_autopilot_session_id" />
                  <div className="input-field-row">
                    <div className="form-field-blk">
                      <input
                        className={`label-input-field ${values[formNames.name].length ? 'fill' : ''
                          }`}
                        type="text"
                        onChange={handleChange}
                        value={values[formNames.name]}
                        name={formNames.name}
                        autoCapitalize="off"
                        id="sname"
                      />
                      <label htmlFor="FirstName">Your Name *</label>
                    </div>
                  </div>
                  <div className="input-field-row">
                    <div className="form-field-blk column">
                      <input
                        className={`label-input-field ${values[formNames.email].length ? 'fill' : ''
                          }`}
                        type="email"
                        onChange={handleChange}
                        value={values[formNames.email]}
                        name={formNames.email}
                        autoCapitalize="off"
                        id="semail"
                      />
                      <label htmlFor={formNames.email}>Your Email *</label>
                    </div>
                    <div className="form-field-blk column">
                      <input
                        className={`label-input-field ${values[formNames.phone].length ? 'fill' : ''
                          }`}
                        type="phone"
                        onChange={handleChange}
                        value={values[formNames.phone]}
                        name={formNames.phone}
                        autoCapitalize="off"
                        id="sphone"
                      />
                      <label htmlFor={formNames.phone}>
                        Your Phone Number *
                      </label>
                    </div>
                  </div>
                  <div className="input-field-row select-row">
                    <div className="form-field-blk">
                      <select
                        name={formNames.interestedIn}
                        id="Select"
                        value={values[formNames.interestedIn]}
                        onChange={handleChange}
                        className={`label-input-field ${values[formNames.interestedIn].length ? 'fill' : ''
                          }`}
                      >
                        <option value="" />
                        <option value="Web or Mobile Apps Development">
                          Web or Mobile Apps Development
                        </option>
                        <option value="Hire Dedicated Developers">
                          Hire Dedicated Developers
                        </option>
                        <option value="AI/ML Development Services">
                          AI/ML Development Services
                        </option>
                        <option value="Custom Software Development">
                          Custom Software Development
                        </option>
                        <option value="Software Testing and QA">
                          Software Testing and QA
                        </option>
                        <option value="API Development and Integration">
                          API Development & Integration
                        </option>
                      </select>
                      <label htmlFor={formNames.interestedIn}>
                        I'm Interested in
                      </label>
                    </div>
                  </div>
                  <div className="input-field-row">
                    <div className="form-field-blk">
                      <textarea
                        name={formNames.projectDescription}
                        onChange={handleChange}
                        value={values[formNames.projectDescription]}
                        className={`label-input-field textarea ${values[formNames.projectDescription].length
                          ? 'fill'
                          : ''
                          }`}
                        autoCapitalize="off"
                        id="smessage"
                      />
                      <label htmlFor={formNames.projectDescription}>
                        Message
                      </label>
                    </div>
                  </div>

                  <div className="bottomAlert">
                    <div className="submit-row">
                      <div className="btn-submit">
                        <input
                          className="btn-submit-inner"
                          type="submit"
                          disabled={isSubmitting}
                          value={CTAtext ? CTAtext : 'Submit'}
                        />
                      </div>
                      {isSubmitting && <img src={images.Loader} alt="" />}
                    </div>
                    {Object.entries(errors).length > 0 &&
                      errors.constructor === Object ? (
                      <div>
                        <div className="bottomErrorText">
                          Please fill all the required fields
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </form>
              )}
            </Formik>
          )}
        </FormikWrapper>
      </PPCGetInTouchFormStyle>
    )
  }
}

export default PPCGetInTouchForm
