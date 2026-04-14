import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"

//service
import { deletar, listar } from "../../../services/Service"

//model
import type Produto from "../../../models/Produto"
import { ToastAlert } from "../../../utils/ToastAlert"


function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            ToastAlert('Produto não encontrado!', 'erro')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)

           ToastAlert('Produto apagado!', 'sucesso')

        } catch (error) {
           ToastAlert('Erro ao apagar o produto', 'erro')
           console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

return (
	<div className="flex items-center justify-center min-h-[80vh] px-4">

		<div className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden bg-white">

			<div className="bg-linear-to-r from-red-600 to-red-400 text-white text-center py-5">
				<h1 className="text-2xl font-bold">Excluir Produto</h1>
			</div>

			{/* Conteúdo */}
			<div className="p-6 flex flex-col items-center text-center gap-4">

				<p className="text-gray-600">
					Tem certeza que deseja deletar este produto?
				</p>

				{/* Card do produto */}
				<div className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col gap-2">

					<p className="text-lg font-semibold text-gray-800 wrap-break-word">
						{produto.nome}
					</p>

					<p className="text-emerald-600 font-bold text-lg">
						{Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(produto.preco)}
					</p>

					<span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full w-fit mx-auto">
						{produto.categoria?.nome}
					</span>

				</div>
			</div>

			{/* Ações */}
			<div className="flex gap-2 p-4">

				<button
					className="w-full py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition"
					onClick={retornar}
				>
					Cancelar
				</button>

				<button
					className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold flex items-center justify-center gap-2 transition hover:scale-[1.02]"
					onClick={deletarProduto}
				>
					{isLoading ? (
						<ClipLoader color="#ffffff" size={20} />
					) : (
						<>
							Deletar
						</>
					)}
				</button>

			</div>

		</div>
	</div>
)
}
export default DeletarProduto
