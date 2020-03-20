import React from 'react';
import { Modal } from 'react-bootstrap';
//
// export interface MarketProps {
//     imageUrl?: string;
//     shop: string;
//     category: string;
//     id: number
// }

function CenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<h4>Centered Modal</h4>*/}
                <p>
                    {props.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}


export default CenteredModal;
