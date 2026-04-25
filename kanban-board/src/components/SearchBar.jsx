import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/boardSlice";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const debounced = useDebounce(value, 300);

  useEffect(() => {
    dispatch(setSearch(debounced));
  }, [debounced]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search cards..."
      style={{ margin: "10px", padding: "8px", width: "300px" }}
    />
  );
};

export default SearchBar;