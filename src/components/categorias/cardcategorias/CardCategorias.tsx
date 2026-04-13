import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex flex-col justify-between mt-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      <header className="bg-emerald-800 text-white font-semibold text-lg px-6 py-3">
        Categoria
      </header>

      <div className="flex items-center justify-center bg-white py-10 px-4">
        <p className="text-2xl font-medium text-gray-800 text-center">
          {categoria.nome}
        </p>
      </div>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center py-3 transition"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center py-3 transition"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}
export default CardCategorias;