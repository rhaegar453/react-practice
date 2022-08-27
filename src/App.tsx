import React from "react";
import useCountdown from "./hooks/useCountdown";

const App = () => {
  const { value, done } = useCountdown(5, 1000);
  console.log(value, done);
  return (
    <div>
      <h2>Hello World this is the application</h2>
    </div>
  );
};
export default App;
