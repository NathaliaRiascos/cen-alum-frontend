import { container, contenido } from 'components/templates/Container.module.css'
import Menu from 'components/atomic/organisms/Menu'
import Router from 'router'
    
function App() {
  return (
    <div className={container}>
      <Menu />
      <div className={contenido}>
        <Router/>
      </div>
    </div>
  );
}

export default App;
