import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/slices/savedSlice";

export const DynamicPagination = (props) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const saved = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/${props.pageName}?_limit=20&_page=${currentPage}`
        )
        .then((response) => {
          setItems([...items, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      200
    ) {
      setFetching(true);
    }
  };

  return (
    <ul>
      {props.pageName === "posts" &&
        items.map((item) => (
          <li
            key={item.id}
            className="bg-neutral-700/50 mb-2 relative rounded-lg p-3"
          >
            <div className="text-xl font-bold mb-2">{item.title}</div>
            <div className="mb-2">{item.body}</div>
            <button
              onClick={(e) => {
                dispatch(actions.toggleToSaved(item));
              }}
              className={
                saved.some((e) => e.id === item.id)
                  ? "absolute top-4 right-4 text-black"
                  : "absolute top-4 right-4 text-white"
              }
            >
              <BsFillBookmarkFill style={{ pointerEvents: "none" }} />
            </button>
          </li>
        ))}
      {props.pageName === "comments" &&
        items.map((item) => (
          <li key={item.id} className="bg-neutral-700/50 mb-2 rounded-lg p-3">
            <div className="text-xl font-bold mb-2">{item.name}</div>
            <div>{item.email}</div>
            <div>{item.body}</div>
          </li>
        ))}
      {props.pageName === "albums" &&
        items.map((item) => (
          <li key={item.id} className="bg-neutral-700/50 mb-2 rounded-lg p-3">
            <div className="text-xl font-bold">{item.title}</div>
          </li>
        ))}
      {props.pageName === "photos" &&
        items.map((item) => (
          <li key={item.id} className="bg-neutral-700/50 mb-2 rounded-lg p-3">
            <div className="text-xl font-bold mb-2">{item.title}</div>
            <img src={item.url} alt={item.title} width={100} />
          </li>
        ))}
      {props.pageName === "todos" &&
        items.map((item) => (
          <li key={item.id} className="bg-neutral-700/50 mb-2 rounded-lg p-3">
            <div className="text-xl font-bold">{item.title}</div>
          </li>
        ))}
      {props.pageName === "users" &&
        items.map((item) => (
          <li key={item.id} className="bg-neutral-700/50 mb-2 rounded-lg p-3">
            <div className="text-xl font-bold mb-2">{item.name}</div>
            <div>{item.username}</div>
            <div>{item.email}</div>
            <div>{item.address.street}</div>
            <div>{item.address.suite}</div>
            <div>{item.address.city}</div>
            <div>{item.address.zipcode}</div>
            <div>{item.address.geo.lat}</div>
            <div>{item.address.geo.lng}</div>
          </li>
        ))}
    </ul>
  );
};
