import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './componentes/Contato';
import Menu from './componentes/menu';
import Projetos from './componentes/Projetos';
import SobreMim from './componentes/SobreMim';
import Inicio from './componentes/Inicio';


function Rotas() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='/contato' element={<Contato/>} />
        <Route path='/projetos' element={<Projetos/>}/>
        <Route path='/*' element={<Inicio/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
