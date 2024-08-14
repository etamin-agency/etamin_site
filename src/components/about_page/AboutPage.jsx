import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.scss';
import Squid_img from "../../assets/img/oktopus.png";

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className="AboutPage">
            <div className='About-text'>
                <h1>{t('about_title')}</h1>
                <p>{t('about_description')}</p>
            </div>
            <div className='About-wrapper'>
                <div className='About-wrapper-text'>
                    <h1>{t('about_company_title')}</h1>
                    <p>{t('about_company_description_1')}</p>
                    <p>{t('about_company_description_2')}</p>
                    <p>{t('about_company_description_3')}</p>
                </div>
                <img src={Squid_img} alt={t('about_company_title')} />
            </div>
        </div>
    );
};

export default AboutPage;
