import { container, contenido } from "components/templates/Container.module.css"
import Menu from "components/atomic/organisms/Menu"
import Router from "router"
import ClienteProvider from "components/context/ClientContext"
import EmployeeProvider from "components/context/EmployeeContext"
import AnalisysProvider from "components/context/AnalisysContext"
import MaterialProvider from "components/context/MaterialContext"
import ProductProvider from "components/context/ProductContext"
import DescriptionProvider from "components/context/DescriptionContext"

function App() {
  return (
    <div className={container}>
      <Menu />
      <EmployeeProvider>
        <ClienteProvider>
          <AnalisysProvider>
            <MaterialProvider>
              <ProductProvider>
                <DescriptionProvider>
                  <div className={contenido}>
                    <Router />
                  </div>
                </DescriptionProvider>
              </ProductProvider>
            </MaterialProvider>
          </AnalisysProvider>
        </ClienteProvider>
      </EmployeeProvider>
    </div>
  )
}

export default App
