import React, { useState } from "react";
import "./output.css";
import StarRating from "./starRate";

const Appreview = () => {
  const [reviewform, showreviewform] = useState(false);

  return (
    <div>
      <div>
        {!reviewform && (
          <button
            onClick={() => showreviewform(!reviewform)}
            class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded mt-6"
          >
            Review this app
          </button>
        )}
        {reviewform && <StarRating />}
        <br></br>
        {reviewform ? (
          <div class="mt-4">
            <input
              type="text"
              id="large-input"
              class="ml-8 mt-4 block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>

            <button
              onClick={() => showreviewform(!reviewform)}
              class=" ml-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
            >
              Save Review
            </button>
          </div>
        ) : null}
      </div>
      <div class="py-8">
        <h3 class="font-bold text-2xl">Rates and reviews</h3>
      </div>
      <div>
        <h5 class="font-bold">Yeabsira Abraham</h5>
        <p class="mb-2">★★★☆☆</p>
        <p class="mb-2">
          Experience of creating a reel is a torture. It's about 50% chance when
          you add a clip to get the error "could not add clip". If you try many
          times and manage to add it, then fitting the clip to the music is
          nearly impossible. First, you get errors "something went wrong" all
          the time. Second, if you finally manage to do it in the editor, then
          in the preview *suddenly* the video doesn't match the music as it does
          during editing. It's incredibly frustrating to spend hours to create a
          10sec video
        </p>
        <h5 class="font-bold">Samuel alemayehu</h5>
        <p class="mb-2">★★☆☆☆</p>

        <p class="mb-2">
          Experience of creating a reel is a torture. It's about 50% chance when
          you add a clip to get the error "could not add clip". If you try many
          times and manage to add it, then fitting the clip to the music is
          nearly impossible. First, you get errors "something went wrong" all
          the time. Second, if you finally manage to do it in the editor, then
          in the preview *suddenly* the video doesn't match the music as it does
          during editing. It's incredibly frustrating to spend hours to create a
          10sec video
        </p>
        <h5 class="font-bold">Dagem Tadesse</h5>
        <p class="mb-2">★★★★☆</p>

        <p class="mb-2">
          Experience of creating a reel is a torture. It's about 50% chance when
          you add a clip to get the error "could not add clip". If you try many
          times and manage to add it, then fitting the clip to the music is
          nearly impossible. First, you get errors "something went wrong" all
          the time. Second, if you finally manage to do it in the editor, then
          in the preview *suddenly* the video doesn't match the music as it does
          during editing. It's incredibly frustrating to spend hours to create a
          10sec video
        </p>
      </div>
      <div>
        <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
          See all reviews
        </button>
      </div>
    </div>
  );
};

export default Appreview;
