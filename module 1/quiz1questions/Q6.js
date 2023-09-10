import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const Q6 = ({control}) => {
    return (
        <Box sx={{marginBottom:"20px"}}>
        <Typography>
        What best describes why Workplace Fatigue Management is an important part of the Risk Management Program?       </Typography>
       <br />
       <section>
         <Controller
           render={({ field }) => (
             <RadioGroup aria-label="gender" {...field}>
               <FormControlLabel
                 value="It may affect safety in the workplace "
                 control={<Radio />}
                 label="It may affect safety in the workplace "
               />
               <FormControlLabel
                 value="It highlights the signs and symptoms of fatigue which helps to minimise the risks associated in the workplace "
                 control={<Radio />}
                 label="It highlights the signs and symptoms of fatigue which helps to minimise the risks associated in the workplace "
               />
               <FormControlLabel
                 value="It gives me an excuse to sleep in every day"
                 control={<Radio />}
                 label="It gives me an excuse to sleep in every day"
               />
             </RadioGroup>
           )}
           name="Question_6"
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

export default Q6;