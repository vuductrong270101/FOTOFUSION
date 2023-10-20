import React from 'react';
import './Header.scss'
import IconLocation from '../../assets/icon/ic-location';
import IcInsta from '../../assets/icon/ic-ins';
import IcFb from '../../assets/icon/ic-fb';
import IcPinterest from './../../assets/icon/ic-pinterest';
import IcTwiter from '../../assets/icon/ic-twiter';
import IcLogo from '../../assets/logo/IcLogo';
import IconCollapse from '../../assets/icon/ic-collapse';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='headerMain' >
            <div className='headerTop'>
                <div className='headerTopContent'>
                    <div className='headerTopContainer'>
                        <div className='headerTopLeft'>
                            <IconLocation/>
                            <span>254 Nguyen Van Linh, Hai Chau, DaNang</span>
                            <IconLocation/>
                            <span>FotoFusion@gmail.com</span>
                        </div>
                        <div className='headerTopRight'>
                            <IcInsta size={18} />
                            <IcFb />
                            <IcTwiter/>
                            <IcPinterest />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='headerContainer'>
                <div className='headerMenu'>
                    <div className='headerLogo'>
                        <IcLogo />
                        <span>FutoFusion</span>
                    </div>
                    <div className='headerMenuRight'>
                        <div className='headerMenuContainer'>
                                <Link to='/home'  className='itemMenu'>
                                    Home
                                </Link>
                                <Link to='/albums'  className='itemMenu'>
                                    Album
                                </Link>
                                <Link to='/Pages'  className='itemMenu'>
                                    Pages
                                <IconCollapse/>
                                </Link>
                                <Link  to='/services'   className='itemMenu'>
                                    Services
                                </Link>
                                <Link to='/blog'  className='itemMenu'>
                                    Blog
                                </Link>
                                <Link to='/contact'   className='itemMenu'>
                                    Contact
                                </Link>
                                <Link to='/login'  className='itemMenu' >
                                    Login
                                </Link>
                            </div>
                            <div className='headerMenuBooking'>
                                <button>
                                    Booking
                                </button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Header;