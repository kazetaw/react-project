import { useParams } from "react-router-dom";

const Param = () => {
  const params = useParams();
  console.log("🚀 ~ Param ~ params:", params);
  return <div></div>;
};

export default Param;
