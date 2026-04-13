import { Link } from "react-router-dom";
import farmaciaImg from "../../assets/farmacia.png";
import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalpostagem/ModalProduto";

function Home() {
	return (
		<div className="flex flex-col items-center min-h-[80vh] px-4 gap-8">
			
			<div className="grid grid-cols-1 md:grid-cols-2 
				bg-linear-to-br from-emerald-900 to-emerald-500 
				w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl">

				<div className="flex flex-col justify-center p-8 md:p-12 text-white gap-6">
					
					<h2 className="text-4xl md:text-6xl font-bold leading-tight">
						Saúde com <br />
						<span className="text-emerald-300">cuidado</span> e agilidade
					</h2>

					<p className="text-white/80 text-base md:text-lg max-w-md">
						Medicamentos, vitaminas e produtos de saúde entregues na sua casa. 
						Farmácia completa online.
					</p>

					<div className="flex gap-4 mt-4">
						<Link to='/produtos' className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
							Ver Produtos
						</Link>
						<ModalProduto />

					</div>
				</div>

				<div className="hidden md:flex items-center justify-center p-6">
					<img
						src={farmaciaImg}
						alt="Farmácia"
						className="w-full max-w-md object-contain"
					/>
				</div>
			</div>
            <ListaProdutos />

		</div>
	);
}

export default Home;