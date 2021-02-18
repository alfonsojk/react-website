import React from 'react';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../HomePage/Data';

function Home() {
    return (
        <>
          <HeroSection {...homeObjOne} />   
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home
