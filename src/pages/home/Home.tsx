function Home() {
	return (
		<div className="flex justify-center items-center min-h-[80vh] mt-12 px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 
				bg-gradient-to-br from-emerald-900 to-emerald-500 
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
						<button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
							Ver Produtos
						</button>

						<button className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-emerald-700 transition">
							Novo Produto
						</button>
					</div>
				</div>

                    <div className="hidden md:flex items-center justify-center p-6">
                    <img
                        src="src\assets\farmacia.png"
                        alt="Farmácia"
                        className="w-full max-w-md object-contain"
                    />
                    </div>

			</div>
		</div>
	);
}

export default Home;