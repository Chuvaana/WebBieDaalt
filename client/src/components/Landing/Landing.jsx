import './Landing.css';
import shop from '../../asset/img/shopnow.jpg';
import { Link } from "react-router-dom"
import { Button } from "@mui/material";

const Landing = () => {
    return ( 
        <div className="landing__container">
          <div className="landing_body">
            <div className='bigCart'>
              <div className='texts'>
                <div className='title'>
                  <p>Signature Two tone Intertwined Circles Necklace</p>
                </div>
                <div className='shopnow'>
                  <p>Shop Now</p>
                  <div className='arrow-icon'>
                    <svg fill="#ffffff" height="30px" width="20px" version="1.1" id="Layer_1" 
                      viewBox="0 0 330 330" >
                      <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
      s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
      c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                    </svg>
                  </div>
                </div>
              </div>
                <div className='photo'>
                  <img src={shop} className='shopnow_image'></img>
                </div>
        </div>
        </div>
        </div>
     );
}
 
export default Landing;