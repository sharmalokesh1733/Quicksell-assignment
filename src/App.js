import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Page from "./components/page/Page";
import Loader from "./components/loader/Loader";

function App() {
  const [data, setData] = useState({});
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("ordering");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((api) => api.json())
      .then((item) => setData(item))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <Page grouping={grouping} ordering={ordering} data={data} />
      )}
    </div>
  );
}

export default App;
