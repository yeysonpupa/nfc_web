import React from 'react';
import { bill } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section
    className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Nuestra Misión:<br className="sm:block hidden"/> Las Personas</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>Nuestra misión es promover la excelencia en la producción, comercialización y consumo del café colombiano, a través de la innovación tecnológica, la sostenibilidad ambiental y el desarrollo socioeconómico de las comunidades caficultoras.
        </p>
      </div>
    </section>
  )
}

export default Billing