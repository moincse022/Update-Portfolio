import { useContext } from "react";
import { ResourceContext } from "../components/ResourceProvider";

const useResource = () => {
  return useContext(ResourceContext);
};

export default useResource;
