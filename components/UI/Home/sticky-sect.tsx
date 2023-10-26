import WidthClamp from "@/components/Common/Custom/width-clamp";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User2Icon } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

const HomeStickySect = () => {
  const container = useRef<HTMLDivElement>(null);
  const pinsect = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
          pin: ".roller",
        },
      });

      timeline.fromTo(".roller", { scale: 2, rotate: 0 }, { scale: 1, rotate: 720 * 2 });

      const t2 = gsap.timeline({
        scrollTrigger: { trigger: ".rate-box", start: "top 80%", end: "bottom bottom" },
      });

      t2.fromTo(
        ".rate-box",
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: { amount: 0.25, ease: "power1.out" } }
      );
    }, container);

    return () => cxt.revert();
  }, []);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      gsap.to(".pin-sect", {
        scrollTrigger: { start: "top top", end: "bottom bottom", trigger: ".pin-sect", pin: true },
      });
    }, pinsect);

    return () => cxt.revert();
  });

  return (
    <>
      <section className="my-20">
        <WidthClamp>
          <div className="w-full p-10 grid gap-6 grid-cols-2" ref={container}>
            <div className="grid grid-cols-2 gap-2">
              {new Array(6).fill(null).map((_, idx) => (
                <div
                  key={idx}
                  className="border-4 backdrop-blur-sm text-center space-y-4 p-6 border-[#ae7769] rounded-md h-auto aspect-square w-full rate-box"
                >
                  <div className="w-16 h-16 border-8 border-[#ae7769] rounded-full mx-auto grid place-content-center">
                    <User2Icon />
                  </div>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum quos sequi consequuntur.
                    Officia ab suscipit soluta perspiciatis deserunt quasi incidunt atque optio, debitis provident
                    nesciunt nam
                  </p>
                  <p className="italic font-medium">&quot;Ben. T. Nkem&quot;</p>
                </div>
              ))}
            </div>
            <div className="grid place-content-center self-start">
              <div className="w-24 h-24 border-8 rounded-full border-t-transparent roller border-[#ae7769]"></div>
            </div>
          </div>
        </WidthClamp>
      </section>

      <div ref={pinsect}>
        {new Array(4).fill(null).map((_, idx) => {
          const background = classNames({
            "bg-amber-100": idx + 1 === 1,
            "bg-amber-200": idx + 1 === 2,
            "bg-amber-300": idx + 1 === 3,
            "bg-amber-400": idx + 1 === 4,
          });
          return (
            <section
              key={idx}
              className={`h-screen ${background} w-full flex items-center justify-center text-black pin-sect`}
            >
              <div>
                <p className="font-medium text-4xl">Section {idx + 1}</p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default HomeStickySect;
