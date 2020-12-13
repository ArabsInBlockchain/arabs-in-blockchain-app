import React from 'react'
import {
    MDBFooter  } from 'mdbreact';
    import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation();

  return(
  
    <MDBFooter color='secondary-color'>
    <p className='footer-copyright mb-0 py-3 text-center'>
      &copy; {new Date().getFullYear()}  {t('footer_copyright')} :
      <a href='https://www.MDBootstrap.com'> {t('app_name')} </a>
    </p>

  </MDBFooter>
   
)}