import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Grid from '../Grid/Grid'

export interface Modalprop {
    text: string;
    color?: string;
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
                            {
                                props.data.slice(0,(props.data.length)/2).map(d => (
                                    <Grid text={d.text} color={d.color}/>
                                ))
                            }
                        </div>
                        <div className="col-md-6">
                            {
                                props.data.slice((props.data.length)/2).map(d => (
                                    <Grid text={d.text} color={d.color}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center model">
                    <Button>Submit</Button><br/><br/>
                    <Button onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}


export default CenteredModal;
