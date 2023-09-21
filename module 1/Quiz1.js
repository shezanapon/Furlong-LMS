import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SideBar from "./SideBar";
import { Controller, useForm } from "react-hook-form";

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
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  
  const { handleSubmit, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log("djch",data);
  };
  const[score,setScore]=useState(0);
//   handleAnswerButtonClick=(correctAnswer)=>{
// if(correctAnswer===true){
//   setScore(score+1);
// }
//   }

  return (
    <div className={classes.root} style={{paddingTop:"70px", maxWidth:"80%"}}>
      {/* {console.log("sssssss",{ option })} */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quiz Settings</Typography>
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
          <Typography className={classes.heading}>Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Card variant="outlined">
                <CardContent>
                {
                option?.quiz?.slice(activeQuestion, activeQuestion+1).map((data, index)=>{
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
                        data?.answer.map((item)=>{
                         return (
                          <>
                           {/* <RadioGroup>
                            <FormControlLabel value={data?.correctAnswer} control={<Radio />} label={item} />
                            </RadioGroup> */}
                            <form
                  onSubmit={handleSubmit((data) => handleFinalSubmit(data))}
                >
                            <section>
         <Controller
           render={({ field }) => (
             <RadioGroup aria-label="gender" {...field}>
               
               <FormControlLabel
                 value={data?.correctAnswer}
                 control={<Radio />}
                 label={item.answerText} 
               />
             </RadioGroup>
           )}
           name="Question_3"
           control={control}
         />
       </section></form>
                          </>
                         )
                        })
                      }
                        </div>
                    )})
            }
                </CardContent>

            </Card>
            <br/>
            <Container sx={{ marginTop: "20px" }} maxWidth={"md"}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid xs={6}>
                            {activeQuestion === 0 ? null : (
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={()=>{setActiveQuestion(pre=>pre-1)}}
                              >
                                Back
                              </Button>
                            )}
                          </Grid>
                          <Grid xs={6} style={{ textAlign: "right" }}>
                            {activeQuestion === option?.quiz?.length-1 ? null : (
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={()=>{setActiveQuestion(pre=>pre+1)}}
                              >
                                NEXT
                              </Button>
                            )}

                            {activeQuestion === option?.quiz?.length-1 ? (
                              <Button
                                // onClick={handleClickOpen}
                                variant="contained"
                                color="secondary"
                                type="submit"
                              >
                                SUBMIT
                              </Button>
                            ) : null}
                          </Grid>
                        </Grid>
                      </Box>
                    </Container>
            {/* <Button variant="contained" size="small" color="primary" onClick={()=>{setActiveQuestion(pre=>pre-1)}}>Previous</Button>
            <Button variant="contained" size="small" color="primary" onClick={()=>{setActiveQuestion(pre=>pre+1)}}>Next</Button> */}


          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Quiz1;
