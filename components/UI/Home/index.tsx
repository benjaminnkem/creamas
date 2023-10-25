"use client";

import WidthClamp from "@/components/Common/Custom/width-clamp";
import { playfair } from "@/lib/utils/fonts";
import classNames from "classnames";
import Image from "next/image";
import { ShoppingBagIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

const HomePage = () => {
  const overlayContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.off("scroll", () => {});
  }, []);

  useEffect(() => {
    const cxt = gsap.context(() => {
      gsap
        .timeline()
        .to(".overlay-layer-1", { height: 0, duration: 0.4 })
        .to(".overlay-layer-2", { height: 0, duration: 0.4 })
        .to(".overlay-layer-3", { height: 0, duration: 0.4 })
        .to(overlayContainer.current, { height: 0 });
    }, overlayContainer);

    return () => cxt.revert();
  }, []);

  const joinUsClass = classNames([
    "bg-transparent px-4 py-2 rounded-sm font-semibold duration-200 transition-colors gap-2",
    "border-2 border-white/50 hover:bg-[#ae7769] hover:border-transparent flex items-center",
  ]);

  return (
    <main>
      <div className="overlay flex absolute z-[200] h-screen w-full top-0 left-0" ref={overlayContainer}>
        <div className="flex-1 bg-[#4b2f28] h-screen overlay-layer-1"></div>
        <div className="flex-1 bg-[#4b2f28] h-screen overlay-layer-2"></div>
        <div className="flex-1 bg-[#4b2f28] h-screen overlay-layer-3"></div>
      </div>

      <div className="fixed bg-[#4b2f28] text-white -z-[10] w-full min-h-screen top-0 left-0">
        <div className="relative min-h-screen w-full flex items-center justify-center">
          <Image
            src={"/images/backgrounds/model1.png"}
            width={600}
            height={900}
            alt="Model"
            draggable={false}
            className="mx-auto absolute -bottom-[15rem] select-none"
          />
        </div>
      </div>

      {/* Hero */}
      <section>
        <div className="h-screen -mt-[3rem] flex items-center">
          <WidthClamp addClass="flex items-center">
            <div className="flex-1 space-y-6">
              <h1 className={`${playfair.className} font-extrabold text-6xl text-white leading-relaxed`}>
                A Glowing Skin Is <br />
                All We Know<span className="text-[#ae7769]">.</span>
              </h1>
              <p className="font-extralight max-w-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eius sapiente tenetur inventore veritatis
                impedit? Enim accusamus ex amet magni aspernatur
              </p>
              <button className={joinUsClass}>
                <span>Order Now</span>
                <ShoppingBagIcon size={18} />
              </button>
            </div>
            <div className="flex-1 relative min-h-[30rem]">
              <div className="absolute space-y-2 left-32 top-0 max-w-[18rem] backdrop-blur-sm p-2">
                <p className="font-bold text-xl w-fit">
                  <span className="text-3xl text-[#ae7769]">1.</span> Glowing Skin
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, fugiat.</p>
              </div>
              <div className="absolute space-y-2 right-0 top-[8rem] max-w-[18rem] backdrop-blur-sm p-2">
                <p className="font-bold text-xl w-fit">
                  <span className="text-3xl text-[#ae7769]">2.</span> Natural
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="absolute bottom-10 left-40 space-y-2 max-w-[18rem] backdrop-blur-sm p-2">
                <p className="font-bold text-xl w-fit">
                  {" "}
                  <span className="text-3xl text-[#ae7769]">3.</span> On Time Delivery
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, fugiat.</p>
              </div>
            </div>
          </WidthClamp>
        </div>
      </section>

      <section className="h-screen flex items-center my-20">
        <WidthClamp>
          <div className="flex justify-between">
            <div className="flex-1 space-y-5">
              <h2 className={`${playfair.className} font-extrabold text-6xl`}>About Us</h2>
              <p className="text-lg leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita reiciendis
                dicta libero quod assumenda voluptates sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veniam doloremque iure tenetur. Vel, quas mollitia autem eligendi animi officiis deleniti nam sunt, qui
                quos tempora impedit? Temporibus iste eligendi sint!
              </p>
              <p className="text-lg leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita reiciendis
                dicta libero quod assumenda voluptates sit! Lorem,
              </p>
            </div>
            <div className="flex-1"></div>
          </div>
        </WidthClamp>
      </section>

      <section className="h-screen flex items-center my-20">
        <WidthClamp>
          <div className="flex justify-between">
            <div className="flex-1"></div>
            <div className="flex-1 space-y-5">
              <h2 className={`${playfair.className} font-extrabold text-6xl`}>About Us</h2>
              <p className="text-lg leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita reiciendis
                dicta libero quod assumenda voluptates sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veniam doloremque iure tenetur. Vel, quas mollitia autem eligendi animi officiis deleniti nam sunt, qui
                quos tempora impedit? Temporibus iste eligendi sint!
              </p>
              <p className="text-lg leading-relaxed font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita reiciendis
                dicta libero quod assumenda voluptates sit! Lorem,
              </p>
            </div>
          </div>
        </WidthClamp>
      </section>
    </main>
  );
};

export default HomePage;
