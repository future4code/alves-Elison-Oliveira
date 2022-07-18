import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";

const useUnprotected = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToAdminHomePage(history);
    }
  }, [history]);
};

export default useUnprotected;
