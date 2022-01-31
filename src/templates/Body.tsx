import AnySituationSection from 'components/organisms/AnySituationSection/AnySituationSection';
import ChooseVisionSection from 'components/organisms/ChooseVisionSection/ChooseVisionSection';
import Products from 'components/organisms/Products/Products';
import Testimonies from 'components/organisms/Testimonies/Testimonies';
import React from 'react';
import { Spacer } from 'components/atoms/Spacer/Spacer';
import AdvandedTechnology from 'components/organisms/AdvandedTechnology/AdvandedTechnology';
import CarouselComponent from 'components/organisms/Caroussel/Caroussel';
import MostTechnology from 'components/organisms/MostTechnology/MostTechnology';

const Body: React.FC = () => {
  return (
    <React.Fragment>
      <Spacer direction='vertical' size='xLarge' />
      <MostTechnology />
      <Spacer direction='vertical' size='xSmall' />
      <AdvandedTechnology />
      <CarouselComponent />
      <Spacer direction='vertical' size='large' />
      <AnySituationSection />
      <ChooseVisionSection />
      <Testimonies />
      <Products />
    </React.Fragment>
  );
};

export default Body;
