import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const spinner = () => (
  <Dimmer active>
    <Loader size="huge" content={"Chat loading..."} />
  </Dimmer>
);

export default spinner;
