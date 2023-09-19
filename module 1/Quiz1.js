import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SideBar from "./SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Quiz1 = ({ option }) => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  const classes = useStyles();
  // const [option,setOption]=useState(null);

  return (
    <div className={classes.root}>
      {console.log("sssssss",{ option })}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Card variant="outlined">
                <CardContent>
                {
                option?.quiz?.slice(activeQuestion, activeQuestion+1).map((data, index)=>{
                    console.log("Mah",data);
                    return(
                        <div key={index}>
<Typography variant="h5">

                        Question {data?.questionNumber}
                    </Typography>
                    <br/>
                    <Typography>
                        {data?.question}
                    </Typography>
                    <br/>
                      {
                        data.choices.map((item)=>{
                         return (
                          <>
                           <RadioGroup>
                            <FormControlLabel value={index} control={<Radio />} label={item} />
                            </RadioGroup>
                          </>
                         )
                        })
                      }
                        </div>
                    )})
            }
                </CardContent>

            </Card>
            <Button variant="contained" size="small" onClick={()=>{setActiveQuestion(pre=>pre-1)}}>Previous</Button>
            <Button variant="contained" size="small" onClick={()=>{setActiveQuestion(pre=>pre+1)}}>Next</Button>

          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Quiz1;
