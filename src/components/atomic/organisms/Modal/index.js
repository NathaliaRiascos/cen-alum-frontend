import * as React from "react"
import { Modal } from "antd"
import PropTypes from 'prop-types'
import Button from "components/atomic/atoms/Button"
import FormCliente from "../Form/Client"
import FormProducto from "../Form/Product"
import FormGasto from "../Form/Expenses"
import FormEpleado from "../Form/Employee"
import FormMaterial from "../Form/Material"

const BasicModal = ({
  active,
  toggle,
  modalFor,
  boton,
  activarBoton,
  analisis,
  setAnalisis,
}) => (
  <Modal
    title={`Agregar ${modalFor}`}
    visible={active}
    onOk={toggle}
    onCancel={toggle}
    footer={[
      <Button key='cancel' type='secondary'>
        Cancelar
      </Button>,
      <Button key='save' type='primary' onClick={activarBoton}>
        Agregar
      </Button>,
    ]}
  >
    {modalFor === "cliente" ? (
      <FormCliente
        boton={boton}
        activarBoton={activarBoton}
        analisis={analisis}
        setAnalisis={setAnalisis}
      />
    ) : modalFor === "empleado" ? (
      <FormEpleado
        boton={boton}
        activarBoton={activarBoton}
        analisis={analisis}
        setAnalisis={setAnalisis}
      />
    ) : modalFor === "producto" ? (
      <FormProducto
        boton={boton}
        activarBoton={activarBoton}
        analisis={analisis}
        setAnalisis={setAnalisis}
      />
    ) : modalFor === "material" ? (
      <FormMaterial
        boton={boton}
        activarBoton={activarBoton}
        analisis={analisis}
        setAnalisis={setAnalisis}
      />
    ) : (
      <FormGasto
        boton={boton}
        activarBoton={activarBoton}
        analisis={analisis}
        setAnalisis={setAnalisis}
      />
    )}
  </Modal>
)

BasicModal.propTypes = {
  analisis: PropTypes.object,
  setAnalisis: PropTypes.func,
  active: PropTypes.bool,
  toggle: PropTypes.func,
  modalFor: PropTypes.string,
  boton: PropTypes.bool,
  activarBoton: PropTypes.func
}


export default BasicModal
