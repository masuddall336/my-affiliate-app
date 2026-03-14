import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "./Main-layout/MainLayout";
import Home from "../Home/Home";

let router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
]);

export { router }