import React from 'react';
import './Header.scss'
import IconLocation from '../../assets/icon/ic-location';
import IcInsta from '../../assets/icon/ic-ins';
import IcFb from '../../assets/icon/ic-fb';
import IcPinterest from './../../assets/icon/ic-pinterest';
import IcTwiter from '../../assets/icon/ic-twiter';
import IcLogo from '../../assets/logo/IcLogo';
import IconCollapse from '../../assets/icon/ic-collapse';
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
                                <div className='itemMenu'>
                                    Home
                                </div>
                                <div className='itemMenu'>
                                    Album
                                </div>
                                <div className='itemMenu'>
                                Pages
                                <IconCollapse/>
                                </div>
                                <div className='itemMenu'>
                                    Services
                                </div>
                                <div className='itemMenu'>
                                    Blog
                                </div>
                                <div className='itemMenu'>
                                    Contact
                                </div>
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