import * as React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import resData from "./Data.js";
import Grid from "@material-ui/core/Grid";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

const lineStyle = {
  marginLeft: ".5rem",
  marginTop: 0,
  marginBottom: 0,
  display: "inline-block",
  width: "70%",
};



export default function SideBar({handleOption}) {

 
  
  const [expanded, setExpanded] = React.useState(null);

  const handleChangeExpanded = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {resData.map((data) => {
        console.log({ data });
        return (
          <>
            <Accordion 
              onChange={handleChangeExpanded(`panel_${data.expenseId}`)}
             
            >
              <AccordionSummary>
                <Typography sx={{ fontWeight: "bold" }}>
                  {data.accordion}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid>
                  {data.children.map((option) => {
                    return (
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

                          <p
                            style={lineStyle}
                            onClick={() => {
                              handleOption(option);
                            }}
                          >
                            {option.name}
                          </p>
                          <MoreVertIcon sx={{ ml: "auto" }} />
                        </li>
                      </>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
 
  );
}
