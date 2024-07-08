import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import Type from "./Type";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Link to={"/todo"}>ddd</Link> */}
      {/* <h1>Home</h1> */}
      <Type />
      <Button onClick={() => navigate("a")}></Button>
    </div>
  );
}

export default Home;
