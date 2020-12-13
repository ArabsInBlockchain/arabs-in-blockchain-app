import React, { Component } from 'react'
import { Link , BrowserRouter as Router } from 'react-router-dom'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer
} from "mdbreact";
// import logo from '../logo.svg'
// import logo from '../assets/img/arabs_in_bc.png';

import { withTranslation } from 'react-i18next';
import { locales } from '../config/i18n'
 
class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false }
    }
     changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng)
        document.dir =this.props.i18n.dir()

      };
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
        console.log(this.props, 'this.props');
        const { t } = this.props;

        return (
            <Router>
            <MDBNavbar color='secondary-color' style={navStyle} dark scrolling expand='md' transparent  fixed='top' className="font-weight-bold py-4 px-2 mb-4 justify-content-center">
                <MDBContainer>


                    <MDBNavbarBrand>
                        <Link to="/" className="navbar-brand">
                            {/* <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt={t('app_name')}
                            /> */}

                        </Link>
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
                                        <MDBDropdownItem href="#!">   <Link to="/activity" className="navLink">
                                            {t('menu_activity')}
                                        </Link></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">   <Link to="/contribution" className="navLink">
                                            {t('menu_contribution')}
                                        </Link></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">   <Link to="/advisory" className="navLink">
                                            {t('menu_advisory')}
                                        </Link></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">       <Link to="/research" className="navLink">
                                            {t('menu_researchHub')}
                                        </Link></MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>

                            </MDBNavItem>

                            <MDBNavItem >
                                <Link to="/partner" className="nav-link">
                                    {t('menu_partner')}
                                </Link>
                            </MDBNavItem>
                            <MDBNavItem active>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">  {t('menu_about')}</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem >     <Link to="/about" className="navLink">
                                            {t('menu_about')}
                                        </Link></MDBDropdownItem>
                                        <MDBDropdownItem >        <Link to="/join" className="navLink">
                                            {t('menu_join')}
                                        </Link></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">  <Link to="/subscribe" className="navLink">
                                            {t('menu_subscribe')}
                                        </Link></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">      <Link to="/contact" className="navLink">
                                            {t('menu_contactUs')}
                                        </Link></MDBDropdownItem>
                                        <MDBDropdownItem href="#!">     <Link to="/press" className="navLink">
                                            {t('menu_press')}
                                        </Link></MDBDropdownItem>
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
                  <MDBDropdownItem key={locale.code} onClick={() => this.changeLanguage(locale.code)}>
                    {locale.name}

                  </MDBDropdownItem>
                ))}
                                        
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <a href='https://www.facebook.com/Arabsinblockchain'    target="_blank">
                                    <MDBIcon fab icon='facebook' className="white-text pr-3"/>
                                </a>
                            </MDBNavItem>

                            <MDBNavItem>
                                <a href='https://twitter.com/ArabsInBC'   target="_blank"  >
                                    <MDBIcon fab icon='twitter' className="white-text pr-3" />
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='https://medium.com/arabs-in-blockchain'   target="_blank"  >
                                    <MDBIcon fab icon='medium' className="white-text pr-3" />
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='https://discord.gg/DNTc7tjMBr'    target="_blank">
                                    <MDBIcon fab icon='discord' className="white-text pr-3"/>
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='https://www.youtube.com/channel/UC_5orftfcZkLNn5LmIPodAA/ '   target="_blank" >
                                    <MDBIcon fab icon='youtube' className="white-text pr-3" />
                                </a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            </Router>
        );
    }
}

const AppNavbar = withTranslation()(Navbar)
export default AppNavbar
