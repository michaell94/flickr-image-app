import React, { useState } from "react";
import "./App.scss";
import Images from "./../components/Images/Images";
import Options from "./../components/Options/Options";

function App() {
  const [infiniteScroll, setInfiniteScroll] = useState(false);
  const searchString = "dog";

  return (
    <main className="app">
      <Options
        infiniteScroll={infiniteScroll}
        onInifiniteChange={() => setInfiniteScroll(!infiniteScroll)}
      />
      <Images infiniteScroll={infiniteScroll} searchString={searchString} />
    </main>
  );
}

export default App;
