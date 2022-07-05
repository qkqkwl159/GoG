import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad'
                    src='https://thumbs.dreamstime.com/b/vinnytsia-ukraine-september-vector-banner-iphone-vector-illustration-app-web-presentation-design-vector-banner-iphone-230042240.jpg'
                    alt=''
                    />

                    <div>
                        <h2 className='checkout_title'>
                            장바구니입니다.
                        </h2>

                        <CheckoutProduct/>
                        

                        
                    </div>


            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
            
        </div>
    );
}

export default Checkout;