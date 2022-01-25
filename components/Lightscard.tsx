import React, { useState } from "react";
import { useHass, useQuery, useEntity } from "@hooks";
import { callService } from "home-assistant-js-websocket";

const Lightscard: React.FunctionComponent = () => {
  const { connection } = useHass();

  const light = useEntity("light.hue_lamp_2");

  let toBool = (string) => (string === "on" ? true : false);

  const [enabled, setEnabled] = useState(false);

  // const lights = useQuery("lights");

  // console.log(lights);

  const onClickSwitch = (event: { target: HTMLInputElement }) => {
    if (enabled) {
      callService(connection, "light", "turn_off", {
        entity_id: event.target.value,
      });
      setEnabled(false);
    }

    if (!enabled) {
      callService(connection, "light", "turn_on", {
        entity_id: event.target.value,
      });
      setEnabled(true);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="p-8 rounded-lg bg-cyan-600">
        <div className="flex items-center justify-center px-32">
          <h1 className="text-lg font-extrabold tracking-wider">Main Lights</h1>
        </div>
        <div className="flex flex-col mt-1 text-sm">
          <div className="flex items-center justify-between p-3 bg-gray-800 shadow-sm rounded-t-md">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-6 h-6 fill-yellow-500 stroke-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
              <div>
                <p className="font-bold tracking-wider text-white">Fan Light</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <label
                htmlFor="light.hue_lamp_2"
                className="relative flex items-center cursor-pointer"
              >
                <input
                  onChange={onClickSwitch}
                  className="sr-only peer"
                  type="checkbox"
                  id="light.hue_lamp_2"
                  value="light.hue_lamp_2"
                  defaultChecked={enabled}
                />
                <div className="h-6 bg-gray-200 border-2 border-gray-200 rounded-full w-11 after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:h-5 after:w-5 after:shadow-sm after:rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-cyan-500 peer-checked:border-cyan-500 after:transition-all after:duration-300"></div>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800 shadow-sm">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-6 h-6 fill-yellow-500 stroke-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
              <div>
                <p className="font-bold tracking-wider text-white">
                  Skinny Lamp
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <label
                htmlFor="light.hue_lamp_3"
                className="relative flex items-center cursor-pointer"
              >
                <input
                  onChange={onClickSwitch}
                  className="sr-only peer"
                  type="checkbox"
                  id="light.hue_lamp_3"
                  value="light.hue_lamp_3"
                  defaultChecked={enabled}
                />
                <div className="h-6 bg-gray-200 border-2 border-gray-200 rounded-full w-11 after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:h-5 after:w-5 after:shadow-sm after:rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-cyan-500 peer-checked:border-cyan-500 after:transition-all after:duration-300"></div>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800 shadow-sm">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-6 h-6 fill-yellow-500 stroke-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
              <div>
                <p className="font-bold tracking-wider text-white">Big Lamp</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <label
                htmlFor="light.big_lamp"
                className="relative flex items-center cursor-pointer"
              >
                <input
                  onChange={onClickSwitch}
                  className="sr-only peer"
                  type="checkbox"
                  id="light.big_lamp"
                  value="light.big_lamp"
                  defaultChecked={enabled}
                />
                <div className="h-6 bg-gray-200 border-2 border-gray-200 rounded-full w-11 after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:h-5 after:w-5 after:shadow-sm after:rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-cyan-500 peer-checked:border-cyan-500 after:transition-all after:duration-300"></div>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800 shadow-sm rounded-b-md">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-6 h-6 fill-yellow-500 stroke-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
              <div>
                <p className="font-bold tracking-wider text-white">
                  Small Lamp
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <label
                htmlFor="light.hue_white_lamp_1"
                className="relative flex items-center cursor-pointer"
              >
                <input
                  onChange={onClickSwitch}
                  className="sr-only peer"
                  type="checkbox"
                  id="light.hue_white_lamp_1"
                  value="light.hue_white_lamp_1"
                  defaultChecked={enabled}
                />
                <div className="h-6 bg-gray-200 border-2 border-gray-200 rounded-full w-11 after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:h-5 after:w-5 after:shadow-sm after:rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-cyan-500 peer-checked:border-cyan-500 after:transition-all after:duration-300"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightscard;
