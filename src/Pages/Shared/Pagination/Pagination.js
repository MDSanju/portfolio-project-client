import React, { useState } from "react";

function PaginationComponent(props) {
  // Get the data to paginate
  const data = props.data;

  // Set the number of items per page
  const itemsPerPage = 10;

  // Use the useState hook to store the current page and an array of data for each page
  const [currentPage, setCurrentPage] = useState(1);
  const [pagedData, setPagedData] = useState([]);

  // Use the useEffect hook to paginate the data when the component mounts or the data changes
  React.useEffect(() => {
    // Calculate the number of pages needed
    const numPages = Math.ceil(data.length / itemsPerPage);

    // Create an array of arrays, with each inner array containing the items for a single page
    const pages = Array.from({ length: numPages }, (_, i) =>
      data.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
    );

    // Set the paged data to the appropriate page
    setPagedData(pages[currentPage - 1]);
  }, [data, currentPage, itemsPerPage]);

  // Create a function to handle changing the page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Render the pagination component
  return (
    <div>
      {/* Display the current page of data */}
      {pagedData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      {/* Display the pagination controls */}
      <div>
        {/* Only show the "prev" button if we're not on the first page */}
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Prev
          </button>
        )}

        {/* Show the page numbers */}
        {Array.from(
          { length: Math.ceil(data.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              disabled={i + 1 === currentPage}
            >
              {i + 1}
            </button>
          )
        )}

        {/* Only show the "next" button if we're not on the last page */}
        {currentPage < Math.ceil(data.length / itemsPerPage) && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
