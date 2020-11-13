import React from "react";
import {  MDBRow, MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { t } from '../services/i18n'
import { locales } from '../config/i18n'
import  mentorShipPic from '../assets/img/consult.gif' 
 import  WebinarShipPic from '../assets/img/bony.gif' 
const Activities = () => {
  return (
  <div className="container">

<hr className='my-5' />
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        {t('menu_rec_activity')}
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
        {t('menu_rec_activity_desc')}
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={WebinarShipPic}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="seedling" className="pr-2" />
                {t('rec_activity_webinar')}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>                {t('rec_activity_webinar_name')}
</strong>
            </h3>
            <p>
            {t('rec_activity_webinar_desc')}
            </p>
            <p>
            {t('rec_activity_by')}

            <span>  <a href="https://www.linkedin.com/in/emanherawy/"    target="_blank">
                <strong>Eman Herawy
                </strong>
              </a>,</span>
           <span>   <a href="https://www.facebook.com/hassanimam"   target="_blank">
                <strong>Hassan Imam
                </strong>
              </a> ,</span>
          <span>    <a href="https://twitter.com/MohamedFFouda"   target="_blank">
                <strong>Mohamed Fouda</strong>
              </a></span>
              , 29 Nov 2020
            </p>
            <MDBBtn
              color="pink"
              size="md"
              href="https://docs.google.com/document/d/1DeuKRszKv6fsQvhV7tuUGbWKG38yxwa0gvrzKQba9CM/edit?usp=sharing"
              target="_blank"  className="mb-lg-0 mb-4 waves-light"
            > 
                                 {t('more')}

           
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="seedling" className="pr-2" />
                {t('rec_activity_prog')}

              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>                {t('rec_activity_prog_name')}
</strong>
            </h3>
            <p>
            {t('rec_activity_prog_desc')}

            </p>
            <p>
            {t('rec_activity_by')}

              <a href="https://www.linkedin.com/in/emanherawy/"    target="_blank">
                <strong>Eman Herawy
                </strong>
              </a>
             ,  02 Jan 2021
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
            {t('more')}

            </MDBBtn></MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={mentorShipPic}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://ethereum.org/static/6b43bf17d918f936ead1675032294b8c/3bf79/hero.png"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="globe" className="pr-2" />
                { t('rec_activity_content')}

              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>                {t('rec_activity_content_name')}
</strong>
            </h3>
            <p>
            {t('rec_activity_content_desc')}

            </p>
            <p>
            {t('rec_activity_by')}

              <a href="https://crowdin.com/project/ethereumfoundation/activity_stream"    target="_blank">
                <strong>                {t('rec_activity_community')}
The Community
                </strong>
              </a>
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light " href="https://ethereum.org/en/contributing/translation-program/"    target="_blank">
            {t('more')}

            </MDBBtn>
          </MDBCol>
        </MDBRow>
     
      
        </div>
  );
}

export default Activities;
