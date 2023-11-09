import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import { indexLoader, showLoader } from "./loaders";
import Index from "./pages/Index";
import Show from "./pages/Show";
import { createAction, updateAction, deleteAction } from "./actions";
import LoginForm from "./components/LoginForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Index />} loader={indexLoader} />
        <Route path="athletes/:id" element={<Show />} loader={showLoader} />
        <Route path="create" action={createAction} />
        <Route path="update/:id" action={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
        <Route path="login" element={<LoginForm />} />
      </Route>
    </>
  )
);

export default router;
