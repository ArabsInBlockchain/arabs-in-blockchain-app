import React from 'react'
import {
    MDBFooter  } from 'mdbreact';
import { t } from '../services/i18n'

export default () => (
    <MDBFooter color='blue-gradient'>
    <p className='footer-copyright mb-0 py-3 text-center'>
      &copy; {new Date().getFullYear()}  {t('footer_copyright')} :
      <a href='https://www.MDBootstrap.com'> {t('app_name')} </a>
    </p>

  </MDBFooter>
   
)