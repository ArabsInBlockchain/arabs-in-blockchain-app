import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { t } from '../services/i18n'

const ContactPage = () => {
  return (
    <div className="container">
        <hr className='my-5' />
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        {t('landing_keep_in_touch')}
      </h2>
      
      <p className="text-center w-responsive mx-auto pb-5">
      {t('landing_keep_in_touch_details')}
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label=      {t('landing_keep_in_touch_name')}
 />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label=      {t('landing_keep_in_touch_email')}

                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label= {t('landing_keep_in_touch_message')} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label= {t('landing_keep_in_touch_message_pholder')}
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="purple" size="md">
            {t('landing_keep_in_touch_message_send')}
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            
            <li>
              <MDBIcon icon="envelope" size="2x" className="purple-text mt-4" />
              <p>contact@example.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default ContactPage;