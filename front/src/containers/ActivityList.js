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

class ActivityList extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <MDBRow>
      <MDBCol md='12' className='mt-4'>
        <h2 className='text-center my-5 font-weight-bold'>
         {t('activity_title')}
        </h2>
 
        <hr className='my-5' />

        <MDBRow id='categories'>
          <MDBCol md='6'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-3 grey lighten-4'>
                <MDBCardImage
                  cascade
                  className='img-fluid'
                  src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                />
                <MDBCardBody cascade className='text-center'>
                  <MDBCardTitle>
                    <MDBIcon
                      icon='css3'
                      brand
                      className='pink-text pr-2'
                    />
                    <strong> {t('activity_webinar')}</strong>
                  </MDBCardTitle>
                  <MDBCardText>
                    Animations, colours, shadows, skins and many {t('more')}!
                    Get to know all our css styles in one place.
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
                  src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                />
                <MDBCardBody cascade className='text-center'>
                  <MDBCardTitle>
                    <MDBIcon icon='code' className='green-text pr-2' />
                    <strong> {t('activity_mentorship')}</strong>
                  </MDBCardTitle>
                  <MDBCardText>
                    Advanced components such as charts, carousels,
                    tooltips and popovers. All in Material Design
                    version.
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
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-3 grey lighten-4'>
                <MDBCardImage
                  cascade
                  className='img-fluid'
                  src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                />
                <MDBCardBody cascade className='text-center'>
                  <MDBCardTitle>
                    <MDBIcon icon='bars' className='pink-text pr-2' />
                    <strong> {t('activity_hack')}</strong>
                  </MDBCardTitle>
                  <MDBCardText>
                    Ready-to-use navigation layouts, navbars,
                    breadcrumbs and much {t('more')}! {t('more')} about our navigation
                    components.
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
            <MDBAnimation reveal type='fadeIn'>
              <MDBCard cascade className='my-3 grey lighten-4'>
                <MDBCardImage
                  cascade
                  className='img-fluid'
                  src='https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                />
                <MDBCardBody cascade className='text-center'>
                  <MDBCardTitle>
                    <MDBIcon icon='edit' className='blue-text pr-2' />
                    <strong> {t('activity_events')}</strong>
                  </MDBCardTitle>
                  <MDBCardText className='mb-4 pb-3'>
                    Inputselecst, date and time pickers. Everything in
                    one place is ready to use!
                  </MDBCardText>

                  <LocalizedLink
                    tag='button'
                    to='/forms'
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
    );
  }
}

export default ActivityList;
