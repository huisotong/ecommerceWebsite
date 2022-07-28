//Picture imports
import { React, useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar';
import Minions from '../Pictures/Minions.jpg';
import Socks from '../Pictures/Socks.jpg';
import CatStickers from '../Pictures/CatStickers.jpeg';
import CatPlushie from '../Pictures/CatPlushie.jpg';
import PepeMask from '../Pictures/PepeMask.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import CloseButton from 'react-bootstrap/CloseButton';

import './HomeStyle.css';
import CartDatatable from './CartDatatable';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowUpLong,faCartShopping, faShoppingBag, faShoppingCart,faXmark,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { pink } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css';




function HomePage() {
    //testData
    const productList = [
        { productID: 329839, productName: 'Minion fries', price: 50.00, rating: 3, description: 'The only few minion fries', seller: 'MacRonald', amtSold: 5, amtAvailable: 10, productType: 'Food', picturePath: Minions },
        { productID: 439823, productName: 'Socks', price: 1.00, rating: 2, description: 'Socks used with love', seller: 'Dave', amtSold: 3, amtAvailable: 10, productType: 'Clothes', picturePath: Socks },
        { productID: 483923, productName: 'Cat stickers', price: 1.00, rating: 4, description: 'Perfect for decoration!', seller: 'Catto Inc', amtSold: 2730, amtAvailable: 4000, productType: 'Supplies', picturePath: CatStickers },
        { productID: 984357, productName: 'Cat Plushie', price: 46, rating: 5, description: 'Pawesome gifts!', seller: 'Pusheen', amtSold: 23, amtAvailable: 2000, productType: 'Toys', picturePath: CatPlushie },
        { productID: 493234, productName: 'Frog Eye Mask', price: 46, rating: 4, description: 'Perfect for sleeping! Eyes can be opened or closed.', seller: 'PepeFroggie', amtSold: 23, amtAvailable: 2000, productType: 'Accessories', picturePath: PepeMask },
        { productID: 329839, productName: 'Minion fries', price: 50.00, rating: 3, description: 'The only few minion fries', seller: 'MacRonald', amtSold: 5, amtAvailable: 10, productType: 'Food', picturePath: Minions },
        { productID: 984357, productName: 'Cat Plushie', price: 46, rating: 4, description: 'Pawesome gifts!', seller: 'Pusheen', amtSold: 23, amtAvailable: 2000, productType: 'Toys', picturePath: CatPlushie },
        { productID: 493234, productName: 'Frog Eye Mask', price: 46, rating: 4, description: 'Perfect for sleeping! Eyes can be opened or closed.', seller: 'PepeFroggie', amtSold: 23, amtAvailable: 2000, productType: 'Accessories', picturePath: PepeMask },
        { productID: 329839, productName: 'Minion fries', price: 50.00, rating: 3, description: 'The only few minion fries', seller: 'MacRonald', amtSold: 5, amtAvailable: 10, productType: 'Food', picturePath: Minions },
        { productID: 439823, productName: 'Socks', price: 1.00, rating: 2, description: 'Socks used with love', seller: 'Dave', amtSold: 3, amtAvailable: 10, productType: 'Clothes', picturePath: Socks },
        { productID: 483923, productName: 'Cat stickers', price: 1.00, rating: 4, description: 'Perfect for decoration!', seller: 'Catto Inc', amtSold: 2730, amtAvailable: 4000, productType: 'Supplies', picturePath: CatStickers },
        { productID: 984357, productName: 'Cat Plushie', price: 46, rating: 4, description: 'Pawesome gifts!', seller: 'Pusheen', amtSold: 23, amtAvailable: 2000, productType: 'Toys', picturePath: CatPlushie },
        { productID: 493234, productName: 'Frog Eye Mask', price: 46, rating: 4, description: 'Perfect for sleeping! Eyes can be opened or closed.', seller: 'PepeFroggie', amtSold: 23, amtAvailable: 2000, productType: 'Accessories', picturePath: PepeMask },
        { productID: 329839, productName: 'Minion fries', price: 50.00, rating: 3, description: 'The only few minion fries', seller: 'MacRonald', amtSold: 5, amtAvailable: 10, productType: 'Food', picturePath: Minions },
        { productID: 439823, productName: 'Socks', price: 1.00, rating: 2, description: 'Socks used with love', seller: 'Dave', amtSold: 3, amtAvailable: 10, productType: 'Clothes', picturePath: Socks },
        { productID: 483923, productName: 'Cat stickers', price: 1.00, rating: 4, description: 'Perfect for decoration!', seller: 'Catto Inc', amtSold: 2730, amtAvailable: 4000, productType: 'Supplies', picturePath: CatStickers },
        { productID: 984357, productName: 'Cat Plushie', price: 46, rating: 4, description: 'Pawesome gifts!', seller: 'Pusheen', amtSold: 23, amtAvailable: 2000, productType: 'Toys', picturePath: CatPlushie },
        { productID: 493234, productName: 'Frog Eye Mask', price: 46, rating: 4, description: 'Perfect for sleeping! Eyes can be opened or closed.', seller: 'PepeFroggie', amtSold: 23, amtAvailable: 2000, productType: 'Accessories', picturePath: PepeMask },
        { productID: 329839, productName: 'Minion fries', price: 50.00, rating: 3, description: 'The only few minion fries', seller: 'MacRonald', amtSold: 5, amtAvailable: 10, productType: 'Food', picturePath: Minions },
        { productID: 439823, productName: 'Socks', price: 1.00, rating: 2, description: 'Socks used with love', seller: 'Dave', amtSold: 3, amtAvailable: 10, productType: 'Clothes', picturePath: Socks },
        { productID: 483923, productName: 'Cat stickers', price: 1.00, rating: 4, description: 'Perfect for decoration!', seller: 'Catto Inc', amtSold: 2730, amtAvailable: 4000, productType: 'Supplies', picturePath: CatStickers },
        { productID: 984357, productName: 'Cat Plushie', price: 46, rating: 4, description: 'Pawesome gifts!', seller: 'Pusheen', amtSold: 23, amtAvailable: 2000, productType: 'Toys', picturePath: CatPlushie },
        { productID: 493234, productName: 'Frog Eye Mask', price: 46, rating: 4, description: 'Perfect for sleeping! Eyes can be opened or closed.', seller: 'PepeFroggie', amtSold: 23, amtAvailable: 2000, productType: 'Accessories', picturePath: PepeMask }];

    //button to scrol up
    const [showScrollBtn, setShowScrollBtn] = useState("");

    //for star rating
    const stars = Array(5).fill(0)

    //modal
    const [modalShow, setModalShow] = useState(false);
    const [arrayPosition, setArrayPosition] = useState(0);

    //shopping cart
    const [cart, setCart] = useState([]);

    const [show, setShow] = useState(false);
    const [indexCartDelete, setIndexCartDelete] = useState(0);


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
    //colours for star
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    }
    //style for star
    const styles = {
        stars: {
            display: "flex",
            flexDirection: "row"
        }
    };
    


    //modal for quick view
    function MyVerticallyCenteredModal(props) {

        return (
            <Modal
                {...props}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {productList[arrayPosition].productName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div class="quickViewFrame">
                        <topSection>
                            <quickViewPicture><Carousel variant="dark">
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={productList[arrayPosition].picturePath} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={productList[arrayPosition].picturePath} alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={productList[arrayPosition].picturePath} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </quickViewPicture>
                            <quickViewText>
                            <h4>{productList[arrayPosition].productName}</h4>
                            <p>{productList[arrayPosition].description}</p>
                            <p>sadsa</p>
                            </quickViewText>
                            </topSection>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/*<Button onClick={props.onHide}>Close</Button>*/}
                    <Button onClick={() => addToCart(arrayPosition)}>Add to Cart</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    //top open up the modal and get the index of chosen product
    function update(index) {
        setModalShow(true)
        setArrayPosition(index);
    }
    //adds product into shopping cart
    function addToCart(index) {
        if (findCart(cart, productList[index].productID)) {
            cart.push(productList[index])
            alert("Added into cart!")
        } else {
            alert("Already added into cart!")
        }
        
    }
    //show the shopping cart
    function showCart(){
    //    document.getElementById("shoppingCart").style.width = "250px";
        document.getElementById("shoppingCart").style.right = "0%";
    }
    //hide the shopping cart
    function hideCart(){
    //    document.getElementById("shoppingCart").style.width = "0px";
        document.getElementById("shoppingCart").style.right = "-50%";
    }


    function findCart(arr, find) {
        var check = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].productID === find) {
                // __FOUND is set to the index of the element
                check = false
                break;
            }
        }
        return check;
    }
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        let add=0;
        for (var i = 0; i < cart.length; i++) {
            add += parseInt(cart[i].price.toFixed(2))
            setTotalCost(add.toFixed(2))
            
        }
    });
    
    
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    function handleShow(index) {
        setShow(true)
        setIndexCartDelete(index)
    }
    function handleClose() {
        setShow(false)
    }
    function handleCloseAndDelete() {
        setShow(false)
        alert(cart[indexCartDelete].productName +" removed from cart!")
        cart.splice(indexCartDelete, 1)
        
    }
    return (
        //onSubmit={ilterdata(OppoList)}
        //
        //class="oppoNFavTitle"

        <div className="App" style={{ backgroundColor:'#f5f5f5'}}>
            {/*<InternNavBar />*/}

            <NavBar  />
            <div className="main">
                <h1>Products</h1>
                {/*{cart.map((row, key) => <h1 >{productList[0].productName}</h1>)}*/}
                <h1 >{cart.length}</h1>
                <div class="myDIV">Hover over me.</div>
                <div class="hide">I am shown when someone hovers over the div above.</div>

                <div class="productsWidth">
                    <Row style={{ width: '80%',marginLeft:'10%'}}>
                        {productList.map((row, index,key) =>
                            
                            <Col xs={4} md={3} >
                                <Card className ="productsCard" >
                                    <Card.Img variant="top" src={row["picturePath"]} />
                                    <Card.Body style={{ textAlign: 'left', paddingTop: '5px', paddingLeft: '10px' }}>
                                        <Card.Title style={{ fontSize: '17px', marginBottom: '5px' }}>{row["productName"]}</Card.Title>
                                        <Card.Text>
                                            <div style={styles.stars}>
                                                {stars.map((_, index) => {
                                                    return (
                                                        <FontAwesomeIcon icon={faStar} key={index}
                                                            size="sm"
                                                            color={row["rating"] > index ? colors.orange : colors.grey}
                                                            style={{
                                                                marginRight: 3,
                                                                cursor: "pointer"
                                                            }}></FontAwesomeIcon>)})}

                                            </div>${row["price"].toFixed(2)}
                                            <button className="productCardQuickView" onClick={() => update(index)}>Quick View</button>
                                        </Card.Text>
                                        
                                        
                                        
                                    </Card.Body>
                                    
                                        
                                    
                                 </Card>
                            </Col>
                                
                    )}
                </Row>
                </div>
                <div className="shoppingCart" id="shoppingCart">
                    <div class="cartTopSection">
                        {/*<button class="cartCloseButton" onClick={() => hideCart()}><FontAwesomeIcon icon={faXmark} size='2xl'>lol</FontAwesomeIcon></button>*/}
                        <CloseButton className="cartCloseButton"  onClick={() => hideCart()}/>
                    </div>

                    <div class="cartMiddleSection">
                        
                        {/*<CartDatatable data={cart}/>*/}
                        {
                            cart.map((row, i, key) =>
                                <div class="singleCardInCart">
                                    <div class="singleCardInCartLeftSection">
                                        <div>
                                            <img src={row["picturePath"]} style={{ width: '80%', height: '80%', margin: '10%' }} />
                                        </div>
                                    </div>
                                    <div class="singleCardInCartRightSection">
                                        <div style={{ textAlign: 'left', paddingTop: '10px', paddingLeft: '10px' }}>
                                            <h4>{row["productName"]}</h4>
                                            <h6>${row["price"].toFixed(2)}</h6>
                                            <h6>{i }</h6>
                                            {/*<Button style={{ position: "absolute", right: '15px', bottom: '15px' }} onClick={() => deleteProduct(i)} variant="danger">Delete</Button>*/}
                                            <Button style={{ position: "absolute", right: '15px', bottom: '15px' }} onClick={() => handleShow(i)} variant="danger">Delete</Button>
                                        </div>
                                    </div>
                                </div>

                            )}
                    </div>
                    <div class="cartBottomSection">
                        <h2>total cost: ${totalCost}</h2>
                    </div>

                </div>



                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to remove this item from cart?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            No!
                        </Button>
                        <Button variant="primary" onClick={handleCloseAndDelete}>Yes please!</Button>
                    </Modal.Footer>
                </Modal>
                <button class="shoppingCartButton" onClick={() => showCart()}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <button id="scrollUp" class="scrollToTop" onClick={scrollToTop} style={{ opacity: showScrollBtn ? 100 : 0 }}><FontAwesomeIcon icon={faArrowUpLong} class="arrowUp" /></button>

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
export default HomePage;
