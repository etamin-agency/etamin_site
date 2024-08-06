// MyGoogleMap.js
import React from 'react';

const MyGoogleMap = () => {
  return (
    <div style={{ width: '470px', height: '247px', borderRadius: '10px', overflow: 'hidden' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.7094722650027!2d71.64426209603795!3d41.00551861419959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bd7b94ccc03%3A0xe2b70513d38ef922!2sETAMIN!5e1!3m2!1suz!2s!4v1721316605690!5m2!1suz!2s"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      {/* <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/org/etamin/103941920196/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Etamin</a><a href="https://yandex.uz/maps/21314/namangan/category/it_company/184106174/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">IT-kompaniya  Namanganda</a><a href="https://yandex.uz/maps/21314/namangan/category/software_companies/184105776/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Dasturiy ta’minot  Namanganda</a><iframe src="https://yandex.uz/map-widget/v1/?ll=71.659417%2C41.001946&mode=search&oid=103941920196&ol=biz&sctx=ZAAAAAgBEAAaKAoSCVORCmML61FAEXy5T44CgERAEhIJJGO1%2BX8dJ0ARyXGndLBOFEAiBgABAgMEBSgKOABAwqYBSAFiS3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfd29ybGRfZm9ybXVsYT0wLjc6bDNfcmVsZXZfZGM1MjkzMjNfZXhwX2Jvb3N0XzFfMmJKcmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9tYXBzX2Zvcm11bGE9MC42OmwzX3JlbGV2X2RjNTI5MzIzX2V4cF9ib29zdF8xXzJqAnV6nQHNzEw9oAEAqAEAvQHJ4do9wgEGxKuvm4MDggIGZXRhbWluigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=71.659417%2C41.001946&sspn=0.003024%2C0.001328&text=etamin&utm_source=share&z=18.9" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div> */}
    </div>
  );
};

export default MyGoogleMap;
