import * as React from 'react';
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { container_steps } from 'components/templates/Container.module.css'
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

const Steps = ({ steps, step }) => (
  <div className={container_steps}>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  </div>
);


Steps.propTypes = {
  steps: PropTypes.array,
  step: PropTypes.number
}

Steps.defaultProps = { 
  steps: steps,
  step: 0
}

export default Steps