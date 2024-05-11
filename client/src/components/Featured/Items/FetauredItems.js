import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import './FeaturedItems.css';
import SaleItemCard from '../../Card/SaleItemCard/SaleItemCard';

const FeaturedItems = (props) => {
    const navigate = useNavigate();
    
    // Filter items where sale is true, then slice the first 4
    const firstFourItems = props.items ? props.items.filter(item => item.sale === true).slice(0, 4) : [];

    const handleViewAllItems = () => {
        navigate('/item/sale');
    };

    return (
        <div className="home_featured__products__container">
            <div className="home_featured__products">
                <div className='date'>
                    <div className='red_p'>
                        <div className='red'></div>
                        <p>Өнөөдөр</p>
                    </div>
                    <div>
                        <button type='button' onClick={handleViewAllItems}>Бүх барааг харах</button>
                    </div>
                </div>
                <div className='title'><p>Хямдралтай бараанууд</p></div>
                <div className='cardslist'>
                    {!props.items && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />}
                    {firstFourItems && (
                        <div className="featured__products__card__container">
                            {firstFourItems.map((item, index) => (
                                <SaleItemCard key={index} item={item} category="featured" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FeaturedItems;
