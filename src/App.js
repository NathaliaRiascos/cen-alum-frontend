import { container } from 'components/templates/Container.module.css'
import Menu from 'components/atomic/organisms/Menu'
import Router from 'router'
    
function App() {
  return (
    <div className={container}>
      <Menu />
      <Router />
    </div>
  );
}

export default App;
