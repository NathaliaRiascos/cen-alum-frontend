import { Route, Switch } from 'wouter'
import Cotizacion from 'components/pages/Cotizacion'
import Home from 'components/pages/Home'

const Router = () => (
  <Switch>
    <Route path='/cen-alum-frontend' ><Home /></Route>
    <Route path='/crear-cotizacion' >
      <Cotizacion />
    </Route>
  </Switch>
)

export default Router 