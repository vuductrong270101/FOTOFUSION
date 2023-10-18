import React from 'react';
import styles from './Layout.module.scss';
import Footer from '../../components/pages/Footer/Footer';
import Header from '../../components/Header/Header';
const MainLayout = ({ children }) => {
    return (
        <div className={styles.mainContainer} >  
            <Header/>
            {children}
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;