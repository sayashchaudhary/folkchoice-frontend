import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import CenteredModal, { Modalprop } from '../Shared/Modal/Modal';
import Checkbox from '../Shared/Checkbox/Checkbox';
import { productController } from '../../controllers/product.controller';
import { inject, observer } from 'mobx-react';
import { GlobalProps } from '../../App';
import ProductCard from "../Shared/ProductCard/ProductCard";
import Footer from "../Shared/Footer/Footer";

const modalProps: Modalprop[] = [
    {text: 'black'},
    {text: 'blue'},
    {text: 'brown'},
    {text: 'burgundy'},
    {text: 'Charcoal'},
    {text: 'Cream'},
    {text: 'Green'},
    {text: 'Gold'},
    {text: 'Grey'},
    {text: 'Magenta'},
    {text: 'Maroon'},
    {text: 'Mustard'},
    {text: 'Navy Blue'},
    {text: 'Off White'},
    {text: 'Olive'},
    {text: 'Orange'},
    {text: 'Peach'},
    {text: 'Pink'},
    {text: 'Purple'},
    {text: 'Red'},
    {text: 'Rust'},
    {text: 'Teal'},
    {text: 'Torquoise blue'},
    {text: 'White'},
    {text: 'Yellow'}
];

const sizeProps: Modalprop[] = [
    {text: 'XS'},
    {text: 'S'},
    {text: 'M'},
    {text: 'L'},
    {text: 'XL'},
    {text: '2XL'},
    {text: '3XL'},
    {text: '4XL'},
    {text: '5XL'}
];

const fabricProps: Modalprop[] = [
    {text: 'Blended'},
    {text: 'Cotton'},
    {text: 'Wool'},
    {text: 'Lenin'},
    {text: 'Nylon'},
    {text: 'Polyester'},
    {text: 'Silk'}
];

const neckProps: Modalprop[] = [
    {text: 'High Neck'},
    {text: 'Hood'},
    {text: 'Round Neck'},
    {text: 'Scoop Neck'},
    {text: 'V-Neck'},
    {text: 'Polo Collar'}
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
                                            <Dropdown.Item>Black</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Blue</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Brown</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Burgundy</Dropdown.Item><Checkbox/>
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
                            <br />
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
                                                name={p.title}
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
