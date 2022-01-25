import React, { useState, useEffect } from "react";
import { useHass, useEntity } from "@hooks";
import { callService, subscribeEntities } from "home-assistant-js-websocket";

const SingleLightCard: React.FunctionComponent = () => {
  const { connection } = useHass();

  //   subscribeEntities(connection, (entities) =>
  //     console.log("New entities!", entities)
  //   );

  const light = useEntity("light.hue_lamp_2");

  const [lightState, setLightState] = useState(0);

  //   useEffect(() => {
  //     if (light.attributes.brightness !== lightState) {
  //       setLightState(light.attributes.brightness);
  //     }
  //   }, [light.attributes.brightness, lightState]);

  const getSliderValue = (event) => {
    setLightState(event.target.value);
  };

  const newLightState = () => {
    callService(
      connection,
      "light",
      "turn_on",
      { brightness: lightState },
      {
        entity_id: "light.hue_lamp_2",
      }
    );
  };

  // console.log(light);

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="p-8 rounded-lg bg-cyan-600">
        <div className="flex items-center justify-center px-32 mb-2">
          <h1 className="text-lg font-extrabold tracking-wider">Fan Light</h1>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md shadow-sm">
          <input
            id="width"
            type="range"
            max="100"
            value={lightState}
            onChange={getSliderValue}
            onMouseUp={newLightState}
            className="range"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleLightCard;
