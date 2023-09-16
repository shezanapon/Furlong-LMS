import { Box, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';

const SuitabilityForWork = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };
    return (
      <Box>
      {isLoading && (
        <div >
          <center>
          <CircularProgress />
          </center>
        </div>
      )}
      <div style={{ width: "100%", overflow: "hidden", paddingTop: "56.25%" }}>
        <iframe
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          onLoad={handleIframeLoad}
          frameborder="0"
          scrolling="yes"
          src="https://writer.zohopublic.com/writer/published/0byhd6bdb7d00900d47f69d0ae51354d4f6f7?mode=embed"      
           ></iframe>
      </div>
     
    </Box>
    );
};

export default SuitabilityForWork;