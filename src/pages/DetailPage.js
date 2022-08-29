import Applogo from "../components/Detail/applogo";
import Appdetail from "../components/Detail/appdetail";
import Appreview from "../components/Detail/appreview";
import { useState } from "react";

function DetailPage() {
  return (
    <div>
      <Applogo />
      <Appdetail />
      <Appreview />
    </div>
  );
}

export default DetailPage;
