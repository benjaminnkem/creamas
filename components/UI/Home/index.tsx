"use client";

import WidthClamp from "@/components/Common/Custom/width-clamp";
import { playfair } from "@/lib/utils/fonts";
import classNames from "classnames";
import { ShoppingBagIcon } from "lucide-react";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeStickySect from "./sticky-sect";
import toast from "react-hot-toast";
import Lenis from "@studio-freight/lenis";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const overlayContainer = useRef<HTMLDivElement>(null);
  const bgImageContainer = useRef<HTMLDivElement>(null);

  // Spline
  const bunnySpline = useRef();

  function onLoad(spline: any) {
    const obj = spline.findObjectByName("bunny");

    bunnySpline.current = obj;
  }

  // Lenis
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Transitions
  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      gsap
        .timeline()
        .to(".overlay-layer", { height: 0, stagger: { amount: 0.5 } })
        .to(overlayContainer.current, { height: 0 });
    }, overlayContainer);

    return () => cxt.revert();
  }, []);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".lhero",
          { opacity: 0, yPercent: 10 },
          { opacity: 1, yPercent: 0, delay: 0.25, ease: "power1.out", stagger: { amount: 0.75, from: "start" } }
        )
        .fromTo("#bgModel", { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 1 });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#aboutSection",
          start: "top center",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#testimoniesSection",
          start: "top center",
          end: "center top",
          endTrigger: "#lastHead",
          // markers: true,
          scrub: 0.5,
        },
      });

      tl.to("#bunny", {
        scale: 1.2,
        opacity: 0.2,
        x: 500,
        rotateX: -Math.PI / 14,
        rotateZ: Math.PI / 36,
      });

      tl2
        .to("#bunny", {
          scale: 1,
          opacity: 1,
          x: -400,
        })
        .to("#bunny", { opacity: 0, scale: 1 });
    }, bgImageContainer);

    return () => cxt.revert();
  });

  const joinUsClass = classNames([
    "bg-transparent px-4 py-2 rounded-sm font-semibold duration-200 transition-colors gap-2",
    "border-2 border-white/50 hover:bg-[#ae7769] hover:border-transparent flex items-center",
  ]);

  return (
    <main ref={bgImageContainer} id="smooth-wrapper">
      <div id="smooth-content">
        <div className="overlay flex fixed z-[200] h-screen w-full top-0 left-0" ref={overlayContainer}>
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="flex-1 bg-[#643f36] h-screen overlay-layer"></div>
            ))}
        </div>

        <div id="descHome">
          <section className="fixed bg-primaryColor text-white -z-[10] w-full min-h-screen top-0 left-0">
            <div className="relative min-h-screen w-full flex items-center justify-center opacity-0" id="bgModel">
              <Suspense fallback={<div></div>}>
                <Spline
                  scene="https://prod.spline.design/pTzIrpLRs9-ONnnB/scene.splinecode"
                  onLoad={onLoad}
                  id="bunny"
                />
                <div id="bunny"></div>
              </Suspense>
            </div>
          </section>

          <section id="heroSection">
            <div className="h-screen -mt-[3rem] flex items-center">
              <WidthClamp addClass="flex items-center">
                <div className="flex-1 space-y-6">
                  <h1 className={`${playfair.className} font-extrabold lhero text-6xl text-white leading-relaxed`}>
                    A Glowing Skin Is <br />
                    All We Know<span className="text-[#ae7769]">.</span>
                  </h1>
                  <p className="font-extralight max-w-md lhero">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eius sapiente tenetur inventore
                    veritatis impedit? Enim accusamus ex amet magni aspernatur
                  </p>

                  <button className={`${joinUsClass} lhero`} onClick={() => toast.success("Product coming soon...")}>
                    <span>Order Now</span>
                    <ShoppingBagIcon size={18} />
                  </button>
                </div>
              </WidthClamp>
            </div>
          </section>

          <section className="h-screen flex items-center my-20" id="aboutSection">
            <WidthClamp>
              <div className="flex justify-between">
                <div className="flex-1 space-y-5">
                  <h2 className={`${playfair.className} font-extrabold text-6xl`}>About Us</h2>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Veniam doloremque iure tenetur. Vel, quas mollitia autem eligendi animi officiis
                    deleniti nam sunt, qui quos tempora impedit? Temporibus iste eligendi sint!
                  </p>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem,
                  </p>
                </div>
                <div className="flex-1"></div>
              </div>
            </WidthClamp>
          </section>

          <section className="h-screen flex items-center my-20" id="testimoniesSection">
            <WidthClamp>
              <div className="flex justify-between">
                <div className="flex-1"></div>
                <div className="flex-1 space-y-5">
                  <h3 className={`${playfair.className} font-extrabold text-6xl`}>Our Work</h3>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Veniam doloremque iure tenetur. Vel, quas mollitia autem eligendi animi officiis
                    deleniti nam sunt, qui quos tempora impedit? Temporibus iste eligendi sint!
                  </p>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem,
                  </p>
                </div>
              </div>
            </WidthClamp>
          </section>
          <section className="h-screen flex items-center my-20">
            <WidthClamp>
              <div className="flex justify-between">
                <div className="flex-1"></div>
                <div className="flex-1 space-y-5">
                  <h3 className={`${playfair.className} font-extrabold text-6xl`}>Our Heading</h3>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Veniam doloremque iure tenetur. Vel, quas mollitia autem eligendi animi officiis
                    deleniti nam sunt, qui quos tempora impedit? Temporibus iste eligendi sint!
                  </p>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem,
                  </p>
                </div>
              </div>
            </WidthClamp>
          </section>
          <section className="h-screen flex items-center my-20" id="lastHead">
            <WidthClamp>
              <div className="flex justify-between">
                <div className="flex-1"></div>
                <div className="flex-1 space-y-5">
                  <h3 className={`${playfair.className} font-extrabold text-6xl`}>Our Heading 2</h3>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Veniam doloremque iure tenetur. Vel, quas mollitia autem eligendi animi officiis
                    deleniti nam sunt, qui quos tempora impedit? Temporibus iste eligendi sint!
                  </p>
                  <p className="text-lg leading-relaxed font-extralight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur eius quidem expedita
                    reiciendis dicta libero quod assumenda voluptates sit! Lorem,
                  </p>
                </div>
              </div>
            </WidthClamp>
          </section>
        </div>

        <HomeStickySect />
      </div>
    </main>
  );
};

export default HomePage;
