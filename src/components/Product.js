
import React from "react";
import "./Product.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, price, image }) => {

    const [value, setValue] = React.useState(2);
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
            },
        });
    };

    return (
        <div className="product">

            <div className="product__info">

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
            </div>

                <img src={image} alt=""/>

                <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
