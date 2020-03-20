import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import CenteredModal from '../Modal/Modal';
import Checkbox from '../Checkbox/Checkbox';

export interface DropdownProps {
    item1: string,
    item2: string,
    item3: string,
    item4: string,
    item5: string,
    item6: string,
    modalText: string;
}

const DropMenu:React.FC<DropdownProps> = (props: DropdownProps) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="">
                <Dropdown.Item>{props.item1}</Dropdown.Item><Checkbox/>
                <Dropdown.Item>{props.item2}</Dropdown.Item><Checkbox/>
                <Dropdown.Item>{props.item3}</Dropdown.Item><Checkbox/>
                <Dropdown.Item>{props.item4}</Dropdown.Item><Checkbox/>
                <Dropdown.Item>{props.item5}</Dropdown.Item><Checkbox/>
                <Dropdown.Item>{props.item6}</Dropdown.Item><Checkbox/>
                <Dropdown.Item>
                    <CenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        text={props.modalText}
                    />
                    <button type="submit" className="view"
                            onClick={() => setModalShow(true)}>View More
                    </button>
                </Dropdown.Item>
            </DropdownButton>
        </div>
    )
};

export default DropMenu;
