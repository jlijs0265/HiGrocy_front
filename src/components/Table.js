import { PropTypes } from "prop-types";

const Table = ({ rowNum, colNum }) => {
    return (
        <div className="table-responsive container">
            <table className="table table-bordered border-secondary rawTable">
                <thead>
                    <tr>
                        {Array(colNum).fill(1).map((value, index) => value + index).map((colNum) => { return <th key={colNum}>{colNum}</th> })}
                    </tr>
                </thead>
                <tbody className="rawbody">
                    <tr className="rawitem">
                        {Array(rowNum).fill(1).map((value, index) => value + index).map((rowNum) => { return <td key={rowNum}>{rowNum}</td> })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

Table.defaultProps = {
    rowNum: 5,
    colNum: 5,
}

export default Table;
