import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import CenteredModal, { Modalprop } from '../Shared/Modal/Modal';
import Checkbox from '../Shared/Checkbox/Checkbox';
import { productController } from '../../controllers/product.controller';
import { inject, observer } from 'mobx-react';
import { GlobalProps } from '../../App';
import ProductCard from "../Shared/ProductCard/ProductCard";

const modalProps: Modalprop[] = [
    {text: 'Black', color: 'black'},
    {text: 'Blue', color: 'blue'},
    {text: 'Brown', color: 'brown'},
    {text: 'Burgundy', color: '#800020'},
    {text: 'Charcoal', color: '#36454f'},
    {text: 'Cream', color: '#fffdd0'},
    {text: 'Green', color: 'green'},
    {text: 'Gold', color: 'gold'},
    {text: 'Grey', color: 'grey'},
    {text: 'Magenta', color: 'magenta'},
    {text: 'Maroon', color: 'maroon'},
    {text: 'Mustard', color: ' #ffdb58'},
    {text: 'Navy Blue', color: 'blue'},
    {text: 'Off White', color: '#f5f2d0'},
    {text: 'Olive', color: 'olive'},
    {text: 'Orange', color: 'orange'},
    {text: 'Peach', color: '#ffe5b4'},
    {text: 'Pink', color: 'pink'},
    {text: 'Purple', color: 'purple'},
    {text: 'Red', color: 'red'},
    {text: 'Rust', color: '#b7410e'},
    {text: 'Teal', color: '#008080'},
    {text: 'Torquoise blue', color: '#40E0D0'},
    {text: 'White', color: 'white'},
    {text: 'Yellow', color: 'yellow'}
];

const sizeProps: Modalprop[] = [
    {text: 'XS', display: 'none'},
    {text: 'S', display: 'none'},
    {text: 'M', display: 'none'},
    {text: 'L', display: 'none'},
    {text: 'XL', display: 'none'},
    {text: '2XL', display: 'none'},
    {text: '3XL', display: 'none'},
    {text: '4XL', display: 'none'},
    {text: '5XL', display: 'none'}
];

const fabricProps: Modalprop[] = [
    {text: 'Blended', display: 'none'},
    {text: 'Cotton', display: 'none'},
    {text: 'Wool', display: 'none'},
    {text: 'Lenin', display: 'none'},
    {text: 'Nylon', display: 'none'},
    {text: 'Polyester', display: 'none'},
    {text: 'Silk', display: 'none'}
];

const neckProps: Modalprop[] = [
    {text: 'High Neck', display: 'none'},
    {text: 'Hood', display: 'none'},
    {text: 'Round Neck', display: 'none'},
    {text: 'Scoop Neck', display: 'none'},
    {text: 'V-Neck', display: 'none'},
    {text: 'Polo Collar', display: 'none'}
];

const Products: React.FC<GlobalProps> = (props: GlobalProps) => {

    function viewProduct() {
        productController.getAllProduct();
        console.log("Products", props.store!.productStore.getEntities);
    }

    useEffect(() => {
        viewProduct();
    }, []);
    const [modalShow, setModalShow] = React.useState(false);
    const [modal1Show, set1ModalShow] = React.useState(false);
    const [modal2Show, set2ModalShow] = React.useState(false);
    const [modal3Show, set3ModalShow] = React.useState(false);

    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="products-container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="panel">
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Color:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>
                                                <button className="circle" style={{backgroundColor: 'black'}}/>
                                                Black</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                <button className="circle" style={{backgroundColor: 'blue'}}/>
                                                Blue</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                <button className="circle" style={{backgroundColor: 'brown'}}/>
                                                Brown</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                <button className="circle" style={{backgroundColor: '#800020'}}/>
                                                Burgundy</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                {
                                                    <CenteredModal
                                                        show={modalShow}
                                                        onHide={() => setModalShow(false)}
                                                        data={modalProps}
                                                    />
                                                }

                                                <button type="submit" className="view"
                                                        onClick={() => setModalShow(true)}>View More
                                                </button>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Fabric:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Blended</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Cotton</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Wool</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Lenin</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                {
                                                    <CenteredModal
                                                        show={modal1Show}
                                                        onHide={() => set1ModalShow(false)}
                                                        data={fabricProps}
                                                    />
                                                }

                                                <button type="submit" className="view"
                                                        onClick={() => set1ModalShow(true)}>View More
                                                </button>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Size:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>XS</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>S</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>M</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>L</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                {
                                                    <CenteredModal
                                                        show={modal2Show}
                                                        onHide={() => set2ModalShow(false)}
                                                        data={sizeProps}
                                                    />
                                                }

                                                <button type="submit" className="view"
                                                        onClick={() => set2ModalShow(true)}>View More
                                                </button>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Neck:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>High Neck</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Hood</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Round Neck</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Scoop Neck</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                {
                                                    <CenteredModal
                                                        show={modal3Show}
                                                        onHide={() => set3ModalShow(false)}
                                                        data={neckProps}
                                                    />
                                                }
                                                <button type="submit" className="view"
                                                        onClick={() => set3ModalShow(true)}>View More
                                                </button>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Length:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Longline</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Regular</Dropdown.Item><Checkbox/>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Occasion:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Casual</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Sports</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Ethnic</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Formal Wear</Dropdown.Item><Checkbox/>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Sleeves Length:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Long Sleeves</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Short Sleeves</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Sleeveless</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Three Quarter Sleeves</Dropdown.Item><Checkbox/>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Price:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Rs. 299 to Rs. 559</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Rs. 599 to Rs. 999</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Rs. 999 to Rs. 1999</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Rs. 1999 to Rs. 2999</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Rs. 2999 to Rs. 4900</Dropdown.Item><Checkbox/>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Rating:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>3.5 to 4.0</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>4.0 to 4.5</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>4.5 to 5.0</Dropdown.Item><Checkbox/>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                props.store!.productStore.getEntities.map((p, index) => {
                                    return (
                                        <div key={index}
                                             className="col-3 col-sm-3 col-md-3 dashboard__items-item__spacing">
                                            <ProductCard
                                                name={p.description}
                                                seller='Seller'
                                                oldPrice={p.old_price}
                                                newPrice={p.new_price}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};


export default inject('store')(observer(Products));
