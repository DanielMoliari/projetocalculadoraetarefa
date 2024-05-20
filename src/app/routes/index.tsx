import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { Calculadora, Tarefa } from "../pages"

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/calculadora" element={<Calculadora />}/>
                <Route path="/tarefa" element={<Tarefa />}/>
            </Switch>
        </BrowserRouter>
    )
}