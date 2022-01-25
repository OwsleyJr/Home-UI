import React from "react";
import { useAuth, useEntities, useHass, useQuery } from "@hooks";

// type Query = {
//   query: string | undefined;
// };

const Navbar: React.FunctionComponent = () => {
  const { logout } = useAuth();
  const { connection } = useHass();
  const entities = useEntities();

  return (
    <nav className="flex justify-between w-full px-6 py-4 shadow-md bg-cyan-600 shadow-cyan-600">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">Home</h1>
      </div>
      <div className="flex items-center space-x-10">
        <p className="font-bold">
          Total # of Entities: {Object.keys(entities).length}
        </p>

        {/* <p># of Found Entities: {Object.keys(results).length}</p> */}
        <button
          className="px-6 py-2 text-white bg-gray-800 rounded shadow-lg hover:bg-gray-700"
          onClick={() => logout(connection)}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
