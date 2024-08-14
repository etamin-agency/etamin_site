import React from 'react';
import { useTranslation } from 'react-i18next';
import slide1 from "../../assets/img/servic/slide1.png";
import slide2 from "../../assets/img/servic/slide2.png";
import slide3 from "../../assets/img/servic/slide3.png";
import slide4 from "../../assets/img/servic/slide4.png";
import slide5 from "../../assets/img/servic/slide5.png";
import slide6 from "../../assets/img/servic/slide6.png";
import slide7 from "../../assets/img/servic/slide7.png";
import slide8 from "../../assets/img/servic/slide8.png";
import slide9 from "../../assets/img/servic/slide9.png";
import slide10 from "../../assets/img/servic/slide10.png";
import slide11 from "../../assets/img/servic/slide11.png";
import './Product.scss';

const images = [
  slide1, slide2, slide3, slide4, slide5, 
  slide6, slide7, slide8, slide9, slide10, slide11
];

const ProductBlock = () => {
  const { t } = useTranslation();

  return (
    <div className="ProductBlock">
      <div className='Product-title'>
        <h2>{t('product.title')}</h2>
        <h1>{t('product.main_title')}</h1>
      </div>
      <div className='Product-items'>
        {images.map((img, index) => (
          <div className={`product-item Product-item${index + 1}`} key={index}>
            <img src={img} alt={`Product ${index + 1}`} className="product-image" />
            <div className="dark-overlay"></div>
            <div className="overlay"></div>
            <div className="content">
              <h2>{t(`product.items.${index}.title`)}</h2>
              <h3>{t(`product.items.${index}.subtitle`)}</h3>
              <p>{t(`product.items.${index}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductBlock;
