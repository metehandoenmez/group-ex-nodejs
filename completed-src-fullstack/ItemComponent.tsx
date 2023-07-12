type ItemComponentType = {
  text: String;
  id: Number;
  deleteItem: Function;
};

export default function ItemComponent({
  text,
  id,
  deleteItem,
}: ItemComponentType) {
  return (
    <div>
      <span>{text}</span>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}
