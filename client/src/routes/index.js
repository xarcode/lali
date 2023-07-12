import { createRef } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const routes = [
  {
    element: <h1>Hello</h1>,
    path: "/",
    // loader: async () => {
    //   let response = await axios.get(`/api/campgrounds/`);
    //   return response.data;
    // },
    nodeRef: createRef(),
  },
  //   {
  //     loader: async ({ params }) => {
  //       try {
  //         let response = await axios.get(`/api/campgrounds/${params.campid}`);
  //         // console.log("---------", response);

  //         return response.data;
  //       } catch (err) {
  //         // we can redirect user to maybe a 404 page which contains link to homepage
  //         // and sign up...
  //         console.log(err);
  //         // right now lets redirect to campground list view
  //         return redirect("/campgrounds");
  //       }
  //     },
  //     element: <Campground />,
  //     path: "/campgrounds/:campid",
  //     nodeRef: createRef(),
  //   },

  //   {
  //     loader: async ({ params }) => {
  //       try {
  //         let response = await axios.get(`/api/campgrounds/${params.campid}`);
  //         return response.data;
  //       } catch (err) {
  //         // we can redirect user to maybe a 404 page which contains link to homepage
  //         // and sing up...
  //         console.log(err.response.data);
  //         return redirect("/campgrounds");
  //       }
  //     },
  //     element: <EditCampgroundForm />,
  //     path: "/campgrounds/:campid/edit",
  //     nodeRef: createRef(),
  //   },

  {
    path: "*",
    element: <h1>Not found (404)</h1>,
  },
];

export default routes;
