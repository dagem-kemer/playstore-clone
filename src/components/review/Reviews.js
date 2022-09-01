import { db } from "../FireBase/firebase-config";
import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";

import ReviewItem from "./ReviewItem";
import Rating from "./Rating";

const Reviews = () => {
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
    <>
      <Rating />
      {appComments.map((data, index) => (
        <ReviewItem
          key={index}
          reveiwText={data.Comment}
          date="August 20, 2022"
          rating={data.Rating}
          user={{ name: `${data.Name} ${data.LastName}` }}
        />
      ))}
    </>
  );
};

export default Reviews;
