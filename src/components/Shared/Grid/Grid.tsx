import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";

function ModalGrid(props) {
    return (
        <div className="grid">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <button className="grid__circle" style={{backgroundColor: `${props.color}`, display: `${props.display}`}}/>
                    </div>
                    <div className="col-md-6 grid__text">
                        <h6>{props.text}</h6><br/>
                    </div>
                    <div className="col-md-4">
                        <Checkbox className="check"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalGrid;
