import React, {useContext, useEffect} from 'react';
import {GlobalState} from '../../../GlobalState';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from "../../headers/Header";
import Footer from "../../footers/footer";

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('https://achievers-backend.herokuapp.com/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('https://achievers-backend.herokuapp.com/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])
    
    return (
        <div className="history-page">
            <Header />
            <h2>History</h2>

            <h4>{history.length} 
                {history.length === 1 ? <span> order</span> : <span> orders</span>}
            </h4>

            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Date of Purchase</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link to={`/history/${items._id}`}>View</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Footer />
        </div>
    )
}

export default OrderHistory
