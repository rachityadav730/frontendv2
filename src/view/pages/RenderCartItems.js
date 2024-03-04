// Cart/RenderCartItems.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBeer } from "react-icons/fa";
import { removeFromCart } from "../../Slices/CartSlice";
import Button from 'react-bootstrap/Button';
import { addToCart } from '../../Slices/CartSlice';


export default function RenderCartItems() {
    const { cart,total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log("dadasd", cart)
    // const {total, totalItems} = useSelector((state) => state.cart) 
    const handleAddToCart = (item) => {
        console.log("dispatching add to cart",item)
        dispatch(addToCart(item)); 
        return;
    }

    return (
        <div className="product-dashboard">

            {
               cart.length > 0 ? 
               
               <>
                <div style={{display: "flex"}}>
                    <div style={{width: "50%"}}>
                        <h3>Total: <span>&#8377;</span>{total}</h3>
                    </div>
                    <div style={{width: "50%", paddingLeft: "30%"}}>
                    <Button  style={{backgroundColor: "#42a2a2", border: "none", width: "100%", height: "60px", fontSize: "30px"}}>Continue</Button>{' '}
                    </div>
                </div>
                <hr/>
               {
               cart.map((dataObj, index) => (
                <div
                    key={index}
                    className={` `}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                        {/* <div>{dataObj.name}</div> */}
                        <div>
                            <img
                                src={dataObj.img_url}
                                width={200}
                                height={150}
                                alt=""
                            />
                        </div>
                        <div>
                            <p>{dataObj.description}</p>
                        </div>
                        <div>
                            
                                      <Button onClick={()=>handleAddToCart(dataObj)}variant="success">+</Button>{' '}
                                      <Button variant="light">{dataObj.price}</Button>{' '}
                                      <Button onClick={() =>
                                    dispatch(removeFromCart(dataObj._id))
                                } variant="warning">-</Button>{' '}
                                {/* <FaBeer size={20} /> */}
                          
                        </div>
                    </div>


                </div>
            ))
                            }
            </>
            :
               
               <h3> No Item found</h3>
            }
            
        </div>
    );
}
