import { Box, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';

const StopWork = () => {
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
          src="https://writer.zohopublic.com/writer/published/0byhd2e5e6f7cd47240e4a69af0f674ab1735?mode=embed"
        ></iframe>
      </div>
     
    </Box>
    );
};

export default StopWork;