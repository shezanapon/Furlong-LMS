import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const Q7 = ({control}) => {
    return (
        <Box sx={{marginBottom:"20px"}}>
        <Typography>
        Which of the following MUST be reported immediately to company management?
        </Typography>
       <br />
       <section>
         <Controller
           render={({ field }) => (
             <RadioGroup aria-label="gender" {...field}>
               <FormControlLabel
                 value="An injury"
                 control={<Radio />}
                 label="An injury"
               />
               <FormControlLabel
                 value="Property Damage"
                 control={<Radio />}
                 label="Property Damage"
               />
               <FormControlLabel
                 value="All incidents – injury, near miss, hazard reporting, environmental issue, property damage / loss."
                 control={<Radio />}
                 label="All incidents – injury, near miss, hazard reporting, environmental issue, property damage / loss."
               />
             </RadioGroup>
           )}
           name="Question_7"
           control={control}
         />
       </section>
       <br />
       <Typography variant="body2" sx={{ paddingBottom: "15px" }}>
         Order: 1, Type: Single Correct Option, Topic: Do you fully
         understand and are prepared to abide by the Conditions of
         Engagement?, Tags: +1 , -0
       </Typography>

       <Divider />
   </Box>
    );
};

export default Q7;