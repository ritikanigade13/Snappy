import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex sm:h-[650px] md:h-[680px] rounded-sm overflow-hidden bg-gray-400 bg-clip-padding justify-between mx-20 mb-20 backdrop-filter backdrop-blur-md bg-opacity-5 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
