"use client";

import { useState } from "react";

const NewColumnForms = () => {
  const [columnName, setColumnName] = useState(""); // State to store input value

  const handleNewColumn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    alert(columnName) // You can send this to API or use in your logic
  };

  return (
    <form onSubmit={handleNewColumn} className="max-w-xs">
      <label className="block mb-2">
        <span className="text-gray-600 block">Column name:</span>
        <input
          type="text"
          placeholder="new column name"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)} // Update state when input changes
          className="border border-gray-300 p-2 w-full"
        />
      </label>
      <button
        className="w-full block cursor-pointer bg-blue-500 text-white p-2 rounded"
        type="submit"
      >
        Create column
      </button>
    </form>
  );
};

export default NewColumnForms;
