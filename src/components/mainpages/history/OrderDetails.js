import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState';
import Header from "../../headers/Header";
import Footer from "../../footers/footer";

function OrderDetails() {
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    const [orderDetails, setOrderDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        if(params.id){
            history.forEach(item =>{
                if(item._id === params.id) setOrderDetails(item)
            })
        }
    },[params.id, history])

    // console.log(orderDetails)
    
    if(orderDetails.length === 0) return null;

    return (
        <div className="history-page">
            <Header />
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Purchased Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orderDetails.email}</td>
                        <td>{new Date(orderDetails.createdAt).toLocaleDateString()}</td>
                    </tr>
                </tbody>
            </table>

            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.cart.map(item =>(
                        <tr key={item._id}>
                            <td><img style={{width: '10vw'}} src={item.images.url} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>Rs. {item.price * item.quantity}</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            <Footer />
        </div>
    )
}

export default OrderDetails
