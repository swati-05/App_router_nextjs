import {
  Hero,
  Enquiry,
  ImportAndExport,
  WhyFruitzy,
  Contact
} from '../../section/home';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Enquiry />
      <ImportAndExport />
      <WhyFruitzy />
      <Contact />
    </div>
  );
}
