import React from "react";
import style from "./topReads.module.css" 
import { IoIosCart } from "react-icons/io";
import { FaList } from "react-icons/fa";

const TopReads = () => {
  return (
    <div className={style.smrTopMainDiv}>
      <div>
        <div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/51GkN0gsKoL.jpg"
              alt="21"
            />
            <h5>Jammu and Kashmir 1949-1964</h5>
            <p>334.00</p>
          </div>
          <div className={style.smrTopinnerDiv}>
            <div>
                 <IoIosCart></IoIosCart>
                  View Now
            </div>
            <div>|</div>
            <div>
                  <FaList></FaList>
                  More Details
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41qbYaNaAjL.jpg"
              alt="22"
            />
            <h5>Seven Signs of Life</h5>
            <p>335.00</p>
          </div>
          <div className={style.smrTopinnerDiv}>
          <div>
                 <IoIosCart></IoIosCart>
                  View Now
            </div>
            <div>|</div>
            <div>
                  <FaList></FaList>
                  More Details
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/51xv5NhStLL.jpg"
              alt="23"
            />
            <h5>John Law:</h5>
            <p>1089.00</p>
          </div>
          <div className={style.smrTopinnerDiv}>
          <div>
                 <IoIosCart></IoIosCart>
                  View Now
            </div>
            <div>|</div>
            <div>
                  <FaList></FaList>
                  More Details
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/510Eqd6hKPL.jpg"
              alt="24"
            />
            <h5>Carroll Shelby Story</h5>
            <p>924.00</p>
          </div>
          <div className={style.smrTopinnerDiv}>
          <div>
                 <IoIosCart></IoIosCart>
                  View Now
            </div>
            <div>|</div>
            <div>
                  <FaList></FaList>
                  More Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopReads;
