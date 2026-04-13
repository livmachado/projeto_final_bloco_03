
import { Link } from 'react-router-dom';
import { UserIcon, ShoppingCartSimpleIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";

function NavBar() {
	return (
        <>
            <div
				className="border-b border-stone-200 fixed top-0 left-0 z-50 flex justify-center w-full py-4 bg-white text-slate-800 md:py-2"
			>
				<div className="container flex items-center justify-between mx-6 mt-2 text-lg">
					<Link
						to="/home"
						className="text-2xl font-bold"
					>
                        <span className="font-serif text-2xl text-emerald-900 tracking-tight flex-1">
                            Farma<span className="text-emerald-500">Bem</span>
                        </span>
					</Link>

					<div className="flex gap-4">
						<Link
							to="/"
							className="hover:underline"
						>
							Categorias
						</Link>
						<Link
							to="/"
							className="hover:underline"
						>
							Cadastrar Categorias
						</Link>
						<Link
							to="/"
							className="hover:underline"
						>
							<UserIcon size={32} />
						</Link>
						<Link
							to="/"
							className="hover:underline"
						>
							<ShoppingCartSimpleIcon size={32} />
						</Link>
						<MagnifyingGlassIcon size={32} />
					</div>
				</div>
			</div>
        </>
    )
}
export default NavBar