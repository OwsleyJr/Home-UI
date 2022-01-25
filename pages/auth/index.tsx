import React from "react";
import { useRouter } from "next/dist/client/router";

import { useDiscovery, useAuth } from "@hooks";
import { StatusModal } from "@components/modals";

const Auth = () => {
  const router = useRouter();
  const { connect } = useAuth();
  const { instances, loading } = useDiscovery(1);

  if (router.query.auth_callback) router.push("/");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-xs rounded-md shadow-xl shadow-cyan-600">
        <div className="p-8 pt-10">
          <div>
            <h2 className="text-xl font-bold text-cyan-600">
              Home Assistant Login
            </h2>
            <div className="flex items-center justify-center p-5">
              {loading && !instances.length ? (
                <p className="text-gray-600">Loading...</p>
              ) : (
                <button
                  className="px-6 py-2 rounded shadow-lg bg-cyan-400 text-grey-900 shadow-cyan-500/50 hover:bg-cyan-500"
                  onClick={() => connect(instances[0])}
                >
                  {instances[0].locationName}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <StatusModal />
    </div>
  );
};

export default Auth;
