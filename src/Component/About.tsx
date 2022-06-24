import React from "react";
import TagManager from "react-gtm-module";
function About() {
  TagManager.dataLayer({
    dataLayer: {
      temp: "Test",
    },
  });
  return <div style={{ backgroundColor: "green", padding: "20px" }}>About</div>;
}

export default About;
