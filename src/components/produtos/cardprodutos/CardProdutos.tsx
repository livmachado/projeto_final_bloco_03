import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'

interface CardProdutoProps {
	produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

	return (
		<div className="bg-white border border-stone-200 rounded-2xl overflow-hidden cursor-pointer hover:border-emerald-400 hover:-translate-y-1 transition-all group flex flex-col h-full">
			<div className="flex items-end justify-end pt-2 pr-2">
				<Link to={`/editarproduto/${produto.id}`}>
					<PencilIcon
						size={24}
						className="mr-1 hover:fill-emerald-600"
					/>
				</Link>

				<Link to={`/deletarproduto/${produto.id}`}>
					<TrashIcon
						size={24}
						className="mr-1 hover:fill-red-700"
					/>
				</Link>
			</div>

			<div className="py-4 flex flex-col grow">
				<img
					src={produto.foto}
					className="mx-auto mt-1 h-44 max-w-75"
					alt={produto.nome}
				/>

				<div className="p-4">
					<p className="text-sm text-center uppercase wrap-break-word line-clamp-2 min-h-10">
						{produto.nome}
					</p>
					<h3 className="text-xl font-bold text-center uppercase">
						{Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(produto.preco)}
					</h3>
					<p className="text-sm italic text-center">
						Categoria: {produto.categoria?.nome}
					</p>
				</div>
			</div>
			<div className="mt-auto">
				<button
					className="flex items-center justify-center w-full py-2 text-white bg-teal-600 hover:bg-teal-900"
				>
					Comprar
				</button>
			</div>
		</div>
	)
}

export default CardProduto