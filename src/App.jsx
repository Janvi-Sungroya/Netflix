
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useState } from "react";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Info from "./components/info/Info";
import Settings from "./components/settings/Settings";
import "./app.scss"


function App() {
  const [path, setPath] = useState(window.location.pathname);

  const handlePathChange = () => {
    setPath(window.location.pathname);
  }

  // listen for changes to the URL path
  window.addEventListener("popstate", handlePathChange);

  // render the appropriate component based on the URL path
  let content;
  if (path === "/") {
    content = <Home />;
  } else if (path === "/watch") {
    content = <Watch />;
  } else if (path === "/login") {
    content = <Login />;
  } else if (path === "/register") {
    content = <Register />;
  }else if (path === "/movies") {
    content = <Movies />;
  }else if (path === "/series") {
    content = <Series/>;
  }else if (path === "/info") {
    content = <Info/>;
  }else if (path === "/settings") {
    content = <Settings/>;
  }


  return (
    <>
      {content}
    </>
  );
}

export default App;

