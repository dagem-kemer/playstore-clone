import AppBar from "../components/Detail/AppBar";
import ListItem from "../components/List/ListItem";
import ListWrapper from "../components/List/ListWrapper";
import AppStatistics from "../components/Detail/AppStatistics";
import AppDescription from "../components/Detail/AppDescription";
import { useEffect, useState, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../components/FireBase/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";
import AppActions from "../components/Detail/AppActions";
import Reviews from "../components/review/Reviews";

const reducer = (params) => {
  return (state, action) => {
    if (action.type === "filter") {
      return {
        ...state,
        filteredData: [...state.data].find((data) => data.id === params.list),
      };
    } else if (action.type === "getData") {
      return {
        ...state,
        data: [
          [
            ...action.payload.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            })),
          ].find((data) => data.id === params.list),
        ],
        name: [
          [
            ...action.payload.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            })),
          ].find((data) => data.id === params.list),
        ][0].Name,
      };
    } else if (action.type === "saveDownloadList") {
      return {
        ...state,
        downloads: [
          ...action.payload.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        ].find(
          (data) =>
            data.AppId === params.list &&
            localStorage.getItem("email") === data.Email
        ),
      };
    }
    return { ...state };
  };
};

const initialState = {
  data: [],
  filteredData: [],
  name: "",
  downloads: "",
};

const AppDetail = () => {
  const [rerender, setRerender] = useState(false);
  const params = useParams();
  const [state, dispatch] = useReducer(reducer(params), initialState);
  useEffect(() => {
    const AppDetailCollection = collection(db, "Apps");
    const DownloadCollection = collection(db, "Downloads");
    const getAppDetail = async () => {
      const data = await getDocs(AppDetailCollection);
      dispatch({ type: "getData", payload: data });

      const downloadData = await getDocs(DownloadCollection);
      dispatch({ type: "saveDownloadList", payload: downloadData });
    };

    getAppDetail();
  }, [rerender]);

  const idToken = localStorage.getItem("idToken");
  const isLoggedIn = !!idToken;
  const [navStyle, setNavStyle] = useState("topnav");

  const download = () => {
    setRerender((prev) => !prev);
    const downloadCollection = collection(db, "Downloads");
    const downloadData = {
      Email: localStorage.getItem("email"),
      AppName: state.data[0].Name,
      AppId: params.list,
    };
    addDoc(downloadCollection, downloadData);
    const AppDetailCollection = doc(db, "Apps", params.list);
    const down = {
      DownloadNo: (state.data[0].DownloadNo + 1) / 1,
    };
    updateDoc(AppDetailCollection, down);
  };
  return (
    <>
      <AppBar />
      <main className="mt-[64px] lg:mx-[72px] mb-12">
        <div className="relative text-darkGrey">
          {/* app detail */}
          {state.data.map((data, index) => (
            <>
              <div className="pt-[48px]">
                {/* app title */}
                <AppDescription name={data.Name} image={data.ImageSrc} />

                {/* app statistics */}
                <AppStatistics
                  downloads={data.DownloadNo}
                  reviews={data.ReviewNo}
                />

                {/* download and add whishlist */}
                <AppActions isActive={isLoggedIn} />
              </div>
            </>
          ))}
        </div>

        <div className="flex justify-between mt-6 gap-9">
          <div className="grow">
            <ListWrapper>
              <div className="h-[296px] w-[85%] rounded-xl snap-start bg-red-500 my-2 shadow-md shrink-0 mr-2"></div>
              <div className="h-[296px] w-[85%] rounded-xl snap-start bg-yellow-500 my-2 shadow-md shrink-0 mr-2"></div>
              <div className="h-[296px] w-[85%] rounded-xl snap-start bg-green-500 my-2 shadow-md shrink-0 mr-2"></div>
            </ListWrapper>

            <h1 className="text-2xl font-bold pb-5">Ratings and reviews</h1>
            <Reviews />
          </div>
          <div className="basis-[400px] shrink-0">
            <h1 className="text-2xl font-bold pb-5">Similar Apps</h1>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ListItem
                index={index}
                key={index}
                image="https://yt3.ggpht.com/ytc/AMLnZu-CbOUpKWnChEpvLaIwfJu9PvYGb1RE2h46c-7qng=s900-c-k-c0x00ffffff-no-rj"
                rating="3.9"
                name="Super fun game"
                numbered
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AppDetail;
