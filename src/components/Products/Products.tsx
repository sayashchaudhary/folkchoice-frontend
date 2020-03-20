import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { DropdownButton, Dropdown} from 'react-bootstrap';
import CenteredModal from '../Shared/Modal/Modal';
import Checkbox from '../Shared/Checkbox/Checkbox';

const Landing: React.FC = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="products-container">
                <div className="row ">
                    <div className="col-md-3">
                        <div className="panel">
                            <div className="content">
                                <div className="row">
                                    <div className="text col-md-10">
                                        <h4>Color:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>
                                                <CenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    heading='Color'
                                                    text='color options will be coming'
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
                                        <h4>Fabric:</h4>
                                    </div>
                                    <div className="drop col-md-2">
                                        <DropdownButton id="dropdown-basic-button" title="">
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>
                                                <CenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    heading='fabric'
                                                    text='fabric options will be coming'
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
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>
                                                <CenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    heading='Size'
                                                    text='Size options will be coming'
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
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>Action</Dropdown.Item><Checkbox />
                                            <Dropdown.Item>
                                                <CenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    heading='Other Filter'
                                                    text='More filter options will be coming'
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
                        <h1><b>Products Title here.....</b></h1>


                    </div>
                </div>
            </div>
        </div>
    )
};


export default Landing;
