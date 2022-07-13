import React from "react";

import { ToursPage } from "./components/ToursPage";

export const App = () => {
  const [toursData, setToursData] = React.useState([]);

  const [loader, setLoader] = React.useState(false);
  const [reloadContent, setReloadContent] = React.useState(false);

  const fetchData = async () => {
    setLoader(true);
    try {
      let response = await fetch("https://course-api.com/react-tours-project");
      let data = await response.json();

      setToursData(data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const notInterested = (id) => {
    setToursData((prev) => prev.filter((data) => data.id !== id));
  };

  const reload = () => {
    setReloadContent((prev) => !prev);
  };

  React.useEffect(() => {
    fetchData();
  }, [reloadContent]);

  return (
    <main>
      <ToursPage
        toursData={toursData}
        loader={loader}
        notInterested={notInterested}
        reload={reload}
      />
    </main>
  );
};
