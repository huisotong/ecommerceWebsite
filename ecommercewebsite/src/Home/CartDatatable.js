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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowUpLong, faCartShopping, faShoppingBag, faShoppingCart, faXmark, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { pink } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CartDatatable({ data }) {
    const [OppoList, setOppoList] = useState([]);
    const columns = data[0] && Object.keys(data[0]);
    
    const [userID, setUserID] = useState(2);
    const [favList, setFavList] = useState([]);
    const [lol, setLol] = useState([]);
    const favColumns = favList[0] && Object.keys(favList[0]);
    const [test, setTest] = useState("0");
    const [wtf, setWtf] = useState([]);
    //const columns = OppoList[0] && Object.keys(OppoList[0]);
    //,CheckFavOppo
     //       UserID: userID
    
    
    return (
        <div>
        {
            data.map((row, i, key) =>
                <div class="singleCardInCart">
                    <div class="singleCardInCartLeftSection">
                        <div>
                            <img src={row["picturePath"]} style={{ width: '80%',height:'80%',margin:'10%' }} />
                        </div>
                    </div>
                    <div class="singleCardInCartRightSection">
                        <div style={{ textAlign:'left',paddingTop:'10px',paddingLeft:'10px' }}>
                            <h4>{row["productName"]}</h4>
                            <h6>${row["price"].toFixed(2)}</h6>
                            <Button style={{ position: "absolute" ,right:'15px',bottom:'15px'}} variant="danger">Delete</Button>
                        </div>
                    </div>
                </div>

            )
            }
        {/*    {*/}
        {/*    data.map((row, i, key) =>*/}
        {/*        <div >*/}
        {/*            <h6>Job ID: {row["productID"]}</h6>*/}
        {/*            <h4>{row["productName"]}</h4>*/}
        {/*            <h6>Price: {row["price"]}</h6>*/}
        {/*            {i === key.length - 1 ? <hr style={{ visibility: "hidden" }} /> : <hr />}*/}
        {/*        </div>*/}

        {/*    )*/}
        {/*}*/}
        
        
            </div>
            
        );
}
//<td><button>{row[columns[0]]}</button></td>
//addFav(checkFav(getFav()))
//, row[columns[0]]
//<td><button onClick={() => addFav( checkFav( row[columns[0]]) , row[columns[0]] ) }>{row[columns[0]]}</button></td>
//<td><button onClick={() => { addFav(testing(), row[columns[0]]); wtfTesting(row[columns[0]]) }}>{row[columns[0]]}</button></td>
//<td><button onClick={() => addFav(testing( wtfTesting(row[columns[0]]) ), row[columns[0]])}>{row[columns[0]]} {test}</button></td>
//row[columns[0]])
//<td><button onClick={() => addFav(testing(row[columns[0]],wtfTesting(row[columns[0]]) ), row[columns[0]])}>{row[columns[0]]} {test}</button></td>

