import React, { useState, useEffect } from "react";
// import "./output.css";
import StarRating from "./starRate";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../FireBase/firebase-config";
import { useParams } from "react-router-dom";

const Appreview = () => {
  const [reviewform, showreviewform] = useState(false);
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState("");
  const [users, setUsers] = useState([]);
  const [rating, setRating] = useState(1);
  const rate = (rating) => {
    setRating(rating);
  };

  const commentHandler = (event) => {
    setAddComment(event.target.value);
  };
  const params = useParams();
  const AppDetailCollection = collection(db, "Comments");
  const UserCollection = collection(db, "Users");
  useEffect(() => {
    const getAppDetail = async () => {
      const data = await getDocs(AppDetailCollection);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const userdata = await getDocs(UserCollection);
      setUsers(userdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAppDetail();
  }, [reviewform]);

  const appComments = comments.filter((data) => data.Id === params.list);
  const AddReview = async () => {
    showreviewform((prev) => !prev);
    let use = users;
    use = users.find((data) => data.email === "s122@gmail.com");
    addDoc(AppDetailCollection, {
      Id: params.list,
      Name: use.firstName,
      LastName: use.lastName,
      Comment: addComment,
      Rating: rating,
    });
    let data = [];
    data = [...JSON.parse(localStorage.getItem("detailData"))];
    data = [data.find((data) => data.id === params.list)];

    const AppDoc = doc(db, "Apps", data[0].id);
    const updateRating = {
      Rating: (rating + data[0].RatingSum) / (data[0].ReviewNo + 1),
      RatingSum: data[0].RatingSum + rating,
      ReviewNo: data[0].ReviewNo + 1,
    };
    updateDoc(AppDoc, updateRating);
  };
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
        {reviewform && <StarRating rate={rate} />}
        <br></br>
        {reviewform ? (
          <div class="mt-4">
            <input
              type="text"
              id="large-input"
              class="ml-8 mt-4 block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={commentHandler}
            />

            <button
              onClick={AddReview}
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
        {appComments.map((data) => (
          <React.Fragment>
            <h5 class="font-bold">{`${data.Name} ${data.LastName}`}</h5>
            {data.Rating > 4 ? <p class="mb-2">★★★★★</p> : ""}
            {data.Rating > 3 && data.Rating <= 4 ? (
              <p class="mb-2">★★★★☆</p>
            ) : (
              ""
            )}
            {data.Rating > 2 && data.Rating <= 3 ? (
              <p class="mb-2">★★★☆☆</p>
            ) : (
              ""
            )}
            {data.Rating > 1 && data.Rating <= 2 ? (
              <p class="mb-2">★★☆☆☆</p>
            ) : (
              ""
            )}
            {data.Rating > 0 && data.Rating <= 1 ? (
              <p class="mb-2">★☆☆☆☆</p>
            ) : (
              ""
            )}

            <p class="mb-2">{data.Comment}</p>
          </React.Fragment>
        ))}
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
