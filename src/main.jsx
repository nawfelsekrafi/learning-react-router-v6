import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import EditContact, { action as editAction } from "./routes/edit";
import { action as deleteContact } from "./routes/destroy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact, { loader as contactLoader } from "./routes/contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        action: editAction,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContact,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
