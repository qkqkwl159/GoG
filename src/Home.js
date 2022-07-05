import React from 'react';
import './Home.css'
import Product from "./Product";
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                src='https://assets.justinmind.com/wp-content/uploads/2020/02/header-oriented-website-background.png'
                alt=""/>
            
            
            <div className='home_row'>

                <Product id="0001" title="MacBook Air2_M2"
                price={30000} image= "https://blog.kakaocdn.net/dn/tcpuN/btqzLEu8hlR/17KNO4UiEA0bcKzStd6Fyk/img.jpg"
                rating={4}/>

                <Product id="0001" title="AirMax"
                price={90000} image= "https://mobiinsidecontent.s3.ap-northeast-2.amazonaws.com/kr/wp-content/uploads/2020/12/09112201/106807802-1607435674721-airpods-max-4.jpg"
                rating={4}/>

            </div>
            <div className='home_row'>

                
                <Product id="0002" title="GingerBeer-Non Alcor"
                price={3000} image= "https://www.costco.co.kr/medias/sys_master/images/haf/h4d/103457608269854.webp"
                rating={1}/>
                <Product id="0002" title="GingerBeer-Non Alcor"
                price={3000} image= "https://www.costco.co.kr/medias/sys_master/images/haf/h4d/103457608269854.webp"
                rating={3}/>
                <Product id="0002" title="GingerBeer-Non Alcor"
                price={3000} image= "https://www.costco.co.kr/medias/sys_master/images/haf/h4d/103457608269854.webp"
                rating={1}/>
                
                
            </div>


            <div className='home_row'>

            <Product id="0002" title="GingerBeer-Non Alcor"
                price={3000} image= "https://www.costco.co.kr/medias/sys_master/images/haf/h4d/103457608269854.webp"
                rating={2}/>
            <Product id="0002" title="GingerBeer-Non Alcor"
                price={3000} image= "https://www.costco.co.kr/medias/sys_master/images/haf/h4d/103457608269854.webp"
                rating={5}/>
            <Product id="0002" title="GingerBeer-Non Alcor"
                price={3000} image= "https://www.costco.co.kr/medias/sys_master/images/haf/h4d/103457608269854.webp"
                rating={3}/>

            </div>
            </div>
        </div>
    );
}


export default Home;