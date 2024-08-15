import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './languageSwitcher.scss';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        setCurrentLanguage(lng);
        i18n.changeLanguage(lng);
    };

    return (
        <div className="LanguageSwitcher">
            {currentLanguage === 'en' && <div onClick={() => changeLanguage('uz')}>EN</div>}
            {currentLanguage === 'uz' && <div onClick={() => changeLanguage('ru')}>O'Z</div>}
            {currentLanguage === 'ru' && <div onClick={() => changeLanguage('en')}>RU</div>}
        </div>
    );
};

export default LanguageSwitcher;
