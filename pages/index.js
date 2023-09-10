
import styles from '../styles/Home.module.css'
import { Divider, Typography } from '@material-ui/core'
import CardCom from '../module 1/CardCom'

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
      <br/>
      <Divider />
      <br/>
      <CardCom/>
    </div>
  )
}
