import React from "react";
import "./Contact.css";


const Contact = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return <div className="contact-all">
        <div className="left_table">
            <div className="notice_phone">
                <div className="notice_phone_header">
                    <img src=""></img>
                    <h3>Бидэнтэй ярих</h3>
                </div>
                <div className="notice_phone_main">
                    <p>Ажлын 5 өдөр боломжтой</p>
                    <p>Утас: +986 8899 0909</p>
                </div>
            </div>
            <div className="notice_email">
                <div className="notice_email_header">
                    <img src=""></img>
                    <h3>Бидэн рүү бичих</h3>
                </div>
                <div className="notice_email_main">
                    <p>Манай маягтыг бөглөнө үү, бид тантай 24 цагийн дотор холбогдох болно.</p>
                    <p>Emails: jewelrymon@gmail.com</p>
                    <p>Emails: jewelrymon@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="right_table">
            <div className="right_table_upper">
                <div>
                    <input type="text" className="name" placeholder="Нэр"></input>
                </div>
                <div>
                    <input type="text" className="email" placeholder="И-мэйл"></input>
                </div>
                <div>
                    <input type="text" className="phone" placeholder="Утасны дугаар"></input>
                </div>
            </div>
            <div>
                <input type="text" className="message"></input>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="edit_save">
                        Илгээх
                    </button>
                </form>
            </div>
        </div>
    </div>;
};


export default Contact;