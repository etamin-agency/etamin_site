import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { Snackbar, Alert } from '@mui/material';
import './contact.scss';

import map from "../../assets/img/contact/map.png";
import massage from "../../assets/img/contact/massage.png";
import android from "../../assets/img/contact/android.png";
import social from "../../assets/img/contact/social.png";

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // "success" or "error"

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const name = formData.get('User_name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        if (!name || !email || !message) {
            setSnackbarMessage(t('Please fill in all fields.'));
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        emailjs.sendForm('service_m3jta2g', 'template_yt0mrga', form.current, 'bz_Y8RPbUXzsSepCZ')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setSnackbarMessage(t('Message successfully sent'));
                    setSnackbarSeverity('success');
                    setOpenSnackbar(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSnackbarMessage(t('Failed to send message'));
                    setSnackbarSeverity('error');
                    setOpenSnackbar(true);
                }
            );
    };

    return (
        <div className="contact">
            <div className='contact-title'>
                <h1>{t('contact_title')}</h1>
            </div>
            <div className='contact-group'>
                <div className='contact-us'>
                    <p>{t('contact_title')}</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                            type='text' 
                            name="User_name" 
                            placeholder={t('contact_form_name')} 
                            required 
                        />
                        <input 
                            type='email' 
                            name="email" 
                            placeholder={t('contact_form_email')} 
                            required 
                        />
                        <textarea 
                            name="message" 
                            placeholder={t('contact_form_message')} 
                            rows="5" 
                            required 
                        ></textarea>
                        <button type="submit">{t('contact_form_button')}</button>
                    </form>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Contact;
