import { useState } from "react";
import { MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react";

function SearchForm() {
    const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center 
      bg-emerald-50 text-emerald-700 
      rounded-full overflow-hidden transform 
      transition-all duration-300 ease-in-out
      hover:bg-emerald-100 hover:scale-110 cursor-pointer
      ${open ? "w-52 px-3 h-10 shadow-md" : "w-10 h-10 justify-center"}`}
    >

      <input
        type="text"
        placeholder="Buscar..."
        className={`bg-transparent outline-none text-sm transition-all duration-200
        ${open ? "w-full opacity-100 ml-2" : "w-0 opacity-0"}`}
      />

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center shrink-0"
      >
        {open ? <XIcon size={20} /> : <MagnifyingGlassIcon size={20} />}
      </button>

    </div>
  );
}

export default SearchForm;
