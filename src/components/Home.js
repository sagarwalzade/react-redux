import React from 'react';
import './Home.css';
import img_iphone12 from '../images/iphone12.png';
import img_note20 from '../images/note20.png';
import img_oneplus10pro from '../images/oneplus10pro.png';
import img_cart from '../images/cartimage.png';

function Home() {
    return (
        <>
            <div className='cart_section'>
                <img src={img_cart}></img>
            </div>
            <h1 className='section_title'>Premium Mobiles</h1>
            <div className='products'>
                <div className='item'>
                    <div className='item_image'>
                        <img src={img_iphone12}></img>
                    </div>
                    <div className='item_content'>
                        <p>Iphone 12 - Purple</p>
                        <span>Rs. 50,000</span>
                        <div>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='item_image'>
                        <img src={img_note20}></img>
                    </div>
                    <div className='item_content'>
                        <p>Samsung note 20 Ultra - Purple</p>
                        <span>Rs. 70,000</span>
                        <div>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='item_image'>
                        <img src={img_oneplus10pro}></img>
                    </div>
                    <div className='item_content'>
                        <p>Oneplus 10 Pro - Purple</p>
                        <span>Rs. 60,000</span>
                        <div>
                            <button className='add_to_cart'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;