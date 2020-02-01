import React from 'react';
import Tiles, {TilesProps} from "../Shared/Tiles/Tiles";

const dummyTile: TilesProps[] = [
    {caption: 'Him'},
    {caption: 'Her'},
];

const Kids: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    dummyTile.map(c => {
                        return (
                            <div className="col-6 col-sm-6 col-md-6">
                                <Tiles caption={c.caption}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Kids;
