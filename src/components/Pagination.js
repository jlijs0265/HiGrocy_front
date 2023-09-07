import propTypes from 'prop-types';
import './Pagination.css';
import useProcess from '../hooks/process';

const Pagination = () => {
    const { usePaginationSelector, setPagination} = useProcess();

    let pagination = usePaginationSelector();
    const totalPage = pagination.endPage;
    const currentPage = pagination.criteria.pageNum;
    const limit = pagination.pageCount

    const currentSet = Math.ceil(currentPage / limit);
    const startPage = limit * (currentSet - 1) + 1; 
    const lastSet = Math.ceil(totalPage / limit); 
    const numberOfPageForSet = currentSet === lastSet && totalPage % limit !== 0 ? (totalPage % limit) : limit;

    return (
        <div className="d-flex justify-content-center">

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pagination.prev && <li className="page-item">
                            <a className="page-link" href="#">
                                <span>&laquo;</span>
                            </a>
                        </li>
                    }
                    {
                        Array(numberOfPageForSet).fill(startPage).map((value, index) => value + index).map((pageNum) => {
                            return <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
                                <a className="page-link cursor-pointer" onClick={()=> {setPagination(pageNum)}}>{pageNum}</a>
                            </li>
                        })
                    }
                    {
                        pagination.next && <li className="page-item">
                            <a className="page-link" href={`/raw_material/${lastSet + 1}`}>
                                <span>&raquo;</span>
                            </a>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
}





export default Pagination;