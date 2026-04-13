import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormProduto from '../formproduto/FormProduto';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-emerald-700 transition cursor-pointer">
                        Novo Produto
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '0',
                    width: '100%',
		            maxWidth: '500px'
                }}
                
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;