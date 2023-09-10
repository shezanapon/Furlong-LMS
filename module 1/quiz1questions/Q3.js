import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const Q3 = ({control}) => {
    return (
        <Box sx={{marginBottom:"20px"}}>
        <Typography>
        The Occupational Health and Safety Act requires Employers to provide a safe workplace. Each contractor and their employees / sub contractors are required to....       </Typography>
       <br />
       <section>
         <Controller
           render={({ field }) => (
             <RadioGroup aria-label="gender" {...field}>
               <FormControlLabel
                 value="Follow only the client's safety processes "
                 control={<Radio />}
                 label="Follow only the client's safety processes "
               />
               <FormControlLabel
                 value="Make sure someone on site is fit to perform nominated duties. "
                 control={<Radio />}
                 label="Make sure someone on site is fit to perform nominated duties.  "
               />
               <FormControlLabel
                 value="Ensure compliance with both legislative requirements and Furlong Painting risk management policies/procedures."
                 control={<Radio />}
                 label="Ensure compliance with both legislative requirements and Furlong Painting risk management policies/procedures."
               />
             </RadioGroup>
           )}
           name="Question_3"
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

export default Q3;