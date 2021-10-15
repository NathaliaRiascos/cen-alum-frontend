import { Route, Switch } from 'wouter'
import Cotizacion from 'components/pages/Cotizacion'
import Clientes from 'components/pages/Clientes'
import Materiales from 'components/pages/Materiales'

import Home from 'components/pages/Home'

const Router = () => (
  <Switch>
    <Route path='/cen-alum-frontend' ><Home /></Route>
    <Route path='/crear-cotizacion' >
      <Cotizacion />
    </Route>
    <Route path='/clientes' >
      <Clientes />
    </Route>
    <Route path='/materiales' >
      <Materiales />
    </Route>
  </Switch>
)

export default Router 