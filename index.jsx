import "./App.css";
// import Person from "./Person";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import Animal from "./Animal";
import Demo from "./Demo";
import { useEffect, useRef, useState } from "react";
import POC from "./POC";

const queryClient = new QueryClient();

function App() {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({ name: true });

  const validate = (name) => {
    if (!name) {
      setErrors({ name: true });
    } else {
      setErrors({ name: false });
    }
  };
  return (
    <div style={{ margin: 100 }}>
      firstName:{" "}
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          validate(event.target.value);
        }}
        onBlur={(event) => {
          debugger;
          setTouched({ name: true });
          setName(event.target.value);
          validate(event.target.value);
        }}
      />
      {errors?.name && touched?.name && "Name is required"}
    </div>
  );
}

export default App;
