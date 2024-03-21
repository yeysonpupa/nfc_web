import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leadinf-[23px] mr-2"> 
            <span className="text-gradient">Da</span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
        </div>

        <p className="font-poppins font-medium text-[18px] leadinf-[23px]"> 
          <span className="text-gradient">el paso</span>
        </p>
      </div>
    </div>
)

export default GetStarted