import propTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ currentPage, totalPage, limit }) => {

    const currentSet = Math.ceil(currentPage / limit);
    const startPage = limit * (currentSet - 1) + 1;
    const lastSet = Math.ceil(totalPage / limit);
    const numberOfPageForSet = currentSet === lastSet && totalPage % limit !== 0 ? totalPage % limit : limit;


    return (
        <div className="d-flex justify-content-center">

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link">
                            <span>&laquo;</span>
                        </a>
                    </li>
                    {
                        Array(numberOfPageForSet).fill(startPage).map((value, index) => value + index).map((pageNum) => {
                            return <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
                                <div className="page-link cursor-pointer">{pageNum}</div>
                            </li>
                        })
                    }
                    <li className="page-item">
                        <a className="page-link">
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

Pagination.propTypes = {
    currentPage: propTypes.number,
    totalPage: propTypes.number,
    limit: propTypes.number,
}

Pagination.defaultProps = {
    limit: 5,
    currentPage: 1,
    totalPage: 10,
}

export default Pagination;