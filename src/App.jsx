import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  useEffect();
  useState(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);
  return <h2>Tabs Starter</h2>;
};
export default App;
