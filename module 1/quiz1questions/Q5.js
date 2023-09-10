import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const Q5 = ({control}) => {
    return (
        <Box sx={{marginBottom:"20px"}}>
        <Typography>
        What is deemed to be workplace bullying?       </Typography>
       <br />
       <section>
         <Controller
           render={({ field }) => (
             <RadioGroup aria-label="gender" {...field}>
               <FormControlLabel
                 value="When more than two people agree that comments are inappropriate"
                 control={<Radio />}
                 label="When more than two people agree that comments are inappropriate"
               />
               <FormControlLabel
                 value="Repeated and unwanted negative behaviour, relating to gender, sexuality, cultural background etc"
                 control={<Radio />}
                 label="Repeated and unwanted negative behaviour, relating to gender, sexuality, cultural background etc "
               />
               <FormControlLabel
                 value="Where Furlong Painting stops offering my business work opportunities"
                 control={<Radio />}
                 label="Where Furlong Painting stops offering my business work opportunities"
               />
             </RadioGroup>
           )}
           name="Question_5"
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

export default Q5;