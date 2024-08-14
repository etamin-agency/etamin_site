import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import Search from '../../assets/img/solution/Search.png'
import Branding from '../../assets/img/solution/Branding.png'
import Cloud from '../../assets/img/solution/Search.png'
import Content from '../../assets/img/solution/Content.png'
import Data from '../../assets/img/solution/Data.png'
import Design from '../../assets/img/solution/Design.png'
import Digital from '../../assets/img/solution/Digital.png'
import Email from '../../assets/img/solution/Email.png'
import Media from '../../assets/img/solution/Media.png'

import './SolutionPage.scss';

const Solution = () => {
    
    const { t } = useTranslation();
    return (
        <div className="SolutionPage">
           <div className='Solution-text'>
            <h1>{t('solution_title')}</h1>
            <h2>{t('solution_subtitle')}</h2>
           </div>
          
           <div className='Solution-item'>
           <div className='Solution-items'>
                <img src={Search} alt={t('solution_1')}/>
                <p>{t('solution_1')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Media} alt={t('solution_2')}/>
                <p>{t('solution_2')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Data} alt={t('solution_3')}/>
                <p>{t('solution_3')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Design} alt={t('solution_4')}/>
                <p>{t('solution_4')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Digital} alt={t('solution_5')}/>
                <p>{t('solution_5')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Content} alt={t('solution_6')}/>
                <p>{t('solution_6')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Email} alt={t('solution_7')}/>
                <p>{t('solution_7')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Media} alt={t('solution_8')}/>
                <p>{t('solution_8')}</p>
            </div>
            <div className='Solution-items'>
                <img src={Branding} alt={t('solution_9')}/>
                <p>{t('solution_9')}</p>
            </div>
           </div>
           
           
          
        </div>
    );
};

export default Solution;
