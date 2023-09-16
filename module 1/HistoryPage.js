import { Box } from "@material-ui/core";
import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
// import "./iframe.css";

const HistoryPage = () => {
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
          src="https://docs.google.com/document/d/e/2PACX-1vT1EFSDwjq2Sl-JkBLhfGnvMKLLx3JaAhMY86eQDAHTNrsqiq9mg1nYY-4DKa5EU6eP_4NJEYduG-Ix/pub?embedded=true"
        ></iframe>
      </div>
     
    </Box>
  );
};

export default HistoryPage;
