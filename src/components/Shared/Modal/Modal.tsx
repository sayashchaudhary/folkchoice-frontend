import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Grid from '../Grid/Grid'

export interface Modalprop {
    text: string;
}

function CenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Grid text={props.text}/>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center model">
                    <Button onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}


export default CenteredModal;
