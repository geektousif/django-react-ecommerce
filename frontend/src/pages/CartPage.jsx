import { useSelector } from "react-redux";
import Message from "../components/Message";
import CartItem from "../components/CartItem";
const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      {cartItems.length === 0 ? (
        <Message alert_type="info">Cart is Empty</Message>
      ) : (
        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="mx-auto max-w-3xl">
              <header class="text-center">
                <h1 class="text-xl font-bold sm:text-3xl">Your Cart</h1>
              </header>

              <div class="mt-8">
                <ul class="space-y-4">
                  {cartItems.map((item) => (
                    <CartItem item={item} />
                  ))}
                </ul>

                <div class="mt-8 flex justify-end border-t  pt-8">
                  <div class="w-screen max-w-lg space-y-4">
                    <div class="flex justify-between">
                      <dt>TOTAL ITEMS</dt>
                      <dd>
                        {cartItems.reduce(
                          (acc, curr) => acc + curr.cartQuantity,
                          0
                        )}
                      </dd>
                    </div>
                    <dl class="space-y-0.5 text-sm ">
                      <div class="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>
                          $
                          {cartItems.reduce(
                            (acc, curr) => acc + curr.cartQuantity * curr.price,
                            0
                          )}
                        </dd>
                      </div>

                      {/* <div class="flex justify-between">
                        <dt>VAT</dt>
                        <dd>£25</dd>
                      </div>

                      <div class="flex justify-between">
                        <dt>Discount</dt>
                        <dd>-£20</dd>
                      </div>

                      <div class="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>£200</dd>
                      </div> */}
                    </dl>
                    {/* TODO dark theme */}
                    <div class="flex justify-end">
                      <span class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>

                        <p class="whitespace-nowrap text-xs">
                          2 Discounts Applied
                        </p>
                      </span>
                    </div>

                    <div class="flex justify-end">
                      <button
                        disabled={cartItems.length === 0}
                        class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CartPage;
