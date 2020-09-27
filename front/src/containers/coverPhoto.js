import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { t } from '../services/i18n'
const arabWorld = require('../assets/img/arabWorld.gif')
const CoverPhoto = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong> {t('app_name')}</strong>
            </MDBCardTitle>

            <MDBCardImage
              src={arabWorld}
              className="img-fluid"
              style={{"width":"100%"}}
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                {/* {t('cover_motivation')} */}
                {t('cover_motivation_desc')}
              </MDBCardTitle>
              <MDBCardText>
                {/* <h2> {t('cover_motivation_desc')} </h2> */}
               <p> {t('cover_motivation_details')} </p>
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="#"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default CoverPhoto;