import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import classes from './Product.module.css';

const Product = () => {

    const { productId } = useParams();

    const [loading, setLoading] = useState(false);
    const [product, setproduct] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            setproduct(data);
            setLoading(false);
        };
        fetchProduct();
    }, []);

    const addItemHandler = () => {
        // AddItemToCart code
    };

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        const { title, price, description, image } = product;
        return (
            <div className={classes.product}>
                <h1>{title}</h1>
                <p>{description}</p>
                <img src={image} alt={title} width={200} />
                <p className={classes.price}>Price: {price} $</p>
                <button className={classes.btn} onClick={addItemHandler}>Add to cart</button>
            </div>
        )
    }

};

export default Product;