import React from "react";
import { MDBMask,MDBView,MDBBtn,MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCard } from "mdbreact";
import LocalizedLink from './LocalizedLink'
import { t } from '../services/i18n';
import emanPic from '../assets/img/EmanInHongKong.jpg'
import hassanPic from '../assets/img/hassan.png'
import mFoudaPic from '../assets/img/m_Fouda.jpeg'
const Team = () => {
    return (
      <div className="container">

          <MDBMask className='white-text gradient'/>
      
     
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        {t('team')}
        </h2>
        
        <p className="grey-text w-responsive mx-auto mb-5">
        {t('team')}

        </p>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <MDBCardImage
                src={emanPic}
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"

              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3"> {t('team_eman')}</h4>
              {/* <h6 className="font-weight-bold grey-text mb-3">
              {t('team_eman_position')}

              </h6> */}
              <p className="grey-text">
              {t('team_eman_details')}

              </p>
              <a href="https://www.facebook.com/eman.herawy/"    target="_blank" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="https://www.linkedin.com/in/emanherawy/"    target="_blank" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="https://www.linkedin.com/in/emanherawy/"    target="_blank" className="p-2 fa-lg linkedin-ic">
                <MDBIcon fab icon="linkedin" />
              </a>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <MDBCardImage
                src={hassanPic}
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"

              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3"> {t('team_hassan')}</h4>
              {/* <h6 className="font-weight-bold grey-text mb-3">
              {t('team_eman_position')}

              </h6> */}
              <p className="grey-text">
              {t('team_hassan_details')}

              </p>
              <a href="https://www.facebook.com/hassanimam/"    target="_blank" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="https://twitter.com/EngHassan"    target="_blank" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg linkedin-ic">
                <MDBIcon fab icon="linkedin" />
              </a>
            </MDBCol>
          </MDBCol>
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <MDBCardImage
                src={mFoudaPic}
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"

              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3"> {t('team_M_Fouda')}</h4>
              {/* <h6 className="font-weight-bold grey-text mb-3">
              {t('team_eman_position')}

              </h6> */}
              <p className="grey-text">
              {t('team_M_Fouda_details')}

              </p>
              <a href="https://www.facebook.com/mohamed.fatouh.7/"    target="_blank" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="https://twitter.com/MohamedFFouda"    target="_blank" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg linkedin-ic">
                <MDBIcon fab icon="linkedin" />
              </a>
            </MDBCol>
          </MDBCol>
   </MDBRow>
    
    
  
    
    </div>
  
         );
}

export default Team;