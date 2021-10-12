import Steps from "components/templates/Steps"
import Button from "components/atomic/atoms/Button"

import { useCounter } from "components/hooks/useCounter"

export const useStepper = (steps, contents, needFooter) => {
  const totalSteps = steps.length
  const { value, handleDis, handleAdd } = useCounter(0, totalSteps)

  const ComponentSteps = () => (
    <Steps
      steps={steps}
      step={value}
      contents={contents}
      modifiers={
        needFooter ? (
          <>
            <BtnBack />,
            <BtnNext />
          </>
        ) : null
      }
    />
  )

  const BtnBack = () => (
    <Button type='secondary' onClick={handleDis}>
      Atrás
    </Button>
  )

  const BtnNext = () => (
    (value + 1 < totalSteps) ? (
      <Button type='primary' onClick={handleAdd}>
        Siguiente
      </Button>
    ): 
      <Button type='primary' onClick={handleAdd}>
        Guardar
      </Button>
  )

  return {
    ComponentSteps,
    BtnBack,
    BtnNext,
  }
}
