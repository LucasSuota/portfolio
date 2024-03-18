import MyPhoto from "@/components/MyPhoto/MyPhoto";
import SocialMedias from "@/components/SocialMedias/SocialMedias";
import Text from "@/components/Text/Text";

import React from "react";

const Home = () => {
  return (
    <main className="w-full h-dvh bg-black flex flex-col gap-4 items-center justify-center">
      <div className="w-full text-center">
        <Text />
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-2">
        <MyPhoto />
      </div>
      <div>
        <SocialMedias />
      </div>
    </main>
  );
};

export default Home;
