import './highlight.css'

export default function Highlight() {
    return (
        <div className="home_featured__products__container">
            <div className="highlight">
                <div className='date'>
                    <div className='red'></div>
                    <p>Онцлох</p>
                </div>
                <div className='title'><p>Шинэ бүтээгдэхүүн</p></div>
                <div className='list'>
                    <div className='first'>
                        <div className='inside'>
                            <div className='name'> <p> Нэг Сувдтай Хослол</p></div>
                            <div className='description'><p>925 сорьцтой Мөнгөн зүүлт</p></div>
                            <div className='price'><p>199.000₮</p></div>
                        </div>
                    </div>
                    <div className='second'>
                        <div className='s_first'>
                            <div className='inside'>
                                <div className='name'><p>Big Pearl</p></div>
                                <div className='description'><p>Сувдан ээмэг</p></div>
                                <div className='price'><p>160.900₮</p></div>
                            </div>
                        </div>
                        <div className='s_second'>
                            <div className='s_s_first'>
                                <div className='inside'>
                                    <div className='name'><p>Rainbow mini hoop</p></div>
                                    <div className='description'><p>Цагирган ээмэг</p></div>
                                    <div className='price'><p>147.900₮</p></div>
                                </div>
                            </div>
                            <div className='s_s_second'>
                                <div className='inside'>
                                    <div className='name'><p>2 side</p></div>
                                    <div className='description'><p>Мөнгөн ээмэг</p></div>
                                    <div className='price'><p>84.900₮</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}