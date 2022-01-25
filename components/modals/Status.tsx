import React, { useState, useEffect, useRef, useContext } from "react";
import { Transition } from "@headlessui/react";
import StatusContext from "../../contexts/StatusContext";
import { ConnectionStatus } from "../../types";

const StatusText: Record<ConnectionStatus, string> = {
  [ConnectionStatus.Connected]: "Connected",
  [ConnectionStatus.Disconnected]: "Disconnected",
  [ConnectionStatus.Reconnecting]: "Reconnecting",
};

const Status: React.FunctionComponent = ({}) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>();
  const status = useContext(StatusContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setShowModal(true);
    if (status !== ConnectionStatus.Reconnecting) {
      setTimeout(() => {
        setShowModal(false);
        timeout.current = undefined;
      }, 3000);
    }
  }, [status]);

  return (
    <Transition
      show={showModal}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="p-4 mb-4 shadow-lg text-cyan-700 bg-cyan-400 shadow-cyan-500/50 rounded hover:bg-cyan-500 fixed bottom-2.5 right-2.5"
        role="alert"
      >
        <span className="font-bold">{StatusText[status]}</span>
      </div>
    </Transition>
  );
};

export default Status;
