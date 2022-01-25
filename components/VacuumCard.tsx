import React from "react";
import { useHass } from "@hooks";
import { callService } from "home-assistant-js-websocket";

const VacuumCard: React.FunctionComponent = () => {
  const { connection } = useHass();

  const onClickStart = () => {
    callService(connection, "vacuum", "start", {
      entity_id: "vacuum.roborock_vacuum_s5",
    });
  };

  const onClickStop = () => {
    callService(connection, "vacuum", "stop", {
      entity_id: "vacuum.roborock_vacuum_s5",
    });
  };

  const onClickHome = () => {
    callService(connection, "vacuum", "return_to_base", {
      entity_id: "vacuum.roborock_vacuum_s5",
    });
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="p-8 rounded-lg bg-cyan-600">
        <div className="flex items-center justify-center px-32">
          <h1 className="text-lg font-extrabold tracking-wider">
            Robot Vacuum
          </h1>
        </div>
        <div className="flex flex-col mt-1 text-sm">
          <div className="flex items-center justify-between p-3 bg-gray-800 shadow-sm rounded-t-md">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <p className="font-bold tracking-wider text-white">Start</p>
              </div>
            </div>
            <div>
              <button
                className="px-6 py-2 text-white rounded shadow-lg bg-cyan-600 hover:bg-cyan-600"
                onClick={() => onClickStart()}
              >
                Start
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800 shadow-sm">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <p className="font-bold tracking-wider text-white">Stop</p>
              </div>
            </div>
            <button
              className="px-6 py-2 text-white rounded shadow-lg bg-cyan-600 hover:bg-cyan-600"
              onClick={() => onClickStop()}
            >
              Stop
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800 shadow-sm">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <p className="font-bold tracking-wider text-white">Go Home</p>
              </div>
            </div>
            <button
              className="px-5 py-2 text-white rounded shadow-lg bg-cyan-600 hover:bg-cyan-600"
              onClick={() => onClickHome()}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacuumCard;
