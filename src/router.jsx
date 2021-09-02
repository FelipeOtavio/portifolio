import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Sobre} from './pages/Sobre'
import {Fotos} from './pages/Fotos'
import {Contato} from './pages/Contato'

import { Header, Footer } from './components/Main'

export const Router = () => {
    return(
        <BrowserRouter>
            <Header>
            </Header>
            
            <Switch>
                <Route path={['/','/home']} exact component={Home}></Route>
                <Route path='/sobre' component={Sobre}></Route>
                <Route path='/fotos' component={Fotos}></Route>
                <Route path='/contato' component={Contato}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}