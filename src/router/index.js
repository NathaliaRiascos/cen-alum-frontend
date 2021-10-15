import { Route, Switch } from 'wouter'
import Cotizacion from 'components/pages/Cotizacion'
import Clientes from 'components/pages/Clientes'
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
  </Switch>
)

export default Router 