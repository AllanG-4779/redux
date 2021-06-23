import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHistory, addMath, addScience } from "../Redux/cake/booksActions";

function MyBooks() {
  const math = useSelector((state) => state.book.math);
  const science = useSelector((state) => state.book.science);
  const history = useSelector((state) => state.book.history);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        My library{" "}
        <span style={{ color: "green" }}>
          Total:{" "}
          <span style={{ color: "red" }}>{math + science + history} Books</span>
        </span>
      </h1>

      <h4>History: {history}</h4>
      <h4>Science: {science}</h4>
      <h4>Mathematics: {math}</h4>
      <button
        onClick={() =>
          dispatch(addMath(parseInt(prompt("Enter the number of Math books"))))
        }
      >
        Add Maths
      </button>
      <button
        onClick={() =>
          dispatch(
            addHistory(parseInt(prompt("Enter the number of History books")))
          )
        }
      >
        Add History
      </button>
      <button
        onClick={() =>
          dispatch(
            addScience(parseInt(prompt("Enter the number of Science books")))
          )
        }
      >
        Add Science
      </button>
    </div>
  );
}

export default MyBooks;
