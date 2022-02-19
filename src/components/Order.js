import "./Order.css";
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { useEffect } from 'react';

const Order = ({ order }) => {
    useEffect(() => {
        console.log(order.data)
    }, [])
    return (
        <div className="order"> 
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('"MMMM Do YYYY, h:mm:ss a"')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                hideButton={true}
                />
            ))}
            
            <CurrencyFormat
                renderText={(value) => (
                        <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalscale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

        </div>
    )
}

export default Order
