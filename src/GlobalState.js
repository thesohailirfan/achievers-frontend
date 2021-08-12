import React, {createContext, useState, useEffect} from 'react';
import ProductsAPI from './api/ProductsAPI';
import HomeProductsAPI from './api/HomeProductsAPI';
import UserAPI from './api/UserAPI';
import CategoriesAPI from './api/CategoriesAPI';

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                // Not working in prod, so had to use locastorage accessToken
                // const res = await axios.get('https://achievers-backend.herokuapp.com/user/refresh_token')

                const accesstoken= localStorage.getItem('accesstoken')
                setToken(accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])


    
    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        HomeProductsAPI: HomeProductsAPI(),
        userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}