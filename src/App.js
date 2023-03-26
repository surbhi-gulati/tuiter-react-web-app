import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Home from "./tuiter/home";
import ExploreComponent from "./tuiter/explore";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
                 element={<Labs/>}/>
          <Route path="/*"
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter" 
                  element={<Tuiter />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="explore" element={<ExploreComponent />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
