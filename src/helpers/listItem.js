const Items = [
  {
    text: "Cotización",
    id: "cotizacion",
    submenu: [
      {
        text: "Crear cotización",
        id: "crear_cotizacion",
        page: "/crear-cotizacion"
      },
      {
        text: "Ver cotizaciones",
        id: "cotizaciones",
        page: "/cotizaciones"
      }
    ],
  },
  {
    text: "Orden de servicio",
    id: "os",
    submenu: [
      {
        text: "Crear orden de servicio",
        id: "crear_orden",
        page: "/crear-orden"
      },
      {
        text: "Ver ordenes de servicio",
        id: "cotizaciones",
        page: "/ordenes-de-servicio"
      }
    ],
  },
  {
    text: "Cuenta de cobro",
    id: "cuenta_cobro",
    submenu: [
      {
        text: "Crear cuenta de cobro",
        id: "crear_cuenta",
        page: "/crear-orden"
      },
      {
        text: "Ver cuenta de cobro",
        id: "cotizaciones",
        page: "/cuentas-de-cobro"
      }
    ],
  },
  { text: 'Clientes', id: 'clientes', page: '/clientes'},
  { text: 'Empleados', id: 'empleados', page: '/empleados'},
  { text: 'Materiales', id: 'materiales', page: '/materiales'},
  { text: 'Analisis de costo', id: 'analisis', page: '/analisis-de-costo'}
]

export default Items
