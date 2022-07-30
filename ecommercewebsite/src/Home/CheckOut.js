//Picture imports
import { React, useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar';
import Minions from '../Pictures/Minions.jpg';
import PepeMask from '../Pictures/PepeMask.jpg';
import Shirt from '../Pictures/Shirt.jpg';
import Milo from '../Pictures/Milo.jpg';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import './CheckOutStyle.css';
import '../NavBar/NavBarStyle.css';




function CheckOut() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        processOrder()
    };
    function processOrder() {
        setValidated(true);
        alert("$45.80 has been deducted on card number: \n" + cardNo + "\nItem will be mailed to: \n"+address +"\n"+ postal)
        
    }
    const [cardNo, setCardNo] = useState("");
    const [address, setAddress] = useState("");
    const [postal, setPostal] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    function showCart() {
        document.getElementById("paymentSection").style.animation = "out 1s ease 0.5s 1 normal forwards";
        
    }
    function hideCart() {
        document.getElementById("paymentForm").style.right = "-50%";
    }
    
    return (
        

        <div className="App" style={{ backgroundImage: 'linear-gradient(to bottom right, #808080, black)' }} >

            <NavBar  />
            <div class="whole">
            `    
                <checkOut>
                    <top>
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
                        <div class="OrderSummary" style={{textAlign:'left'}}>
                            <h2>Order</h2>
                            
                            <h5>Subtotal: $43.90</h5>
                            <h5>Delivery: $1.90</h5>
                            <hr />
                            <h3>Total: $45.80</h3>
                            <Button variant="primary" onClick={handleShow}>
                                Enter payment details
                            </Button>
                        </div>
                        </right>

                </checkOut>



               </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter Card details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" >
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control placeholder="Enter Card Number" required onChange={(e) => setCardNo(e.target.value)}/>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" className="mb-3" >
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control placeholder="Enter Expiry Date" required />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control placeholder="Enter CVV" type="password" required />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Name On Card</Form.Label>
                            <Form.Control placeholder="Enter Name On Card" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Billing Address</Form.Label>
                            <Form.Control placeholder="Enter Billing Address" required onChange={(e) => setAddress(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control placeholder="Enter Postal Code" required onChange={(e) => setPostal(e.target.value)}/>
                        </Form.Group>

                        <Form.Text className="text-muted">
                            Your credit card information will be kept a secret:)
                        </Form.Text>
                        
                        <br />
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel

                    </Button>
                        <Button variant="primary" type="submit">Place order</Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>


    );
}
export default CheckOut;
