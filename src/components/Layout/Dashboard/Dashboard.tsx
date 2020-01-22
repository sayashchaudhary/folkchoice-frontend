import React from 'react';
import Location from '../../../assets/images/location.png';
import Download from '../../../assets/images/download.jpeg';

const Dashboard: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="dashboard">
                <div className="row">
                    <div className="col-8">
                        <div className="dashboard__text">
                            <h3>Hi there,</h3><br />
                            <h1>Welcome to <strong>FOLK CHOICE</strong></h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br/>
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen <br/>
                            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with <br/>
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="dashboard__address">
                            <div className="dashboard__address-card">
                                <img src={Location} alt="Location" className="dashboard__address-card__image"/>
                                <div className="dashboard__address-card__address">
                                    John Doe<br/>
                                    Street addrresses: 445 Mount Eden<br />
                                    Road, Mount Eden, Auckland.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard__carousel">
                    <div className="dashboard__carousel-card">
                        <img src={Download} alt="img" className="dashboard__carousel-card__image" />
                    </div>
                    <div className="dashboard__carousel-card">
                        <img src={Download} alt="img" className="dashboard__carousel-card__image" />
                    </div>
                    <div className="dashboard__carousel-card">
                        <img src={Download} alt="img" className="dashboard__carousel-card__image" />
                    </div>
                </div>
                <div className="dashboard__items">
                    <div className="dashboard__items-text">
                        <h4>Today, we present you:</h4><br />
                        <h2><strong>Steal on Cosmetics</strong></h2>
                    </div>
                    <div className="dashboard__items-item">
                        <div className="row">
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard__items-text">
                        <h4>Today, we present you:</h4><br />
                        <h2><strong>Crazy Deals on Clothings</strong></h2>
                    </div>
                    <div className="dashboard__items-item">
                        <div className="row">
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                            <div className="col-md-3 align">
                                <div className="dashboard__items-item__card">
                                    <img src={Download} alt="img" className="dashboard__items-item__card-image" />
                                    <h4>Lakme 9 to 5 CC - Honey</h4>
                                    <p>Seller - Lalita Sales</p>
                                    <h5><del>521</del></h5><h2>349</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;