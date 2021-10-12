import React from "react"
import LayoutSteps from "components/layouts/LayoutSteps.js"
import Stepper from "components/atomic/molecules/Stepper"

const Steps = ({ steps, step, contents, modifiers }) => (
  <LayoutSteps
    header={<Stepper steps={steps} step={step} />}
    content={contents[step]? <>{contents[step]}</>: <>{contents[step-1]}</>}
    footer={modifiers}
  />
)

export default Steps
