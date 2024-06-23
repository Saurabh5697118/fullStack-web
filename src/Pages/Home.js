import React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    // setTimeout(() => {
    axios.get("http://localhost:3005/posts").then((res) => {
      setUsersList(res.data);
    });
    // }, 2000);
  }, []);
  // const Lazyness = lazy(() => delay(import("./Screens/FetchLazy")));
  const Lazyness = lazy(() => import("../Screens/FetchLazy"));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Lazyness usersList={usersList} />
      </Suspense>
    </div>
  );
};

export default Home;

async function delay(promise) {
  return new Promise((resolve) => setTimeout(resolve, 3000)).then(
    () => promise
  );
}
