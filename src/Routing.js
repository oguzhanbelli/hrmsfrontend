import CvList from "./pages/CvList";
import JobAdvertisementList from "./pages/JobAdvertisementList";


export const routes = [
    {
        path: "/",
        exact: true,
      
        title: "Home",
        isHeaderElement: true,
      },
  {
    path: "/cvList",
    exact: true,
    component: <CvList />,
    title: "Cv Listesi",
    isHeaderElement: true,
  },
  {
    path: "/jobAdvertisementList",
    exact: true,
    component: <JobAdvertisementList/>,
    title: "İş İlanları",
    isHeaderElement: true,
  },
 
  
];