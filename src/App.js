import { container, contenido } from "components/templates/Container.module.css"
import Menu from "components/atomic/organisms/Menu"
import Router from "router"
import ClienteProvider from "components/context/ClientContext"
import EmployeeProvider from "components/context/EmployeeContext"
import AnalisysProvider from "components/context/AnalisysContext"
import MaterialProvider from "components/context/MaterialContext"
import ProductProvider from "components/context/ProductContext"
import DescriptionProvider from "components/context/DescriptionContext"
import ExpensesProvider from "components/context/OtherExpensesContext"

function App() {
  return (
    <div className={container}>
      <Menu />
      <EmployeeProvider>
        <ClienteProvider>
          <MaterialProvider>
            <ProductProvider>
              <DescriptionProvider>
                <ExpensesProvider>
                  <AnalisysProvider>
                    <div className={contenido}>
                      <Router />
                    </div>
                  </AnalisysProvider>
                </ExpensesProvider>
              </DescriptionProvider>
            </ProductProvider>
          </MaterialProvider>
        </ClienteProvider>
      </EmployeeProvider>
    </div>
  )
}

export default App
