import React from "react";
import { StatusModal } from "@components/modals";
import Navbar from "@components/Navbar";
import CardPage from "@components/CardPage";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Navbar />
      <CardPage />
      <StatusModal />
    </div>
  );
};

export default Home;
