import './highlight.css'
import { useNavigate } from "react-router-dom";

const Highlight = (props) => {
    const Items = props.items;
    console.log(Items);


    // Check if Items is undefined or empty
    if (!Items || Items.length === 0) {
        return null; // or render a fallback component/message
    }

    // Get the first item
    const firstItem = Items[0];
    const secondItem = Items[1];
    const thirdItem = Items[2];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const jump1 = () => {
        navigate(`/item/${firstItem.category}/${firstItem._id}`);
    };
    
    const jump2 = () => {
        navigate(`/item/${secondItem.category}/${secondItem._id}`);
    };
    
    const jump3 = () => {
        navigate(`/item/${thirdItem.category}/${thirdItem._id}`);
    };
    
    

    return (
        <div className="home_featured__products__container">
            <div className="highlight">
                <div className='date'>
                    <div className='red'></div>
                    <p>Онцлох</p>
                </div>
                <div className='title'><p>Шинэ бүтээгдэхүүн</p></div>
                <div className='list'>

                    <div className='first' onClick={jump1} style={{ backgroundImage: `url(${firstItem.image[0].path})` }}>
                        <div className='inside' >
                            <div className='name'> <p> {firstItem.name}</p></div>
                            <div className='description'><p>{firstItem.description}</p></div>
                            <div className='price'><p>{firstItem.price}₮</p></div>
                        </div>
                    </div>
                    <div className='second'>
                        <div className='s_first' onClick={jump2}  style={{ backgroundImage: `url(${secondItem.image[0].path})` }}> 
                            <div className='inside' >
                                <div className='name'> <p> {secondItem.name}</p></div>
                                <div className='description'><p>{secondItem.description}</p></div>
                                <div className='price'><p>{secondItem.price}₮</p></div>
                            </div>
                        </div>
                        <div className='s_second'>
                            <div className='s_s_first' onClick={jump3}  style={{ backgroundImage: `url(${thirdItem.image[0].path})` }}>
                                <div className='inside' >
                                    <div className='name'> <p> {thirdItem.name}</p></div>
                                    <div className='description'><p>{thirdItem.description}</p></div>
                                    <div className='price'><p>{thirdItem.price}₮</p></div>
                                </div>
                            </div>
                            <div className='s_s_second'  onClick={jump3}  style={{ backgroundImage: `url(${thirdItem.image[0].path})` }}>
                                <div className='inside' >
                                    <div className='name'> <p> {thirdItem.name}</p></div>
                                    <div className='description'><p>{thirdItem.description}</p></div>
                                    <div className='price'><p>{thirdItem.price}₮</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlight;