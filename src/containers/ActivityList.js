import React from 'react';
import {

  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  
} from 'mdbreact';
import LocalizedLink from '../containers/LocalizedLink'
import { t } from '../services/i18n';
import  mentorShipPic from '../assets/img/mentor.gif' 
import  arabicPic from '../assets/img/glob.gif' 
import  WebinarShipPic from '../assets/img/webinar.gif' 
import  advisoryPic from '../assets/img/advisory.gif' 
class ActivityList extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      
    <div className="container">
<section>
<MDBRow>  

<MDBCol md='12' className='mt-4'>  
            <hr className='my-5' />

  <h2 className='text-center my-5 font-weight-bold'>
   {t('activity_title')}
  </h2>


  <MDBRow id='categories'>
    <MDBCol md='6'>
      <MDBAnimation reveal type='fadeInLeft'>
        <MDBCard cascade className='my-3 grey lighten-4'>
          <MDBCardImage
            cascade
            className='img-fluid'
            src={WebinarShipPic}
          />
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle>
              <MDBIcon
                icon='css3'
                brand
                className='pink-text pr-2'
              />
              <strong> {t('activity_events')}</strong>
            </MDBCardTitle>
            <MDBCardText>
            {t('activity_events_details')}
            
            </MDBCardText>
            <LocalizedLink
              tag='button'
              to='/css'
              color='mdb-color'
              className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
              onClick={this.scrollToTop}
            >
              {t('more')}
            </LocalizedLink>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
  
    <MDBCol md='6'>
      <MDBAnimation reveal type='fadeInRight'>
        <MDBCard cascade className='my-3 grey lighten-4'>
          <MDBCardImage
            cascade
            className='img-fluid'
            src={mentorShipPic}
          />
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle>
              <MDBIcon icon='code' className='green-text pr-2' />
              <strong> {t('activity_mentorship')}</strong>
            </MDBCardTitle>
            <MDBCardText>
            {t('activity_mentorship_details')}
            </MDBCardText>

            <LocalizedLink
              tag='button'
              to='/advanced'
              color='mdb-color'
              className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
              onClick={this.scrollToTop}
            >
              {t('more')}
            </LocalizedLink>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>

  <MDBRow id='categories'>
    <MDBCol md='6'>
      <MDBAnimation reveal type='fadeInRight'>
        <MDBCard cascade className='my-3 grey lighten-4'>
          <MDBCardImage
            cascade
            className='img-fluid'
            src={arabicPic}
          />
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle>
              <MDBIcon icon='bars' className='pink-text pr-2' />
              <strong> {t('activity_content')}</strong>
            </MDBCardTitle>
            <MDBCardText>
            {t('activity_content_details')}
            </MDBCardText>

            <LocalizedLink
              tag='button'
              to='/navigation'
              color='mdb-color'
              className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
              onClick={this.scrollToTop}
            >
              {t('more')}
            </LocalizedLink>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
    <MDBCol md='6'>
      <MDBAnimation reveal type='fadeInLeft'>
        <MDBCard cascade className='my-3 grey lighten-4'>
          <MDBCardImage
            cascade
            className='img-fluid'
            src={advisoryPic}
          />
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle>
              <MDBIcon icon='bars' className='pink-text pr-2' />
              <strong> {t('activity_advisory')}</strong>
                          </MDBCardTitle>
            <MDBCardText>
            {t('activity_advisory_details')}
            </MDBCardText>

            <LocalizedLink
              tag='button'
              to='/navigation'
              color='mdb-color'
              className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
              onClick={this.scrollToTop}
            >
              {t('more')}
            </LocalizedLink>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>

</MDBRow>


</MDBCol>
</MDBRow>
</section>
    </div>
    );
  }
}

export default ActivityList;
