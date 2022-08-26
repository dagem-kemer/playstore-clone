import react from "react";
import "./output.css";
const Applogo = () => {
  return (
    <div>
      <div class="flex">
        <h1 class="text-6xl font-bold py-2">Instagram</h1>

        <div>
          <img
            class="grid justify-items-end rounded-3xl w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
          />
        </div>
      </div>
      <div class="py-8">
        <ul class="text-gray-500 flex">
          <li class="border-r border-gray-400 mr-8">170k reviews</li>
          <li class="border-r border-gray-400 mr-8">10M+ downloads</li>
          <li>Rated for 18+</li>
        </ul>
      </div>
      <div>
        <a
          href="/components.zip"
          download="component"
          class="mr-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full"
        >
          Install
        </a>
        <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
          Add to wishlist
        </button>
        <p class="mt-8">Available in your country</p>
      </div>
    </div>
  );
};
export default Applogo;
