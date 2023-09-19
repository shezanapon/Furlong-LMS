import styles from "../styles/Home.module.css";
import { Divider, Typography } from "@material-ui/core";
import CardCom from "../module 1/CardCom";
import Bar from "../module 1/Bar";
import Quiz from "../module 1/Quiz";
import Quiz1 from "../module 1/Quiz1";

export default function Home() {
  return (
    <div className={styles.container}>
      <Typography
        p={2}
        sx={{ fontsize: "solid", paddingLeft: "30px" }}
        variant="h6"
      >
        Courses(3)
      </Typography>
      <br />
      <Divider />
      <br />
      <CardCom />
      <br/>
      {/* <Quiz1/> */}
    </div>
  );
}
