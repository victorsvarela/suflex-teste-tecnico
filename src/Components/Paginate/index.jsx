import ReactPaginate from "react-paginate";

const Paginate = ({ pageCount, setPageOffset, pageOffset }) => {
  const handlePageChange = (event) => {
    setPageOffset(event.selected + 1);
  };
  return (
    <ReactPaginate
      pageCount={pageCount}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      renderOnZeroPageCount={null}
      onPageChange={(e) => handlePageChange(e)}
      containerClassName="pagination"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      forcePage={pageOffset - 1}
    />
  );
};

export default Paginate;
