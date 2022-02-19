import "./Orders.css";
import { useState, useEffect } from "react";
import { useStateValue } from './StateProvider';
import { db } from "./firebase.js";
import { doc, query, orderBy, onSnapshot, collection } from "firebase/firestore";
import Order from "./Order";


const Orders = () => {

    const [{ basket, user }, dispatch] = useStateValue();
    const[orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            // db
            //     .collection('users')
            //     .doc(user.uid)
            //     .collection(orders)
            //     .orderBy('created', 'desc')
            //     .onSnapshot(snapshot => (
            //         setOrders(snapshot.docs.map(doc => ({
            //             id: doc.id,
            //             data: doc.data
            //         })))
            //     ))

            // onSnapshot(query(collection(doc(collection(db, 'users'), user.uid), 'orders'), orderBy('created', 'desc')), (snapshot) => {
            //     setOrders(snapshot.docs.map(doc => ({
            //         id:doc.id,
            //         data:doc.data
            //     })))
            // })
            

            const users = collection(db, 'users');
            const dbuser = doc(users, user.uid);
            const dborders = collection(dbuser, 'orders');
            const recentOrder = query(dborders, orderBy('created', 'desc'));
            onSnapshot(recentOrder, (snapshot) => {
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
        else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders.map(order => (
                    <Order order={order}>

                    </Order>
                ))}
            </div>
        </div>
    )
}

export default Orders
