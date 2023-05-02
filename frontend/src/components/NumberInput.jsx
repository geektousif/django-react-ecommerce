const NumberInput = ({ value, onChange }) => {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => value > 1 && onChange(value - 1);
  return (
    <div class="h-10 w-32 m-4">
      <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          onClick={handleDecrement}
          class="focus:outline-none bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span class="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          disabled
        />
        <button
          data-action="increment"
          onClick={handleIncrement}
          class="focus:outline-none bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
