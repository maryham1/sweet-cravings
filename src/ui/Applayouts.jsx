import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

function Applayouts() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
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
