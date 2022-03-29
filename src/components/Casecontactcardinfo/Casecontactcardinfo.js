import React from 'react'
import { CasecontactcardinfoStyles } from './Casecontactcardinfo.styles'
import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'

function Casecontactcardinfo(props) {
  const { CasecontactcardinfoProps } = props.Casecontactcardinfodata
  const CTACardProp = CasecontactcardinfoProps.CTACard
  return (
    <CasecontactcardinfoStyles className="casecontactcardinfo">
      <div className="container">
        <ContactInfoCard {...CTACardProp} />
      </div>
    </CasecontactcardinfoStyles>
  )
}

export default Casecontactcardinfo
