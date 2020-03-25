import React from 'react';

const Checkbox: React.FC = () => {
    return (
        <>
            <label className="box">
                <input type="checkbox"/>
                <span className="checkmark"/>
            </label>
        </>
    );
};

export default Checkbox;
