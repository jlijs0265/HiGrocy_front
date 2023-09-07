import propTypes from "prop-types";
import "./Pagination.css";
import useProcess from "../hooks/process";
import useModal from "../hooks/modal";

const ModalPagination = (isModal) => {
  const { useModalPaginationSelector, setModalPagination } = useModal();

  let modal_pagination = useModalPaginationSelector();
  const totalPageModal = modal_pagination.endPage;
  const currentPageModal = modal_pagination.criteria.modal_pageNum;
  const limitModal = modal_pagination.pageCount;
  const currentSetModal = Math.ceil(currentPageModal / limitModal);
  const startPageModal = limitModal * (currentSetModal - 1) + 1;
  const lastSetModal = Math.ceil(totalPageModal / limitModal);
  const numberOfPageForSetModal =
    currentSetModal === lastSetModal && totalPageModal % limitModal !== 0
      ? totalPageModal % limitModal
      : limitModal;
  console.log();
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {modal_pagination.prev && (
            <li className="page-item">
              <a className="page-link" href="#">
                <span>&laquo;</span>
              </a>
            </li>
          )}
          {Array(numberOfPageForSetModal)
            .fill(startPageModal)
            .map((value, index) => value + index)
            .map((modal_pageNum) => {
              return (
                <li
                  key={modal_pageNum}
                  className={`page-item ${
                    currentSetModal === modal_pageNum ? "active" : ""
                  }`}
                >
                  <a
                    className="page-link cursor-pointer"
                    onClick={() => {
                      setModalPagination(modal_pageNum);
                    }}
                  >
                    {modal_pageNum}
                  </a>
                </li>
              );
            })}
          {modal_pagination.next && (
            <li className="page-item">
              <a
                className="page-link"
                href={`/raw_material/${lastSetModal + 1}`}
              >
                <span>&raquo;</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default ModalPagination;

ModalPagination.defaultProps = {
  isModal: false,
};
