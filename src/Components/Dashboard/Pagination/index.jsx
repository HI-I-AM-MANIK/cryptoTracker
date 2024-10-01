import React from "react";
import "./style.css";
import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange, totalPages }) {
  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={totalPages} // Pass the calculated total pages here
        page={page}
        onChange={handlePageChange} // Corrected onChange handler
      />
    </div>
  );
}
