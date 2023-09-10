import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const Q2 = ({control}) => {
    return (
        <Box sx={{marginBottom:"20px"}}>
        <Typography>
        Who is responsible for complying with the Contractor Code of Conduct?
       </Typography>
       <br />
       <section>
         <Controller
           render={({ field }) => (
             <RadioGroup aria-label="gender" {...field}>
               <FormControlLabel
                 value="All persons performing work on behalf of Furlong Painting"
                 control={<Radio />}
                 label="All persons performing work on behalf of Furlong Painting"
               />
               <FormControlLabel
                 value="Only Furlong Painting Employees"
                 control={<Radio />}
                 label="Only Furlong Painting Employees "
               />
               <FormControlLabel
                 value="Only Furlong Painting Contractors"
                 control={<Radio />}
                 label="Only Furlong Painting Contractors"
               />
             </RadioGroup>
           )}
           name="Question_2"
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

export default Q2;