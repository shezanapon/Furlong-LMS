import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const Q4 = ({control}) => {
    return (
        <Box sx={{marginBottom:"20px"}}>
        <Typography>
        What is the expected criteria for workplace presentation?       </Typography>
       <br />
       <section>
         <Controller
           render={({ field }) => (
             <RadioGroup aria-label="gender" {...field}>
               <FormControlLabel
                 value="Workwear to be clean and, where possible, bearing the Furlong painting logo"
                 control={<Radio />}
                 label="Workwear to be clean and, where possible, bearing the Furlong painting logo"
               />
               <FormControlLabel
                 value="Contractors to be well rested and not under the influence of a substance that might impair the ability to perform required tasks safely"
                 control={<Radio />}
                 label="Contractors to be well rested and not under the influence of a substance that might impair the ability to perform required tasks safely "
               />
               <FormControlLabel
                 value="That all electrical equipment to be have a valid test and tag"
                 control={<Radio />}
                 label="That all electrical equipment to be have a valid test and tag"
               />
               <FormControlLabel
                 value="All of the above"
                 control={<Radio />}
                 label="All of the above"
               />
             </RadioGroup>
           )}
           name="Question_4"
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

export default Q4;