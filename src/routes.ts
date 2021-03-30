import { Main } from "./pages/index";
import { ToDo } from "./pages/index";
import { Count } from "./pages/index";

const routes = [
  { title: "Main", exact: true, component: Main, path: "/" },
  { title: "ToDo", exact: true, component: ToDo, path: "/todo" },
  { title: "Count", exact: true, component: Count, path: "/count" },
];

export default routes;
