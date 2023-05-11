import { Icon } from "@chakra-ui/react";
import { CgUserList, CgPlayListAdd, CgUiKit } from "react-icons/cg";

// Admin Imports
import AllProjects from "pages/AllProjects";
import MainDashboard from "pages/Dashboard";
import MyProjects from "pages/MyProjects";
import ExperimentDetails from "./pages/ExperimentDetails";
import Upload from "pages/Upload";
import UploadBrowseBG from "./pages/Upload/Components/FileUploadButtons";

import { SiFastapi } from "react-icons/si";
import { FaTags } from "react-icons/fa";
import { GiUncertainty } from "react-icons/gi";
import {
  MdHome,
  MdLock,
  MdTopic,
  MdScreenSearchDesktop,
  MdQuestionAnswer,
} from "react-icons/md";

import FeatureMatrix from "./pages/Results/FeatureMatrix";
import ModelPerformance from "./pages/Results/ModelPerformance";
import ModelComparision from "./pages/Results/ModelComparision";

// Auth Imports
import Login from "pages/Login";

export const dashboardRoutes = [
  {
    name: "Dashboard",
    layout: "/dashboard",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
    parent: null,
  },
  {
    name: "My Projects",
    layout: "/dashboard",
    path: "/my-projects",
    icon: <Icon as={CgUserList} width="20px" height="20px" color="inherit" />,
    component: MyProjects,
    secondary: true,
    parent: null,
  },
  // {
  //   name: "Experiment",
  //   layout: "/dashboard",
  //   path: "/experiments",
  //   parent: "/my-projects",
  //   icon: (
  //     <Icon as={CgUiKit} width="20px" height="20px" color="inherit" ml={10} />
  //   ),
  //   component: ExperimentDetails,
  //   secondary: true,
  // },
  {
    name: "All Projects",
    layout: "/dashboard",
    icon: (
      <Icon as={CgPlayListAdd} width="20px" height="20px" color="inherit" />
    ),
    path: "/all-projects",
    component: AllProjects,
    parent: null,
  },

  {
    name: "Sign In",
    layout: "/login",
    path: "/",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: Login,
    parent: null,
  },
];
