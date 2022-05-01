import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>This is product details of id: {productId}</h2>
        </div>
    );
};

export default ProductDetails;