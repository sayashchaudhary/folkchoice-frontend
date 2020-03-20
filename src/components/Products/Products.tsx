import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Drop, { DropdownProps } from '../Shared/Dropdown/Dropdown';
import Modal from "../Shared/Modal/Modal";

const ColorProps: DropdownProps[] = [
    {
        item1: 'black',
        item2: 'blue',
        item3: 'brown',
        item4: 'red',
        item5: 'orange',
        item6: 'violet',
        modalText: 'Colors'
    }
];

const SizeProps: DropdownProps[] = [
    {
        item1: '4XL',
        item2: '3XL',
        item3: '2XL',
        item4: 'XL',
        item5: 'L',
        item6: 'M',
        modalText: 'Size will be displayed here'
    }
];

const FabricsProps: DropdownProps[] = [
    {
        item1: 'cotton',
        item2: 'silk',
        item3: 'pant',
        item4: 'coat',
        item5: 'orange',
        item6: 'violet',
        modalText: 'Fabrics will be displayed here'
    }
];

const Products: React.FC = () => {
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
                                        {
                                            ColorProps.map(t => {
                                                return (
                                                    <div>
                                                        <Drop item1={t.item1} item2={t.item2} item3={t.item3}
                                                              item4={t.item4} item5={t.item5} item6={t.item6}
                                                              modalText={t.modalText}/>
                                                    </div>
                                                );
                                            })
                                        }
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
                                        {
                                            SizeProps.map(t => {
                                                return (
                                                    <div>
                                                        <Drop item1={t.item1} item2={t.item2} item3={t.item3}
                                                              item4={t.item4} item5={t.item5} item6={t.item6}
                                                              modalText={t.modalText}/>
                                                    </div>
                                                );
                                            })
                                        }
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
                                        {
                                            FabricsProps.map(t => {
                                                return (
                                                    <div>
                                                        <Drop item1={t.item1} item2={t.item2} item3={t.item3}
                                                              item4={t.item4} item5={t.item5} item6={t.item6}
                                                              modalText={t.modalText}/>
                                                    </div>
                                                );
                                            })
                                        }
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
                                        {
                                            ColorProps.map(t => {
                                                return (
                                                    <div>
                                                        <Drop item1={t.item1} item2={t.item2} item3={t.item3}
                                                              item4={t.item4} item5={t.item5} item6={t.item6}
                                                              modalText={t.modalText}/>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-9">
                        <h1><b>Products Title here.....</b></h1>
                        <Modal/>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Products;
