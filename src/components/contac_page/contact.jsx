import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact.scss';

import map from "../../assets/img/contact/map.png";
import massage from "../../assets/img/contact/massage.png";
import android from "../../assets/img/contact/android.png";
import social from "../../assets/img/contact/social.png";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact">
            <div className='contact-title'>
                <h1>{t('contact_title')}</h1>
                {/* <p>{t('contact_description')}</p> */}
            </div>
            <div className='contact-group'>
                <div className='contact-us'>
                    <p>{t('contact_title')}</p>
                    <input type='text' placeholder={t('contact_form_name')} />
                    <input type='text' placeholder={t('contact_form_email')} />
                    <textarea name="message" placeholder={t('contact_form_message')} rows="5" required></textarea>
                    <button>{t('contact_form_button')}</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
