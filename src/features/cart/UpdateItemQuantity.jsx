import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="md:gap:3 flex items-center gap-1">
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(decreaseItemQQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
