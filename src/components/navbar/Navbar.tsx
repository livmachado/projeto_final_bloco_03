import { Link } from 'react-router-dom';
import { UserIcon, ShoppingCartSimpleIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import SearchForm from './SearchForm';

function NavBar() {
	return (
		<div className="border-b border-stone-200 fixed top-0 left-0 z-50 flex justify-center w-full py-4 bg-white text-slate-800 md:py-2">
			<div className="container flex items-center justify-between mx-6 mt-2 text-lg">

				<Link to="/home" className="text-2xl font-bold">
					<span className="font-serif text-2xl text-emerald-900 tracking-tight">
						Farma<span className="text-emerald-500">Bem</span>
					</span>
				</Link>

				<div className="flex items-center gap-6">

					<Link
						to="/categorias"
						className="relative font-medium 
						after:absolute after:left-0 after:-bottom-1 
						after:h-[2px] after:w-0 after:bg-emerald-500 
						after:transition-all after:duration-300 
						hover:after:w-full"
					>
						Categorias
					</Link>

					<Link
						to="/cadcategoria"
						className="relative font-medium 
						after:absolute after:left-0 after:-bottom-1 
						after:h-[2px] after:w-0 after:bg-emerald-500 
						after:transition-all after:duration-300 
						hover:after:w-full"
					>
						Cadastrar
					</Link>

					<Link
						to="/"
						className="w-10 h-10 flex items-center justify-center 
						rounded-full bg-emerald-50 
						hover:bg-emerald-100 
						text-emerald-700 
						transition transform hover:scale-110"
						>
						<UserIcon size={20} />
					</Link>
					<Link
						to="/"
						className="w-10 h-10 flex items-center justify-center 
						rounded-full bg-emerald-50 
						hover:bg-emerald-100 
						text-emerald-700 
						transition transform hover:scale-110"
						>
						<ShoppingCartSimpleIcon size={24} />
					</Link>

					<SearchForm />

				</div>
			</div>
		</div>
	)
}

export default NavBar;