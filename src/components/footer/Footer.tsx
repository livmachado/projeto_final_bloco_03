import {  GithubLogoIcon, GlobeIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        
        <div className="flex justify-center rounded-2xl w-full px-2 bg-white text-slate-400 py-4 mt-auto border-t border-stone-200">
            <div className="container flex flex-col items-center gap-2">
                <p className='text-base font-bold text-center md:text-xl'>Lívia Machado Campos © {data} All Rights Reserved.</p>
                <div className='flex flex-wrap justify-center gap-2'>
                    <a href="#" target="_blank" className="flex items-center" rel="noopener noreferrer">
                        <span className="flex items-center justify-center w-10 h-10">
                            <LinkedinLogoIcon size={28} weight='bold' />
                        </span>
                    </a>
                    <a href="#" target="_blank" className="flex items-center" rel="noopener noreferrer">
                        <span className="flex items-center justify-center w-10 h-10">
                            <GithubLogoIcon size={28} weight='bold' />
                        </span>
                    </a>
                    <a href="#" target="_blank" className="flex items-center" rel="noopener noreferrer">
                        <span className="flex items-center justify-center w-10 h-10">
                            <GlobeIcon size={28} weight="bold" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Footer