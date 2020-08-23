import React from "react";

const SearchField = ({ searchChange, handleChange }) => {
  return (
    <div className="pa1">
      <input
        className="pa2 ba  bg-gray"
        style={{
          margin: "0",
          border: "none",
          borderRadius: '2px',
          width: "50%",
          padding: "10px",
          float: "center",
          fontSize: "16px",
        }}
        type="search"
        placeholder="to do list"
        onChange={searchChange}
        onKeyUp={handleChange}
      />
    </div>
  );
};
export default SearchField;
