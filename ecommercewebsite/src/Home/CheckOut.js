//Picture imports
import { React, useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar';
import Minions from '../Pictures/Minions.jpg';
import Socks from '../Pictures/Socks.jpg';
import CatStickers from '../Pictures/CatStickers.jpeg';
import CatPlushie from '../Pictures/CatPlushie.jpg';
import PepeMask from '../Pictures/PepeMask.jpg';
import OctopusMood from '../Pictures/OctopusMood.jpg';
import Mopiko from '../Pictures/Mopiko.jpg';
import Pocky from '../Pictures/Pocky.jpg';
import TowelPaper from '../Pictures/TowelPaper.jpg';
import Cup from '../Pictures/Cup.jpg';
import Shirt from '../Pictures/Shirt.jpg';
import MameeMonster from '../Pictures/MameeMonster.jpg';
import LondonChocoRoll from '../Pictures/LondonChocoRoll.jpg';
import HawFlakes from '../Pictures/HawFlakes.jpg';
import EyeMo from '../Pictures/EyeMo.jpg';
import YuYeeOil from '../Pictures/YuYeeOil.jpg';
import OldTownCoffee from '../Pictures/OldTownCoffee.jpg';
import Panadol from '../Pictures/Panadol.png';
import Salonpas from '../Pictures/Salonpas.jpg';
import ZamBuk from '../Pictures/ZamBuk.jpg';
import CottonBud from '../Pictures/CottonBud.jpg';
import Milo from '../Pictures/Milo.jpg';
import Broccoli from '../Pictures/Broccoli.jpg';
import MaMaLemon from '../Pictures/MaMaLemon.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import CloseButton from 'react-bootstrap/CloseButton';

import './CheckOutStyle.css';
import CartDatatable from './CartDatatable';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowUpLong,faCartShopping, faShoppingBag, faShoppingCart,faXmark,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { pink } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




function CheckOut() {
    //testData
    //const location = useLocation()
    //const { from } = location.state
    /*const { totalAmt } = location.state*/
    //button to scrol up
    const [showScrollBtn, setShowScrollBtn] = useState("");
    const productList = [
        { productID: 329839, productName: 'Minion fries', price: 50.00, rating: 3, description: 'The only few minion fries', seller: 'MacRonald', amtSold: 5, amtAvailable: 10, productType: 'Food', picturePath: Minions },
        { productID: 439823, productName: 'Shirt', price: 7.00, rating: 5, description: 'The perfect gift for a programmer to wear!', seller: 'Dave', amtSold: 3, amtAvailable: 10, productType: 'Clothes', picturePath: Shirt },
        { productID: 493234, productName: 'Frog Eye Mask', price: 4.00, rating: 4, description: 'Perfect for sleeping! Eyes can be opened or closed.', seller: 'PepeFroggie', amtSold: 23, amtAvailable: 2000, productType: 'Accessories', picturePath: PepeMask },
        { productID: 483923, productName: 'Milo', price: 1.00, rating: 4, description: 'Perfect for decoration!', seller: 'Catto Inc', amtSold: 2730, amtAvailable: 4000, productType: 'Supplies', picturePath: Milo },
        ];

    const [formProgress,setFormProgress] =  useState("");
    useEffect(() => {
        window.addEventListener('scroll', scrollAppear);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const scrollAppear = () => {
        if (window.pageYOffset > 100) {

            setShowScrollBtn(true);
        } else {

            setShowScrollBtn(false);
        }
    }
    /*const { data } = this.props.location.data*/
    return (
        //onSubmit={ilterdata(OppoList)}
        //FBD9D9 backgroundColor:'#f5f5f5'
        //class="oppoNFavTitle", boxShadow:' 0 1px 0 #000 inset'style={{ backgroundColor:'#f5f5f5'}}

        <div className="App" >
            {/*<InternNavBar />*/}

            <NavBar  />
            <div class="whole">
            `    
                <checkOut>
                    <top>
                        <div class='progressBar'>
                            
                            <ProgressBar animated now={45} />
                        </div>
                    </top>
                    <left>
                        <div class="Products" style={{ textAlign: 'left' }}>
                            <h2>Products Ordered</h2>
                            <hr />
                            {productList.map((row, key) => 
                                <div class="singleProduct">
                                    <div class="singleProductPicture">
                                        <img style={{maxHeight:'100%',maxWidth:'100%'}} src={row["picturePath"]} alt="First slide" />
                                    </div>
                                    <div class='singleProductInfo' style={{ paddingLeft:'10px' }}>
                                        <h5>{row["productName"]}</h5>
                                        <h6>Variation: White</h6>
                                        </div>
                                    
                                </div>
                                )}
                            
                        </div>
                        
                        
                    </left>
                    <right>
                        <div class="OrderSummary" style={{ textAlign: 'left' }}>
                            <h2>Form</h2>
                            <h5>Payment Method:</h5>
                            <h5>Delivery: $1.90</h5>
                            <hr />
                            <h3>Total: $45.80</h3>
                        </div>
                        <div class="OrderSummary" style={{textAlign:'left'}}>
                            <h2>Order</h2>
                            
                            <h5>Subtotal: $43.90</h5>
                            <h5>Delivery: $1.90</h5>
                            <hr />
                            <h3>Total: $45.80</h3>
                            <button>Place Order</button>
                        </div>
                    </right>

                </checkOut>



               </div>



        </div>


    );
}
//OppoViewFormat LoggedDatatable OppoCardsFormat className="g-4"
//isVisible ? 'opacity-100' : 'opacity-0'
//opacity: showScrollBtn ? 100 : 0 
//opacity: showScrollBtn ? 100 : 0 
//<Datatable data={search(OppoList)} />
//<Datatable data={typeBox(search(OppoList))} />
export default CheckOut;
