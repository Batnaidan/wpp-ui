import { useState } from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

export default function Bider() {
  const stepLevel = [
    'Хувийн мэдээлэл',
    'Туршлага, ур чадвар',
    'Баталгаажуулалт',
  ];
  const [formLevel, changeFormLevel] = useState(0);

  return (
    <div>
      <Stepper activeStep={formLevel} alternativeLabel>
        {stepLevel.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
