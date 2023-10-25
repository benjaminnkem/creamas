"use client";

import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <div className="fixed bg-[#4b2f28] text-white -z-[10] w-full min-h-screen top-0 left-0">
        <Image
          src={"/images/backgrounds/model1.png"}
          width={600}
          height={900}
          alt="Model"
          draggable={false}
          className="mx-auto relative top-20 select-none"
        />
      </div>

      <section></section>
    </main>
  );
};

export default HomePage;
