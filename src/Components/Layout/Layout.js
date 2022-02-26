import { useSelector, useDispatch } from "react-redux";
import { Switch } from "../../Redux/Slices/switchSlice";
import classes from "./Layout.module.css";
import { Spiral as Hamburger } from "hamburger-react";

//component imports
import Section1 from "../QuestionSection/Section";
import Section2 from "../InfoSection/InfoSection";

const Layout = () => {
  const switchSection = useSelector((state) => state.switch.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.layout}>
      <div className={classes.section1}>
        <span
          className={classes.switchButton}
          onClick={() => dispatch(Switch())}
        >
          <Hamburger/>
        </span>
        <Section1 />
      </div>
      <div
        className={switchSection ? classes.section2IsOpen : classes.section2}
      >
        <Section2 style={{ position: "absolute" }} />
      </div>
    </div>
  );
};

export default Layout;
