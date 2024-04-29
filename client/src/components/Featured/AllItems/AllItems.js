import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import { useNavigate } from "react-router-dom";
import './AllItems.css'

const AllItems = (props) => {
    const navigate = useNavigate();
    // Slice the first 4 items
    const firstFourItems = props.items ? props.items.slice(0, 4) : [];

    const handleViewAllItems = () => {
        navigate('/api/sale/item');
    };

    return (
        <div className="featured__products__container">
            <div className="itemsFrame">
                <div className='date'>
                    <div className='red'></div>
                    <p>Бүтээгдэхүүн</p>
                </div>
                <div className='itemList'>
                    <div className='cardlist'>
                        {!props.items && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />}
                        {firstFourItems && (
                            <div className="featured__products__card__container">
                                {firstFourItems.map((item, index) => (
                                    <ItemCard key={index} item={item} category="featured" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div >
                    <button type='button' onClick={handleViewAllItems}>Бүх барааг харах</button>
                </div>
            </div>
        </div>
    );
}

export default AllItems;
