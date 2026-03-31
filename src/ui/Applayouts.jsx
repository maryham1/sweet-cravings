import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

function Applayouts() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup (important!)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loading />}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Applayouts;
