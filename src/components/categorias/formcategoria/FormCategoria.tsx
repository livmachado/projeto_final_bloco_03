import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { ToastAlert } from "../../../utils/ToastAlert";

function FormCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      ToastAlert('Categoria não encontrada!', 'erro')
      console.error(error)
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)

        ToastAlert('Categoria atualizado com sucesso', 'sucesso')

      } catch (error: any) {
        ToastAlert('Erro ao atualizar o Categoria', 'erro')
        console.error(error)
      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)

        ToastAlert('Categoria cadastrada com sucesso', 'Sucesso')

      } catch (error: any) {
        ToastAlert('Erro ao cadastrar a Categoria', 'erro')
        console.error(error)
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-linear-to-r from-emerald-700 to-emerald-500 text-white text-center py-5">
          <h1 className="text-2xl font-bold">
            {id === undefined ? 'Nova Categoria' : 'Editar Categoria'}
          </h1>
          <p className="text-sm opacity-90">
            Organize melhor seus produtos
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={gerarNovaCategoria}
          className="p-6 flex flex-col gap-5"
        >

          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-sm font-semibold text-slate-600">
              Nome da Categoria
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex: Medicamentos"
              required
              value={categoria.nome}
              onChange={atualizarEstado}
              className="p-3 border border-slate-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white 
            font-semibold py-3 rounded-xl flex justify-center items-center 
            transition-all hover:scale-[1.02]"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              <span>
                {id === undefined ? 'Cadastrar Categoria' : 'Atualizar Categoria'}
              </span>
            )}
          </button>

        </form>
      </div>
    </div>
  )
}

export default FormCategoria;