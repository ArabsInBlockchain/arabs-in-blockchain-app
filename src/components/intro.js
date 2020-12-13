import React from "react";
import { MDBMask,MDBView,MDBBtn,MDBAnimation, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { useTranslation } from 'react-i18next';
const intro = require('../assets/img/intro.gif')
const logo = require('../assets/img/arabs_in_bc.png')
const Intro = () => {
  const { t } = useTranslation();

  return (

    <MDBView>
    <MDBMask className='gradient'>
      <video
        className='video-intro'
        poster='https://mdbootstrap.com/img/Photos/Others/background.jpg'
        muted
        loop
        autoPlay
      >
        <source
          src='https://mdbootstrap.com/img/video/animation.mp4'
          type='video/mp4'
        />
      </video>
    </MDBMask>{' '}
    <MDBContainer
      className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
      style={{ height: '100vh', width: '100%' }}
    >
      <MDBRow>
        <MDBCol md='12' className='mb-4 white-text text-center'>
                                    {/* <img
                                src={logo}
                               
                                className="d-inline-block align-top"
                                alt={t('app_name')}
                            /> */}
          <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
          {t('app_name')}
          </h3>
          <hr className='hr-light my-4 w-75' />
          {/* <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src={intro}
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation> */}
          <h4 className='subtext-header mt-2 mb-4'>
         {t('cover_motivation_desc')}
          </h4>
          <MDBBtn outline rounded color='white' href="https://discord.gg/DNTc7tjMBr"    target="_blank">

            <MDBIcon icon='hands-helping' />   {t('menu_join')}
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBView>

    // <MDBContainer className="mt-5 text-center">
    //   <MDBRow>
    //     <MDBCol>
    //       <MDBJumbotron className="text-center">
    //         <MDBCardTitle className="card-title h4 pb-2">
    //           <strong> {t('app_name')}</strong>
    //         </MDBCardTitle>

    //         <MDBCardImage
    //           src={arabWorld}
    //           className="img-fluid"
    //           style={{"width":"100%"}}
    //         />
    //         <MDBCardBody>
    //           <MDBCardTitle className="indigo-text h5 m-4">
    //             {/* {t('cover_motivation')} */}
    //             {t('cover_motivation_desc')}
    //           </MDBCardTitle>
    //           <MDBCardText>
    //             {/* <h2> {t('cover_motivation_desc')} </h2> */}
    //            <p> {t('cover_motivation_details')} </p>
    //           </MDBCardText>

    //           <MDBCol className="d-flex justify-content-center mt-4" md="12">
    //             <MDBCol md="3" className="d-flex justify-content-around">
    //               <a href="#"><MDBIcon
    //                 fab
    //                 icon="linkedin-in"
    //                 className="grey-text"
    //                 size="lg"
    //               /></a>
    //               <a href="#"><MDBIcon
    //                 fab
    //                 icon="twitter"
    //                 className="grey-text"
    //                 size="lg"
    //               /></a>
    //               <a href="#"><MDBIcon
    //                 fab
    //                 icon="facebook-f"
    //                 className="grey-text"
    //                 size="lg"
    //               /></a>
    //             </MDBCol>
    //           </MDBCol>

    //         </MDBCardBody>
    //       </MDBJumbotron>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
  )
}

export default Intro;