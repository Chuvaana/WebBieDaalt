import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import './FeaturedItems.css'

const FeaturedItems = (props) => {
    
    return (
         
        <div className="featured__products__container">
            <div className="featured__products">
                <div className='date'>
                    <div className='red_p'>
                        <div className='red'></div>
                        <p>Өнөөдөр</p>
                    </div>
                    <div>
                        <button>Бүх барааг харах</button>
                    </div>
                </div>
                <div className='title'><p>Хямдралтай бараанууд</p></div>
                <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
            {!props.items && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto'/>}
            {props.items && (
                <div className="featured__products__card__container">
                    {props.items.map((item, index) => (
                        <ItemCard key={index} item={item} category="featured" />
                    ))}
                </div>
            )}
        </div>
            </div>
        </div>        
     );
}
 
export default FeaturedItems;




