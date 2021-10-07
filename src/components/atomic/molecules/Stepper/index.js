import * as React from 'react';
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

const Steps = ({ steps }) => (
  <Box sx={{ width: '100%' }}>
    <Stepper activeStep={1} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);


Steps.protoTypes = {
  steps: PropTypes.array
}

Steps.defaultProps = { 
  steps: steps
}

export default Steps