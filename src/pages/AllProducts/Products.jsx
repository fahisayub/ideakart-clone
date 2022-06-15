import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsApi } from "../../Redux/Home/home.actions";
import style from "./allProducts.module.css";
import { IoIosCart } from "react-icons/io";
import { FaList } from "react-icons/fa";
const Products = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.AllProducts);

  console.log(data, loading, error);

  useEffect(() => {
    //if(data.length === 0){
    dispatch(productsApi());
    //}
  }, []);

  return (
    <div className={style.smrContainer}>
      {loading && 
        <div>
          <img className={style.smrLoadingImg}
            src="https://media4.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif?cid=ecf05e470g1b840ukqee64nls7bvsi9i28l7d8ztocz0inz0&rid=giphy.gif&ct=g"
            alt="loading"
          />
        </div>
      }
      {error && <div>Something went wrong.....</div>}

      {!loading &&
        data.map((AllProducts) => (
          <div key={AllProducts.id}>
            <div>
              <img src={AllProducts.image} alt="1" />
            </div>
            <div className={style.smrSecondDiv}>
              <div>
                <h4>{AllProducts.name}</h4>
                <p>{AllProducts.price}</p>
              </div>
              <div className={style.smrViewMorDiv}>
                <div className={style.smrIconDiv}>
                  <IoIosCart></IoIosCart>
                  View Now
                </div>
                <div>|</div>
                <div className={style.smrIconDiv}>
                  <FaList></FaList>
                  More Details
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
