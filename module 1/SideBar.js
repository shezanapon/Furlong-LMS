import * as React from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import resData from "./Data";
import Grid from '@material-ui/core/Grid';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, makeStyles} from "@material-ui/core";


const lineStyle = {
  marginLeft: ".5rem",
  marginTop: 0,
  marginBottom: 0,
  display: "inline-block",
  width: "70%",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SideBar({

  setHistory,
  setEngage,
  setQuiz,
  setDuty,
  setConduct,
  setWork,
  setFatigue,
  setBully,
  setIncident,
  setonSite, 
  setDriverSafety,
  setSpace,
  setElectrical,
  setHouseKeep,
  setManual,
  setProtective,
   setSafeWork, 
   setStopWork,
  setWorkHeight,
   setQuiz2, 
   setAsbestos,
  setDangerousGoods,
   setLead,
   setQuiz3,
setEnvironment,
 setWaste,
  setQuiz4
}) {
  // const [expanded, setExpanded] = React.useState("panel1");
  const classes = useStyles();


  const module1=()=>{
    setHistory(false);
    setEngage(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
  };
  const module2=()=>{
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
  };
  const module3=()=>{
    setAsbestos(false);
  setDangerousGoods(false);
   setLead(false);
   setQuiz3(false);
  };
  const module4=()=>{
    setEnvironment(false);
 setWaste(false);
  setQuiz4(false);
  }

  const handleHistory = () => {
    setHistory(true);
    setEngage(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
    module2();
    module3();
    module4()


  };
  const handleEngage = () => {
    setEngage(true);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
    module2();
    module3();
    module4()
  };
  const handleQuiz=()=>{
    setEngage(false);
    setHistory(false);
    setQuiz(true);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
    module2();
    module3();
    module4()
  };
  const handleDuty = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(true);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
    module2();
    module3();
    module4()
  };
  const handleConduct = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(true);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
    module2();
    module3();
    module4()
  };
  const handleWork = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(true);
    setFatigue(false);
    setBully(false);
    setIncident(false);
    module2();
    module3();
    module4()
  };
  const handleFatigue = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(true);
    setBully(false);
    setIncident(false);
    module2();
    module3();
    module4()
  };
  const handleBully = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(true);
    setIncident(false);
    module2();
    module3();
    module4()
  };
  const handleIncident = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(true);
    module2();
    module3();
    module4()
  };

  const handleOnSite = () => {
    setonSite(true);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleDriverSafety = () => {
    setonSite(false);
    setDriverSafety(true);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleSpace = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(true);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleElectrical = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(true);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleHouseKeep = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(true);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleManual = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(true);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleProtective = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(true);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleSafeWork = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(true); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleStopWork = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(true);
    setWorkHeight(false);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleWorkHeight = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(true);
     setQuiz2(false); 
     module1();
     module3();
     module4()
  }
  const handleQuiz2 = () => {
    setonSite(false);
    setDriverSafety(false);
    setSpace(false);
    setElectrical(false);
    setHouseKeep(false);
    setManual(false);
    setProtective(false);
     setSafeWork(false); 
     setStopWork(false);
    setWorkHeight(false);
     setQuiz2(true); 
     module1();
     module3();
     module4()
  }

  const handleAsbestos= () => {
    setAsbestos(true);
    setDangerousGoods(false);
     setLead(false);
     setQuiz3(false);
     module1();
     module2();
     module4()
  }
  const handleDangerousGoods= () => {
    setAsbestos(false);
    setDangerousGoods(true);
     setLead(false);
     setQuiz3(false);
     module1();
     module2();
     module4()
  }
  const handleLead = () => {
    setAsbestos(false);
    setDangerousGoods(false);
     setLead(true);
     setQuiz3(false);
     module1();
     module2();
     module4()
  }
  const handleQuiz3 = () => {
    setAsbestos(false);
    setDangerousGoods(false);
     setLead(false);
     setQuiz3(true);
     module1();
     module2();
     module4()
  }

  const handleEnvironment = () => {
    setEnvironment(true);
    setWaste(false);
     setQuiz4(false);
     module1();
     module2();
     module3()
  }
  const handleWaste = () => {
    setEnvironment(false);
    setWaste(true);
     setQuiz4(false);
     module1();
     module2();
     module3()
  }
  const handleQuiz4 = () => {
    setEnvironment(false);
    setWaste(false);
     setQuiz4(true);
     module1();
     module2();
     module3()
  }
 

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };
  const [change, setChange] = React.useState("false");
  // console.log("shezan",resData);
  
  const [expanded,setExpanded] = React.useState(null);

  const handleChangeExpanded = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {
              resData.map((index)=>{
                return(
                  <>
                 
                  <Accordion
                  key={index.expenseId}
                  // expanded={expanded === `panel_${operation.expenseId}`}
                  onChange={handleChangeExpanded(`panel_${index.expenseId}`)}
        // expanded={expanded === "panel1"}
        // onChange={handleChange("panel1")}
      >
        <AccordionSummary >
          
           
        <Typography sx={{ fontWeight: "bold" }}>
                  {index.accordion}
                  </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <Grid >
        {
              index.children.map((option)=>{
                return(
                  <>
                    <li
                    className="pointer"
            style={{
              display: "flex",
              marginBottom: "14px",
              fontSize: "16px",
            }}
          >
            <DescriptionIcon />
            
            <p style={lineStyle}>{option.name}</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
                  </>
                )
              })
            }
        
         
        
          </Grid>
        </AccordionDetails>
      </Accordion>
                  </>
                )
              })
            }
        
    </div>
    // <div>
    //   <Accordion
    //     expanded={expanded === "panel1"}
    //     onChange={handleChange("panel1")}
    //   >
    //     <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    //       <Typography sx={{ fontWeight: "bold" }}>
    //         Furlong Painting Outline Contractor induction Program
    //       </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //     <Grid >
       
    //       <li
    //         style={{
    //           display: "flex",
    //           marginBottom: "14px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         <DescriptionIcon />
    //         <p style={lineStyle}>Introduction Program</p>
    //         <MoreVertIcon sx={{ ml: "auto" }} />
    //       </li>
         
    //      <li
    //         style={{
    //           display: "flex",
    //           marginBottom: "14px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         <DescriptionIcon />
    //         <p
    //           onClick={(e) => handleHistory()}
    //           style={lineStyle}
    //           className="pointer"
    //           color={change ? "rgb(41, 28, 182)" : "red"}
    //         >
    //           History and Mission
    //         </p>
    //         <MoreVertIcon sx={{ ml: "auto" }} />
    //       </li>
        
         
         
    //       <li
    //         style={{
    //           display: "flex",
    //           marginBottom: "14px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         <DescriptionIcon />
    //         <p style={lineStyle}>Interpretative Statements</p>
    //         <MoreVertIcon sx={{ ml: "auto" }} />
    //       </li>
         
    //       <li
    //         style={{
    //           display: "flex",
    //           paddingBottom: "14px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         <DescriptionIcon />
    //         <p style={lineStyle}>Contractor Standards and Expectations</p>
    //         <MoreVertIcon sx={{ ml: "auto" }} />
    //       </li>
        
    //      <li
    //         style={{
    //           display: "flex",
    //           paddingBottom: "14px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         <DescriptionIcon />
    //         <p style={lineStyle}>Personal and Business Documents</p>
    //         <MoreVertIcon sx={{ ml: "auto" }} />
    //       </li>
      
    //       </Grid>
    //     </AccordionDetails>
    //   </Accordion>
      // <Accordion
      //   expanded={expanded === "panel2"}
      //   onChange={handleChange("panel2")}
      // >
      //   <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
      //     <Typography sx={{ fontWeight: "bold" }}>
      //       Module 1 - Human Resources
      //     </Typography>
      //   </AccordionSummary>
      //   <AccordionDetails>
      //   <Grid >
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p
      //         onClick={(e) => handleEngage()}
      //         style={lineStyle}
      //         className="pointer"
      //         color={change ? "rgb(41, 28, 182)" : "red"}
      //       >
      //         Conditions of Engagement
      //       </p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p
      //         onClick={(e) => handleConduct()}
      //         style={lineStyle}
      //         className="pointer"
      //       >
      //         Code of Conduct
      //       </p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p
      //         onClick={(e) => handleDuty()}
      //         style={lineStyle}
      //         className="pointer"
      //       >
      //         Duty of Care
      //       </p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p
      //         onClick={(e) => handleWork()}
      //         style={lineStyle}
      //         className="pointer"
      //       >
      //         Suitability for Work
      //       </p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p
      //         onClick={(e) => handleFatigue()}
      //         style={lineStyle}
      //         className="pointer"
      //       >
      //         Fatigue Management
      //       </p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p
      //         onClick={(e) => handleBully()}
      //         style={lineStyle}
      //         className="pointer"
      //       >
      //         Bullying and Harassment
      //       </p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
         
         
      //    <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p
      //         onClick={(e) => handleIncident()}
      //         style={lineStyle}
      //         className="pointer"
      //       >
      //         Incident Reporting
      //       </p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
        
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleQuiz()}
      //         style={lineStyle}
      //         className="pointer">QUIZ : Module 1</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
         
      //     </Grid>
      //   </AccordionDetails>
      // </Accordion>
      // <Accordion
      //   expanded={expanded === "panel3"}
      //   onChange={handleChange("panel3")}
      // >
      //   <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
      //     <Typography sx={{ fontWeight: "bold" }}>
      //     Module 2 – Workplace Health, Safety and Wellbeing
      //     </Typography>
      //   </AccordionSummary>
      //   <AccordionDetails>
      //     <Grid>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleOnSite()}
      //         style={lineStyle}
      //         className="pointer">On-Site Works Process</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleSafeWork()}
      //         style={lineStyle}
      //         className="pointer">Safe Work Method Statement</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleStopWork()}
      //         style={lineStyle}
      //         className="pointer">Stop Work</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleProtective()}
      //         style={lineStyle}
      //         className="pointer">Personal Protective Equipment</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleManual()}
      //         style={lineStyle}
      //         className="pointer">Manual Handling</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleWorkHeight()}
      //         style={lineStyle}
      //         className="pointer">Working at Heights</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleElectrical()}
      //         style={lineStyle}
      //         className="pointer">Electrical</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleSpace()}
      //         style={lineStyle}
      //         className="pointer">Confined Spaces</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li><li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleHouseKeep()}
      //         style={lineStyle}
      //         className="pointer">Housekeeping- Slips, Trips and Falls</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleDriverSafety()}
      //         style={lineStyle}
      //         className="pointer">Driver Safety</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleQuiz2()}
      //         style={lineStyle}
      //         className="pointer">QUIZ : Module 2</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
       
      //     </Grid> </AccordionDetails>
      // </Accordion>
      // <Accordion
      //   expanded={expanded === "panel4"}
      //   onChange={handleChange("panel4")}
      // >
      //   <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
      //     <Typography sx={{ fontWeight: "bold" }}>
      //     Module 3 – Dangerous / Hazardous Goods
      //     </Typography>
      //   </AccordionSummary>
      //   <AccordionDetails>
      //     <Grid>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleDangerousGoods()}
      //         style={lineStyle}
      //         className="pointer">Dangerous / Hazardous Goods</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleLead()}
      //         style={lineStyle}
      //         className="pointer">Lead</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleAsbestos()}
      //         style={lineStyle}
      //         className="pointer">Asbestos</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleQuiz3()}
      //         style={lineStyle}
      //         className="pointer">QUIZ : Module 3</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     </Grid>
      //   </AccordionDetails>
      // </Accordion>
      // <Accordion
      //   expanded={expanded === "panel5"}
      //   onChange={handleChange("panel5")}
      // >
      //   <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
      //     <Typography sx={{ fontWeight: "bold" }}>
      //     Module 4 – Environmental          
      //     </Typography>
      //   </AccordionSummary>
      //   <AccordionDetails>
      //     <Grid>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleEnvironment()}
      //         style={lineStyle}
      //         className="pointer">Company Environment Objective</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleWaste()}
      //         style={lineStyle}
      //         className="pointer">Waste Management</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
        
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleQuiz4()}
      //         style={lineStyle}
      //         className="pointer">QUIZ : Module 4</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     <li
      //       style={{
      //         display: "flex",
      //         paddingBottom: "14px",
      //         fontSize: "16px",
      //       }}
      //     >
      //       <DescriptionIcon />
      //       <p onClick={(e) => handleQuiz()}
      //         style={lineStyle}
      //         className="pointer">Acceptance</p>
      //       <MoreVertIcon sx={{ ml: "auto" }} />
      //     </li>
      //     </Grid>
      //   </AccordionDetails>
      // </Accordion>
    // </div>
  );
}
