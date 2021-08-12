import React, {useContext} from 'react';
import {GlobalState} from '../../../../GlobalState';

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState);
    const [isAdmin] = state.userAPI.isAdmin;
    // const addCart = state.userAPI.addCart;
    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <a id="btn_view" href={`/edit_product/${product._id}`}>
                        Edit
                    </a>
                </>
                : <>
                    <a id="btn_view" href={`/detail/${product._id}`}>
                        View
                    </a>
                </>
            }
                
        </div>
    )
}

export default BtnRender;
