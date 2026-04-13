import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader  } from "react-spinners"
import type Categoria from "../../../models/Categoria"
import { deletar, listar } from "../../../services/Service"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Tema não encontrado!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a categoria')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="flex items-center justify-center min-h-[70vh] px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className="bg-linear-to-r from-red-600 to-red-400 text-white text-center py-4">
                <h1 className="text-2xl font-bold">Deletar Categoria</h1>
            </div>

            <div className="p-6 text-center">
                <p className="text-gray-600 mb-4">
                Tem certeza que deseja apagar esta categoria?
                </p>

                <div className="bg-gray-100 rounded-xl py-6">
                <p className="text-xl font-semibold text-gray-800">
                    {categoria.nome}
                </p>
                </div>
            </div>

            <div className="flex">
                <button
                className="w-full py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 transition"
                onClick={retornar}
                >
                Cancelar
                </button>

                <button
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition cursor-pointer"
                onClick={deletarCategoria}
                >
                {isLoading ? (
                    <ClipLoader
                            color="#ffffff"
                            size={24}
                    />
                ) : (
                    "Deletar"
                )}
                </button>
            </div>
            </div>
        </div>
        )
}
export default DeletarCategoria