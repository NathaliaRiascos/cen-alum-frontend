import { Route, Switch } from 'wouter'
import Cotizacion from 'components/pages/Cotizacion'

const Router = () => (
  <Switch>
    <Route path='/crear-cotizacion/' >
      <Cotizacion />
    </Route>
  </Switch>
)

export default Router 