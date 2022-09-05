import React, { useState, useEffect, useReducer } from "react";
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
import { Link, useParams } from "react-router-dom";

const Appreview = () => {
  const params = useParams();
  const reducer = (state, action) => {
    if (action.type === "filterData") {
      return {
        ...state,
        filteredComment: [
          ...action.payload.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        ].find(
          (data) =>
            data.Email === localStorage.getItem("email") &&
            data.Id === params.list
        ),
      };
    } else if (action.type === "input") {
      return {
        ...state,
        filteredComment: { ...state, Comment: action.payload },
      };
    }
    return { ...state };
  };
  const initialState = {
    filteredComment: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [reviewform, showreviewform] = useState(false);
  const [comments, setComments] = useState([]);
  const [appData, setAppData] = useState([]);
  const [addComment, setAddComment] = useState("");
  const [users, setUsers] = useState([]);
  const [rating, setRating] = useState(1);
  const rate = (rating) => {
    setRating(rating);
  };

  const commentHandler = (event) => {
    setAddComment(event.target.value);
    dispatch({ type: "input", payload: event.target.value });
  };

  const AppDetailCollection = collection(db, "Apps");
  const commentCollection = collection(db, "Comments");

  const UserCollection = collection(db, "Users");
  useEffect(() => {
    const getAppDetail = async () => {
      const data = await getDocs(commentCollection);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const userdata = await getDocs(UserCollection);
      setUsers(userdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const AppData = await getDocs(AppDetailCollection);
      setAppData(AppData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      dispatch({ type: "filterData", payload: data });
    };
    getAppDetail();
  }, [reviewform]);

  const appComments = comments.filter((data) => data.Id === params.list);
  const AddReview = async () => {
    showreviewform((prev) => !prev);
    let use = users;
    use = users.find((data) => data.email === localStorage.getItem("email"));

    addDoc(commentCollection, {
      Id: params.list,
      Email: use.email,
      Name: use.firstName,
      LastName: use.lastName,
      Comment: addComment,
      Rating: rating,
    });

    const data = [appData.find((data) => data.id === params.list)];
    const AppDoc = doc(db, "Apps", data[0].id);
    const updateRating = {
      Rating: (rating + data[0].RatingSum) / (data[0].ReviewNo + 1),
      RatingSum: data[0].RatingSum + rating,
      ReviewNo: data[0].ReviewNo + 1,
    };
    updateDoc(AppDoc, updateRating);
  };
  const updateComment = () => {
    showreviewform((prev) => !prev);
    let data = [];
    data = comments.find(
      (data) =>
        data.Email === localStorage.getItem("email") && data.Id === params.list
    );

    const updateComments = {
      Comment: addComment,
      Rating: rating,
    };
    const commentDoc = doc(db, "Comments", data.id);
    updateDoc(commentDoc, updateComments);
    let AppData = appData.find((data) => data.id === params.list);
    const updateRating = {
      Rating: (rating + AppData.RatingSum - data.Rating) / AppData.ReviewNo,
      RatingSum: AppData.RatingSum + rating - data.Rating,
    };

    const AppDoc = doc(db, "Apps", params.list);
    updateDoc(AppDoc, updateRating);
  };
  const filteredComment = comments.find(
    (data) =>
      data.Email === localStorage.getItem("email") && data.Id === params.list
  );
  return (
    <div>
      <div>
        {!localStorage.getItem("email") ? (
          <Link
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded mt-6"
            to="/sign-in"
          >
            Review this app
          </Link>
        ) : (
          !reviewform && (
            <button
              onClick={() => showreviewform(!reviewform)}
              className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded mt-6"
            >
              Review this app
            </button>
          )
        )}
        {reviewform && <StarRating rate={rate} />}
        <br></br>
        {reviewform ? (
          <div className="mt-4">
            {!filteredComment && (
              <>
                {" "}
                <input
                  type="text"
                  id="large-input"
                  className="ml-8 mt-4 block p-4 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={commentHandler}
                />
                <button
                  onClick={AddReview}
                  className=" ml-4 mt-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
                >
                  Save Review
                </button>
              </>
            )}
            {filteredComment && (
              <>
                {" "}
                <input
                  type="text"
                  id="large-input"
                  className="ml-8 mt-4 block p-4 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  onChange={commentHandler}
                  value={state.filteredComment.Comment}
                />
                <button
                  onClick={updateComment}
                  className=" ml-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
                >
                  Update Review
                </button>
              </>
            )}
          </div>
        ) : null}
      </div>
      <div className="py-8">
        <h3 className="font-bold text-2xl">Rates and reviews</h3>
      </div>
      <div>
        {appComments.map((data, index) => (
          <React.Fragment key={index}>
            <h5 className="font-bold">{`${data.Name} ${data.LastName}`}</h5>
            {data.Rating > 4 ? <p className="mb-2">★★★★★</p> : ""}
            {data.Rating > 3 && data.Rating <= 4 ? (
              <p className="mb-2">★★★★☆</p>
            ) : (
              ""
            )}
            {data.Rating > 2 && data.Rating <= 3 ? (
              <p className="mb-2">★★★☆☆</p>
            ) : (
              ""
            )}
            {data.Rating > 1 && data.Rating <= 2 ? (
              <p className="mb-2">★★☆☆☆</p>
            ) : (
              ""
            )}
            {data.Rating > 0 && data.Rating <= 1 ? (
              <p className="mb-2">★☆☆☆☆</p>
            ) : (
              ""
            )}

            <p className="mb-2">{data.Comment}</p>
          </React.Fragment>
        ))}
      </div>
      <div>
        <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
          See all reviews
        </button>
      </div>
    </div>
  );
};

export default Appreview;
