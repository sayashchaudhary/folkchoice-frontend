import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Grid from '../Grid/Grid';
import { ModalProps } from "../Grid/Grid";

const ColorProps: ModalProps[] = [
    {
        text: 'Colors'
    },
    {
        text: 'Colors'
    },
    {
        text: 'Colors123'
    },
    {
        text: 'Colors'
    }
];

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
                    <div className="row modal_content text-center">
                        <div className="col-md-6">
                            {
                                ColorProps.map(t => {
                                    return (
                                        <div>
                                            <Grid text={t.text}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="col-md-6">
                            <Grid />
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
