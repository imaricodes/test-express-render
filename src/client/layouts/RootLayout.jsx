import { Outlet } from "react-router-dom";


// import Header from "@/components/Header";


const RootLayout = () => {

  return (
    <div className="root-layout h-screen">
      {/* <Header /> */}
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
