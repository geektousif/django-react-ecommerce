import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <li key={item.id} class="flex items-center gap-4">
        <img src={item.image} alt="" class="h-16 w-16 rounded object-cover" />

        <div>
          <h3>{item.name}</h3>

          <dl class="mt-0.5 space-y-px text-sm text-gray-600">
            <div>
              <dt class="inline">Rate:</dt>{" "}
              <dd class="inline">${item.price}</dd>
            </div>
          </dl>
          {/*
      <div>
        <dt class="inline">Color:</dt>
        <dd class="inline">White</dd>
      </div>
    </dl> */}
        </div>

        <div class="flex flex-1 items-center justify-end gap-2">
          <div>${item.cartQuantity * item.price}</div>

          <label for="Line1Qty" class="sr-only">
            {" "}
            Quantity{" "}
          </label>
          {/* TODO update counter */}
          <select className="max-w-xs select select-bordered">
            <option selected disabled>
              {item.cartQuantity}
            </option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
              <option value={x}>{x}</option>
            ))}
          </select>

          <button
            onClick={() => handleRemove(item.id)}
            class="text-gray-600 transition hover:text-red-600"
          >
            <span class="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
