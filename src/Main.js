import React from "react";
import logo from './images/boulangerie_hal_logo.png';
import navLogo from './images/boulangerie_hal_logo_nav.png';
import navLogo2 from './images/haike.jpg';


import main from './images/main.png';
import news from './images/news.png';
import access from './images/access.png';

import product1 from './images/pain/image006.jpg';
import product2 from './images/pain/image004.jpg';
import product3 from './images/pain/image005.jpg';
import product4 from './images/pain/image003.jpg';
import product5 from './images/pain/image002.jpg';
import product6 from './images/pain/image001.jpg';
import product7 from './images/pain/image016.jpg';
import product8 from './images/pain/image033.jpg';
import product9 from './images/pain/image038.jpg';


function Main() {
    const products = [
        {
            name: "Baguette",
            price: 200,
            url: product1
        },
        {
            name: "Pain au Levain",
            price: 550,
            url: product2
        },
        {
            name: "Ficelle",
            price: 300,
            url: product3
        },
        {
            name: "Artisan Baguette",
            price: 400,
            url: product4
        },
        {
            name: "Marmalade Croissant",
            price: 200,
            url: product5
        },
        {
            name: "Croissant au Beurre",
            price: 150,
            url: product6
        },
        {
            name: "Pain aux Noix",
            price: 450,
            url: product7
        },
        {
            name: "Pain au Chocolat",
            price: 390,
            url: product8
        },
        {
            name: "Pain au Chocolat",
            price: 150,
            url: product9
        },
    ];
   
    return (
        //create the nav
        <div className="bg-boulangerie-background">
            <nav className="fixed top-0 left-0 right-0 bg-boulangerie-nav shadow-md z-10">
                <div className="flex items-center justify-between pl-10 py-6 text-boulangerie-cream text-xl">
                    <img className="w-18 h-10" src={navLogo} alt="logo" />
                    

                    <ul className="flex flex-grow justify-evenly">
                        <li>Main</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Access</li>
                    </ul>
                </div>
            </nav>
            <div className="relative h-screen mx-40">
                <img className="absolute my-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto" style={{ width: '100%', height: 'auto' }} src={navLogo2} alt="logo" />
            </div>
            <div className="relative h-screen mx-40 my-32" style={{ border: '1.2px solid #FFF3B0', borderRadius:  '10px' }}>
                <div className="absolute w-1/3 h-full">
                    <img className="object-cover h-full w-full" style={{ width: '82%', height: 'auto' }} src={news} alt="left" />
                </div>
                <div className="absolute right-0 w-2/3 h-full flex flex-col items-center justify-center p-5 text-white">
                    <p><strong>2023年11月30日</strong></p>
                    <br />

                    <p>フランス オーベルニュ地方の伝統パンや郷土料理の惣菜パンなどを販売するオーベルニュ地方フェアを開催いたします。
                        <br />
                        <br />
                    </p>
                    <br />

                    <p><strong>2023年11月16日</strong></p>
                    <br />

                    <p>ご好評いただいております、デザートに、季節限定でオレンジを使用したデザートが加わります。
                        <br />
                        <br />
                    </p>
                    <br />

                    <p><strong>2023年11月08日</strong></p>
                    <br />

                    <p>名産ブルーチーズ「フルム・ダンベール」を使ったパンや郷土料理をアレンジした惣菜パンなど、フェア限定商品をご用意しております
                        <br />
                        <br />
                    </p>


                </div>
            </div>
            <div className="relative h-full mx-40 max-w-7xl">
                <h2 className="text-5xl text-center py-10 text-boulangerie-cream">Our Products</h2>
                <div className="grid grid-cols-3 gap-8 p-10 px-30">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col items-center my-6">
                            <img className="w-65 h-48 object-cover mb-4 rounded-md" src={product.url} alt={product.name} />
                            <p className=" sm:text-3xl md:text-2xl lg:text-4xl font-bold mb-2 text-white">{product.name}</p>
                            <p className=" sm:text-md md:text-md lg:text-xl text-boulangerie-cream">{product.price}円</p>

                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative h-screen mx-40 my-32" style={{ border: '1.2px solid #FFF3B0', borderRadius:  '10px' }}>

                <div className="absolute left-0 w-2/3 h-full ml-15 flex flex-col items-center justify-center p-5 text-white">
                    <p className="text-xl text-boulangerie-cream"><strong>東京都渋谷区猿楽町29-18</strong></p>
                    <br />
                    <p className="my-5">03-3344-1010</p>
                    <br />
                    <p className="px-20 ">
                        東急東横線［代官山駅］下車　徒歩3分
                        東急東横線・地下鉄日比谷線［中目黒駅］下車　徒歩7分
                        JR山手線・JR埼京線・地下鉄日比谷線［恵比寿駅］下車　徒歩10分
                    </p>
                </div>

                <div className="absolute right-0 w-1/3 h-full flex items-center justify-end">
                    <img className="object-cover" style={{ width: '70%', height: 'auto' }} src={access} alt="right" />
                </div>
            </div>
            <div className="relative h-screen mx-auto max-w-7xl">
                <h2 className="text-4xl text-center py-3 text-boulangerie-cream"> 営業時間</h2>
                <h5 className="text-2xl text-center px-15 text-white">10:00 ～ 20:00</h5>
                <div className="mx-auto mt-28 w-2/3 h-96 overflow-hidden rounded-lg shadow-md">
                    
                        
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.633107928472!2d139.6969332!3d35.6915694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0a69d76099%3A0x7a5627292269c29e!2sCocoon%20Tower!5e0!3m2!1sen!2sjp!4v1702377304499!5m2!1sen!2sjp" allowfullscreen="" loading="lazy" ></iframe>
                </div>
            </div>
            <div className="relative h-36 mx-auto w-full bg-000000">
                
                <h5 className="text-md text-center px-15 text-white">Copyright 2023-2024 Boulangerie HAL</h5>
                
            </div>
            
        </div>
            );
        }

export default Main;