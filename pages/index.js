import styles from "../styles/Home.module.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import Main from "./furlongCourses/Main";
import { useState } from "react";
import img1 from "../public/pic1.png";
import img2 from "../public/pic2.png";
import img3 from "../public/pic3.png";
import { useRouter } from "next/router";

export default function Home() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const router=useRouter();
 
  const changeState = () => {
    setShow(true);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
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
      <div p={4} style={{ display: "flex" }}>
        {show3 && (
          <div onClick={changeState} style={{ marginRight: "15px" }}>
            <Card sx={{ maxWidth: 345 }} onClick={()=>router.push('/furlongCourses/Main')}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={img1}
                    alt=""
                    objectFit="contain" 
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ color: "blue" }}
                    component="div"
                  >
                    Furlong Painting Sub Contractor/Worker Induction
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Tony Bruce
                  </Typography>

                  <Typography gutterBottom variant="p" component="div">
                    Enrolled Learners: <span style={{ color: "blue" }}>24</span>
                  </Typography>
                  <Typography
                    sx={{ textAlign: "right" }}
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    2 years ago
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}

        {show1 && (
          <div onClick={changeState} style={{ marginRight: "15px" }}>
            <Card sx={{ maxWidth: 345 }} onClick={()=>router.push('/furlongCourses/Main')}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={img2}
                    alt=""
                    objectFit="contain" // or objectFit="cover"
                  />
                </CardMedia>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ color: "blue" }}
                    component="div"
                  >
                    Furlong Painting Contractor Induction Program
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Tony Bruce
                  </Typography>

                  <Typography gutterBottom variant="p" component="div">
                    Enrolled Learners: <span style={{ color: "blue" }}>9</span>
                  </Typography>
                  <Typography
                    sx={{ textAlign: "right" }}
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    2 years ago
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}
        {show2 && (
          <div style={{ marginRight: "15px" }}>
            <Card onClick={()=>router.push('/furlongCourses/Main')} sx={{ maxWidth: 390 }}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={img3}
                    alt=""
                    objectFit="contain" // or objectFit="cover"
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ color: "blue" }}
                    component="div"
                  >
                    Furlong Painting Sub Contractor/Worker Induction
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Tony Bruce
                  </Typography>

                  <Typography gutterBottom variant="p" component="div">
                    Enrolled Learners: <span style={{ color: "blue" }}>24</span>
                    <span>
                      <Typography
                        sx={{ textAlign: "right" }}
                        variant="subtitle2"
                        color="text.secondary"
                      >
                        2 years ago
                      </Typography>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}

    
      </div>
      <br />
      {/* <Quiz/> */}
    </div>
  );
}
