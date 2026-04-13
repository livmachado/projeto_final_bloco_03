import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"
import ListaPostagens from "./components/produtos/listaprodutos/ListaProdutos"
import FormProduto from './components/produtos/formproduto/FormProduto'
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto"

function App() {
  return (
    <>
    <Navbar />
      <div className="flex flex-col min-h-[70vh] pt-24 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListaPostagens />} />
							<Route path="/cadastrarproduto" element={<FormProduto />} />
							<Route path="/editarproduto/:id" element={<FormProduto />} />
							<Route path="/deletarproduto/:id" element={<DeletarProduto />} />
        </Routes>
      </div>
    <Footer />
    </>
  )
}

export default App