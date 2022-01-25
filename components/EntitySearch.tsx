import React, { useState } from "react";
import { useQuery } from "@hooks";

const EntitySearch: React.FunctionComponent = () => {
  const [query, setQuery] = useState<string | undefined>();
  const results = useQuery(query || "");

  const t = results["foo"];

  return (
    <div className="h-screen mt-16">
      <div className="flex items-center max-w-xl pb-10 mx-auto">
        <input
          type="text"
          className="w-full px-4 py-4 text-lg rounded-md outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-4">
        <pre className="text-white">{JSON.stringify(results, null, 2)}</pre>
      </div>
    </div>
  );
};

export default EntitySearch;
