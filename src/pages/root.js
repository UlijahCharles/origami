import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <main>
        <Outlet end />
      </main>
    </>
  );
}

export default Root;
