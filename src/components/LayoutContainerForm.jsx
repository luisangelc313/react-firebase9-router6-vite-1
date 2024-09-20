import { Outlet } from "react-router-dom";

const LayoutContainerForm = () => { 
    return (
      <div className="mx-auto mt-10 w-96">
        <Outlet />
      </div>
    );
 }

 export default LayoutContainerForm;