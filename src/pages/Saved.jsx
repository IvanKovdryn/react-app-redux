import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/slices/savedSlice";

export const Saved = () => {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.reducer);
  return (
    <>
      {saved.length > 0 ? (
        saved.map((item) => (
          <div
            key={item.id}
            className="mb-3 relative bg-neutral-700/50 rounded-lg p-3"
          >
            <div>
              <span className="text-lg text-bold mx-1">Title:</span>
              {item.title}
            </div>
            <div>
              <span className="text-lg text-bold mx-1">Body:</span> {item.body}
            </div>
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
          </div>
        ))
      ) : (
        <div>Saved is empty</div>
      )}
    </>
  );
};
