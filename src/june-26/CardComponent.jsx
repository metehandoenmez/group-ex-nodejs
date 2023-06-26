import { useParams } from "react-router-dom";

export default function CardComponent({
  content,
  index,
  updateItem,
  deleteItem,
}) {
  let { id } = useParams();
  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(ev) => {
          updateItem(index, ev.target.value);
        }}
      />
      <button
        onClick={() => {
          deleteItem(index);
        }}
      >
        Delete Me
      </button>
      <br />
      {id}
    </div>
  );
}
