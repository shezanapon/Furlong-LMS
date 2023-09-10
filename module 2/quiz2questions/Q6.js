import { Box, Divider, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const Q6 = ({control}) => {
    return (
        <Box sx={{marginBottom:"20px"}}>
             <Typography>
              Do you fully understand and are prepared to abide by the
              Conditions of Engagement?
            </Typography>
            <br />
            <section>
              <Controller
                render={({ field }) => (
                  <RadioGroup aria-label="gender" {...field}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                )}
                name="Ans1"
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