import React from 'react';
import styles from './Layout.module.scss';
import Header from './../../pages/Header/Header';
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