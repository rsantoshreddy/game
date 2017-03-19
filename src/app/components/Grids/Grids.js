import React from 'react';

const renderGrids = (grids, handleGridSelection) => {
    if (grids) {
        return grids.map((properties, idx) => {
            return <tr key={idx}>{renderColumns(properties, handleGridSelection, idx)}</tr>
        });
    }
    return null;
};

const renderColumns=(columns, handleGridSelection, pIdx)=>{
   return columns.map((prop, idx)=>{
            return <td key={idx} className={"grid-"+prop} onClick={() => handleGridSelection(prop, pIdx, idx)}></td>
        });
};

const Grids = (props) => {
    const { grids, handleGridSelection } = props;
    return ( <table>
                <tbody>
                    {renderGrids(grids, handleGridSelection)}
                </tbody>
        </table>
    );
};

export default Grids;
