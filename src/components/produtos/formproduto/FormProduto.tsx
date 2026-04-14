import { type ChangeEvent, type SyntheticEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader  } from "react-spinners"

import { atualizar, cadastrar, listar } from "../../../services/Service"

import type Categoria from "../../../models/Categoria"
import type Produto from "../../../models/Produto"
import { ToastAlert } from "../../../utils/ToastAlert"

function FormProduto() {
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [categorias, setCategorias] = useState<Categoria[]>([])

	const [categoria, setCategoria] = useState<Categoria>({
		id: 0,
		nome: "",
	})
	const [produto, setProduto] = useState<Produto>({} as Produto)

	const { id } = useParams<{ id: string }>()

	async function buscarProdutoPorId(id: string) {
		try {
			await listar(`/produtos/${id}`, setProduto)
		} catch (error: any) {
			ToastAlert("Erro ao Buscar Produto", 'erro')
			console.error(error)
		}
	}

	async function buscarCategoriaPorId(id: string) {
		try {
			await listar(`/categorias/${id}`, setCategoria)
		} catch (error: any) {
			ToastAlert("Erro ao Buscar Categoria", 'erro')
			console.error(error)
		}
	}

	async function buscarCategorias() {
		try {
			await listar(`/categorias`, setCategorias)
		} catch (error: any) {
			ToastAlert("Erro ao Buscar Categorias", 'erro')
			console.error(error)
		}
	}

	useEffect(() => {
		buscarCategorias()

		if (id !== undefined) {
			buscarProdutoPorId(id)
		}
	}, [id])

	useEffect(() => {
		setProduto({
			...produto,
			categoria: categoria,
		})
	}, [categoria])

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		
        const { type, value, name } = e.target

		let valor: string | number = value

		if (['number', 'range'].includes(type) || (!isNaN(Number(value)) && value !== '')) {
			valor = parseFloat(Number(value).toFixed(2))
		}

		setProduto({
			...produto,
			[name]: valor,
			categoria: categoria,
		})
	}

	function retornar() {
		navigate("/produtos")
	}

	async function gerarNovoProduto(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsLoading(true)

		if (id !== undefined) {
			try {
				await atualizar(`/produtos`, produto, setProduto)

				ToastAlert("Produto atualizado com sucesso", 'sucesso')
			} catch (error: any) {
				ToastAlert("Erro ao atualizar o Produto!", 'erro')
				console.error(error)
			}
		} else {
			try {
				await cadastrar(`/produtos`, produto, setProduto)

				ToastAlert("Produto cadastrado com sucesso", 'sucesso')
			} catch (error: any) {
				ToastAlert("Erro ao cadastrar o Produto!", 'erro')
				console.error(error)
			}
		}

		setIsLoading(false)
		retornar()
	}

	return (
        <div className="w-full flex justify-center">

            <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 md:p-10">

                <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-6">
                    {id !== undefined ? "Editar Produto" : "Novo Produto"}
                </h1>

                <form
                    className="flex flex-col gap-5"
                    onSubmit={gerarNovoProduto}
                >

                    {/* Nome */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nome" className="text-sm font-semibold text-slate-600">
                            Nome do Produto
                        </label>
                        <input
                            value={produto.nome}
                            onChange={atualizarEstado}
                            type="text"
                            name="nome"
                            id="nome"
                            required
                            placeholder="Ex: Dipirona 500mg"
                            className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>

                    {/* Preço */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="preco" className="text-sm font-semibold text-slate-600">
                            Preço
                        </label>
                        <input
                            value={produto.preco === 0 || produto.preco === undefined ? "" : produto.preco}
                            onChange={atualizarEstado}
                            type="number"
                            step=".01"
                            name="preco"
                            id="preco"
                            required
                            placeholder="R$ 0,00"
                            className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>

                    {/* Foto */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="foto" className="text-sm font-semibold text-slate-600">
                            URL da Foto
                        </label>
                        <input
                            value={produto.foto}
                            onChange={atualizarEstado}
                            type="text"
                            name="foto"
                            id="foto"
                            required
                            placeholder="https://imagem.com/produto.png"
                            className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>

                    {/* Categoria */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="categoria" className="text-sm font-semibold text-slate-600">
                            Categoria
                        </label>
                        <select
                            name="categoria"
                            id="categoria"
                            value={categoria.id !== 0 ? categoria.id : ""}
                            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                            className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                        >
                            <option value="" disabled>Selecione uma categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl flex justify-center items-center transition-all hover:scale-[1.02]"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>{id === undefined ? "Cadastrar Produto" : "Atualizar Produto"}</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormProduto