import { Puff } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Puff
        visible={true}
        height="100"
        width="100"
        radius="48"
        color="var(--accent-red)"
        ariaLabel="Puff"
      />
    </LoaderWrapper>
  );
};

export default Loader;
