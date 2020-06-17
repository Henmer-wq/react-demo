import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";


const dashboardRoutes = [
  {
    path: "/upload",
    name: "Upload File",
    icon: "pe-7s-upload",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/view",
    name: "View File",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
