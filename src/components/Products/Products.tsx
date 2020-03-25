import React, {useEffect} from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import CenteredModal, {Modalprop} from '../Shared/Modal/Modal';
import Checkbox from '../Shared/Checkbox/Checkbox';
import {productController} from '../../controllers/product.controller';
import {inject, observer} from 'mobx-react';
import {GlobalProps} from '../../App';
import ProductCard from "../Shared/ProductCard/ProductCard";


const modalProps: Modalprop[] = [
    {
        text: 'blue'
    },
    {
        text: 'red'
    },
    {
        text: 'yellow'
    },
    {
        text: 'green'
    }
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
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
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
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                <CenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    text=''
                                                />
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
                                        <h4>Size:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                <CenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    text=''
                                                />
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
                                        <h4>Other Filter:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox/>
                                            <Dropdown.Item>
                                                <CenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    text=''
                                                />
                                                <button type="submit" className="view"
                                                        onClick={() => setModalShow(true)}>View More
                                                </button>
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
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
