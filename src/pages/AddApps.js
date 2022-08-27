import { useRef } from "react";
function AddApps() {
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://playstore-366e4-default-rtdb.europe-west1.firebasedatabase.app/detail.json",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name.current.value,
          reviewNO: reviewNO.current.value,
          downloads: downloads.current.value,
          description: description.current.value,
        }),
      }
    );
  };
  const name = useRef();
  const reviewNO = useRef();
  const downloads = useRef();
  const description = useRef();

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="name" ref={name} />
      <br />
      <input placeholder="reviewNO" ref={reviewNO} />
      <br />
      <input placeholder="downloads" ref={downloads} />
      <br />
      <input placeholder="description" ref={description} />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default AddApps;
