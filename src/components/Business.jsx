import React from 'react';
import { servicios } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== servicios.length - 1} ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue bg-opacity-30`}>
      <img
      src={icon}
      alt="icon"
      className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-dark text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dark text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="servicios" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-dark`}>Potenciando el Éxito del<br className="sm:block hidden"/> Cafetero Colombiano</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify text-dark `}>La Federación Nacional del Café (NCF) ofrece una amplia gama de servicios diseñados para apoyar a los productores de café colombianos en cada etapa de su proceso.</p>

          <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {servicios.map((feature, index) => (
          <FeatureCard
          key={feature.id} {...feature}
          index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business