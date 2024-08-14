import React from 'react';

const MyGoogleMap = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=71.659417%2C41.001946&mode=search&oid=103941920196&ol=biz&sctx=ZAAAAAgBEAAaKAoSCVORCmML61FAEXy5T44CgERAEhIJJGO1%2BX8dJ0ARyXGndLBOFEAiBgABAgMEBSgKOABAwqYBSAFiS3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfd29ybGRfZm9ybXVsYT0wLjc6bDNfcmVsZXZfZGM1MjkzMjNfZXhwX2Jvb3N0XzFfMmJKcmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9tYXBzX2Zvcm11bGE9MC42OmwzX3JlbGV2X2RjNTI5MzIzX2V4cF9ib29zdF8xXzJqAnV6nQHNzEw9oAEAqAEAvQHJ4do9wgEGxKuvm4MDggIGZXRhbWluigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=71.659417%2C41.001946&sspn=0.003024%2C0.001328&text=etamin&utm_source=share&z=18.9"
        width="100%"
        height="100%"
        style={styles.iframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yandex Map"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    width: '460px',
    height: '257px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  iframe: {
    border: 0,
    borderRadius: '10px',
  },
  '@media (max-width: 480px)': {
    container: {
      width: '400px',
      height: '200px', // Adjust height as needed
    },
    iframe: {
      width: '400px',
      height: '200px',
    },
  },
};

export default MyGoogleMap;
