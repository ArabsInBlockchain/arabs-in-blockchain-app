import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Nav,
    Navbar,
    NavItem,
    Collapse,
    DropdownMenu,
    NavbarToggler,
    DropdownToggle,
    UncontrolledDropdown,
} from 'reactstrap'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import logo from '../logo.svg'
import { t } from '../services/i18n'
import { locales } from '../config/i18n'
import LocalizedLink from '../containers/LocalizedLink'

class AppNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false }
    }

    toggle() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        return (
       
            <MDBNavbar color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4" dark expand="md">
            <MDBNavbarBrand>
                          <LocalizedLink to="/" className="navbar-brand">
                              <img
                                  src={logo}
                                  width="30"
                                  height="30"
                                  className="d-inline-block align-top"
                                  alt={t('app_name')}
                              />
      
                          </LocalizedLink>
                          <strong className="white-text">  {t('app_name')}</strong>
                      </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggle} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                <MDBNavItem active>
                    <LocalizedLink to="/home" className="nav-link">
                                      {t('menu_home')}
                    </LocalizedLink>
                 </MDBNavItem>
                <MDBNavItem >
                    <LocalizedLink to="/activity" className="nav-link">
                                      {t('menu_activity')}
                    </LocalizedLink>
                 </MDBNavItem>
                <MDBNavItem >
                    <LocalizedLink to="/contribution" className="nav-link">
                                      {t('menu_contribution')}
                    </LocalizedLink>
                 </MDBNavItem>
                <MDBNavItem >
                    <LocalizedLink to="/advisory" className="nav-link">
                                      {t('menu_advisory')}
                    </LocalizedLink>
                 </MDBNavItem>
                <MDBNavItem >
                    <LocalizedLink to="/partner" className="nav-link">
                                      {t('menu_partner')}
                    </LocalizedLink>
                 </MDBNavItem>
                <MDBNavItem >
                    <LocalizedLink to="/research" className="nav-link">
                                      {t('menu_researchHub')}
                    </LocalizedLink>
                 </MDBNavItem>
  
                 
              
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem >
                              <LocalizedLink to="/press" className="nav-link">
                                      {t('menu_press')}
                                  </LocalizedLink>
                              </MDBNavItem>
                              <MDBNavItem >
                              <LocalizedLink to="/join" className="nav-link">
                                      {t('menu_join')}
                                  </LocalizedLink>
                              </MDBNavItem>
                              <MDBNavItem >
                              <LocalizedLink to="/about" className="nav-link">
                                      {t('menu_about')}
                                  </LocalizedLink>
                              </MDBNavItem>
                              <MDBNavItem >
                              <LocalizedLink to="/subscribe" className="nav-link">
                                      {t('menu_subscribe')}
                                  </LocalizedLink>
                              </MDBNavItem>
                              <MDBNavItem >
                              <LocalizedLink to="/contact" className="nav-link">
                                      {t('menu_contactUs')}
                                  </LocalizedLink>
                              </MDBNavItem>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input className="form-control mr-sm-2" type="text" placeholder=   {t('menu_search-placeholder')} aria-label=   {t('menu_search')} />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                  <MDBNavItem>
                                  <MDBDropdown>
                                      <MDBDropdownToggle nav caret>
      
                                          <span
                                              role="img"
                                              aria-label="globe"
                                              className="globe-icon"
                                          >
                                              🌐
                                      </span>
      
                                          {t('language')}                </MDBDropdownToggle>
                                      <MDBDropdownMenu>
                                          {locales.map(locale => (
                                              <MDBDropdownItem>
      
                                                  <Link
                                                      key={locale.code}
                                                      to={`/${locale.code}`}
                                                      className="dropdown-item"
                                                  >
                                                      {locale.name}
                                                  </Link>
                                              </MDBDropdownItem>
                                          ))}
                                      </MDBDropdownMenu>
                                  </MDBDropdown>
                              </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
       
          );
        }
}

export default AppNavbar
