import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
    {/* Add Header here */}
      <main>
        <Outlet /> {/* This is where page content will be rendered */}
      </main>
      {/* Add Footer here */}
    </>
  );
};

export default Layout;
