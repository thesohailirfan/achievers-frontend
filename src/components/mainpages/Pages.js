import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './products/Products';
import OurCourses from './products/OurCourses';
import DetailProduct from './detailProduct/DetailProduct';
import Login from './auth/Login';
import Register from './auth/Register';
import OrderHistory from './history/OrderHistory';
import OrderDetails from './history/OrderDetails';
import Cart from './cart/Cart';
import PaySuccess from './cart/PaySuccess';
import NotFound from './utils/not_found/NotFound';
import Categories from './categories/Categories';
import CreateProduct from './createProduct/CreateProduct';
import Careers from './career/Careers';
import About from "./about/About";
import ReturnPolicy from "./policy/ReturnPolicy";
import Terms from "./policy/Terms";
import Privacy from "./policy/Privacy";

import {GlobalState} from '../../GlobalState';


function Pages() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;

    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/our_courses" exact component={OurCourses} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />
            <Route path="/success" exact component={isLogged ? PaySuccess : NotFound} />

            <Route path="/careers" exact component={Careers} />
            <Route path="/about" exact component={About} />

            <Route path="/refund-policy" exact component={ReturnPolicy} />
            <Route path="/terms-of-use" exact component={Terms} />
            <Route path="/security&privacy" exact component={Privacy} />
            
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages;
