import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
import { Box, Rating } from "@mui/material";

const CheckoutProduct = ({  id, title, price, image, hideButton }) => {

    const [value, setValue] = React.useState(3);
    const [{ basket }, dispatch] = useStateValue();

    // Remove the item from the basket
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">

                <p>{title}</p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                    </Box>          
                </div>
                {!hideButton && <button onClick={removeFromBasket}>Remove from basket</button>}
            </div>

        </div>
    )
}

export default CheckoutProduct
