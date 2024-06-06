import "./App.css";
import Home from "./components/Home";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
      {/* <Route path="activity" element={<Activity />} /> */}
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />

  );
}

export default App;
