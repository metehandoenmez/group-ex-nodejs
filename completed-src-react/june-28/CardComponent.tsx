import { useParams } from "react-router-dom";

type CardComponentProps = {
  content: string;
  index?: number;
  updateItem: Function;
  deleteItem: Function;
};

export default function CardComponent({
  content,
  index,
  updateItem,
  deleteItem,
}: CardComponentProps) {
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
