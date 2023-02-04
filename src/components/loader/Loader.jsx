import { ThreeDots } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderBox>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </LoaderBox>
  );
};
