import React from "react";
import {  MDBRow, MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { t } from '../services/i18n'
import { locales } from '../config/i18n'
const Activities = () => {
  return (
  <React.Fragment>

<hr className='my-5' />
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        {t('menu_rec_activity')}
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
         Recent activities run through us and our community. 
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
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
                <MDBIcon icon="suitcase" className="pr-2" />
                Webinars
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Blockchain webinar series</strong>
            </h3>
            <p>
            Series of webinars to explain blockchain by use cases for  Arabs. It comes in two flavours; explaining blockchain from business perspective as well as technical perspective to provide full overview of blockchain and help community to grow faster.  
            </p>
            <p>
              by
            <span>  <a href="https://www.linkedin.com/in/emanherawy/">
                <strong>Eman Herawy
                </strong>
              </a>,</span>
           <span>   <a href="https://www.facebook.com/hassanimam">
                <strong>Hassan Imam
                </strong>
              </a> ,</span>
          <span>    <a href="https://twitter.com/MohamedFFouda">
                <strong>Mohamed Fouda</strong>
              </a></span>
              , 11/08/2020
            </p>
            <MDBBtn
              color="pink"
              size="md"
              href="https://docs.google.com/document/d/1DeuKRszKv6fsQvhV7tuUGbWKG38yxwa0gvrzKQba9CM/edit?usp=sharing"
              className="mb-lg-0 mb-4 waves-light"
            > 
                 Read more
           
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Programs
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>One to One mentorship program</strong>
            </h3>
            <p>
             Program for startups, students who are working on blockchain projects and need some guidance. 
            </p>
            <p>
              by
              <a href="https://www.linkedin.com/in/emanherawy/">
                <strong>Eman Herawy
                </strong>
              </a>
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more
            </MDBBtn></MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
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
                <MDBIcon icon="suitcase" className="pr-2" />
                Arabic Contents
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Ethereum Translation program</strong>
            </h3>
            <p>
            An initiative to make Ethereum.org accessible to everyone, regardless of their nationality or language. Join our translation community to make this vision a reality!

            </p>
            <p>
              by
              <a href="https://crowdin.com/project/ethereumfoundation/activity_stream">
                <strong>The Community
                </strong>
              </a>
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light " href="https://ethereum.org/en/contributing/translation-program/">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
     
      
        </React.Fragment>
  );
}

export default Activities;
