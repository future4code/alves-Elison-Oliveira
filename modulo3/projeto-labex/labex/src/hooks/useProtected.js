import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

const useProtected = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLoginPage(history);
    }
  }, [history]);
};

export default useProtected;
