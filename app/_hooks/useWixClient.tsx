import { useContext } from "react";
import { WixClientContext } from "../_context/wixContext";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
