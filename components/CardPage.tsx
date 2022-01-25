import React from "react";
import VacuumCard from "./VacuumCard";
import Lightscard from "./Lightscard";
import SingleLightCard from "./SingleLightCard";

const CardPage: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <VacuumCard />
      <Lightscard />
      <SingleLightCard />
    </div>
  );
};

export default CardPage;
