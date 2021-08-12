import React, {useContext, useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Header from "../../headers/Header";
import Footer from "../../footers/footer";


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;
    
    return (
        <>
        <Header />
            <div className="detail">
            <h2 className="detail--title--mobile">{detailProduct.title}</h2>
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2 className="box-detail--row--h2">{detailProduct.title}</h2>
                    </div>
                    
                    <hr className="lineUnderTitle"></hr> 
                    <span className="price">Rs. {detailProduct.price}</span>
                    <span className="price--inclusiveOfTaxes">Inclusive of all taxes</span>
                    <p className="prevPrice"><s>Rs. {detailProduct.previousPrice}</s> (Save Rs.{(detailProduct.previousPrice)-(detailProduct.price)})</p>
                    <p className="content">{detailProduct.content}</p>
                    <Link to="/cart" className="cart"
                    onClick={() => addCart(detailProduct)}>
                        Buy Now
                    </Link>
                </div>
            </div>
            <div className="description">
                <p className="description--heading">Description</p>
                <hr className="description--line1"></hr> 
                <p className="description--description">{detailProduct.description}</p>
                <hr className="description--line2"></hr> 
            </div>
            <div>
                <h2 className="relatedProducts">Related products</h2>
                <div className="relatedProducts--products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailProduct
