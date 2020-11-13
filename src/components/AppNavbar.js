import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer
} from "mdbreact";
import logo from '../logo.svg'
// import logo from '../assets/img/arabs_in_bc.png';

import { t } from '../services/i18n'
import { locales } from '../config/i18n'
import LocalizedLink from '../containers/LocalizedLink'

class AppNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false }
    }
    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }
    toggle() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const navStyle = { marginTop: '1rem' };

        return (
            <MDBNavbar color='secondary-color' style={navStyle} dark scrolling expand='md' transparent  fixed='top' className="font-weight-bold py-4 px-2 mb-4 justify-content-center">
                <MDBContainer>


                    <MDBNavbarBrand>
                        <LocalizedLink to="/" className="navbar-brand">
                            {/* <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt={t('app_name')}
                            /> */}

                        </LocalizedLink>
                        <strong className="white-text">  {t('app_name')}</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggle} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">{t('menu_service')}</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">   <LocalizedLink to="/activity" className="navLink">
                                            {t('menu_activity')}
                                        </LocalizedLink></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">   <LocalizedLink to="/contribution" className="navLink">
                                            {t('menu_contribution')}
                                        </LocalizedLink></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">   <LocalizedLink to="/advisory" className="navLink">
                                            {t('menu_advisory')}
                                        </LocalizedLink></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">       <LocalizedLink to="/research" className="navLink">
                                            {t('menu_researchHub')}
                                        </LocalizedLink></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>

                            </MDBNavItem>

                            <MDBNavItem >
                                <LocalizedLink to="/partner" className="nav-link">
                                    {t('menu_partner')}
                                </LocalizedLink>
                            </MDBNavItem>
                            <MDBNavItem active>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">  {t('menu_about')}</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem >     <LocalizedLink to="/about" className="navLink">
                                            {t('menu_about')}
                                        </LocalizedLink></MDBDropdownItem>
                                        <MDBDropdownItem >        <LocalizedLink to="/join" className="navLink">
                                            {t('menu_join')}
                                        </LocalizedLink></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">  <LocalizedLink to="/subscribe" className="navLink">
                                            {t('menu_subscribe')}
                                        </LocalizedLink></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">      <LocalizedLink to="/contact" className="navLink">
                                            {t('menu_contactUs')}
                                        </LocalizedLink></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">     <LocalizedLink to="/press" className="navLink">
                                            {t('menu_press')}
                                        </LocalizedLink></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>

                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBFormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder={t('menu_search-placeholder')} aria-label={t('menu_search')} />
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

                                        {/* {t('language')} */}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        {locales.map(locale => (
                                            <MDBDropdownItem key={locale.code}>

                                                <LocalizedLink

                                                    to={`/${locale.code}`}
                                                    className="dropdown-item"
                                                >
                                                    {locale.name}
                                                </LocalizedLink>
                                            </MDBDropdownItem>
                                        ))}
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <a href='https://www.facebook.com/Arabsinblockchain'>
                                    <MDBIcon fab icon='facebook' className="white-text pr-3"/>
                                </a>
                            </MDBNavItem>

                            <MDBNavItem>
                                <a href='https://twitter.com/ArabsInBC'>
                                    <MDBIcon fab icon='twitter' className="white-text pr-3" />
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='https://discord.gg/DNTc7tjMBr'>
                                    <MDBIcon fab icon='discord' className="white-text pr-3"/>
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='https://www.youtube.com/channel/UC_5orftfcZkLNn5LmIPodAA/ ' >
                                    <MDBIcon fab icon='youtube' className="white-text pr-3" />
                                </a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

        );
    }
}

export default AppNavbar
