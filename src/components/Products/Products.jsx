import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Products.module.css';

const Products = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={classes.products}>
            {products.map(product => {
                const { id, title, image } = product;
                return (
                    <div key={id}>
                        <Link to={`/${id}`}>
                            <article className={classes.productCard}>
                                <h2>{title.slice(0, 20)}...</h2>
                                <img className={classes.img} src={image} alt={title} />
                            </article>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

export default Products;