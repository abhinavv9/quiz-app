import { useState } from "react";
import classes from "./Layout.module.css";

//component imports
import Section1 from "../QuestionSection/Section";
import Section2 from "../InfoSection/InfoSection";

const Layout = () => {
  const [questionNo, setQuestionNo] = useState(1);

  return (
    <div className={classes.layout}>
      <div className={classes.section2}>
        <Section1 questionNo={questionNo} setQuestionNo={setQuestionNo} />
      </div>
      <div className={classes.section3}>
        <Section2 questionNo={questionNo} setQuestionNo={setQuestionNo} />
      </div>
    </div>
  );
};

export default Layout;
