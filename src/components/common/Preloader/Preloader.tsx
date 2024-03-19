import preloader from '../../../assets/images/loader.svg';
import React from 'react';

export const Preloader = (props: any) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt="load..."/>
    </div>
}