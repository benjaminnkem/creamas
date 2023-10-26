import WidthClamp from "@/components/Common/Custom/width-clamp";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const HomeStickySect = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
          pin: ".roller",
        },
      });

      timeline.fromTo(".roller", { scale: 2, rotate: 0 }, { scale: 1, rotate: 720 * 2 });
    }, container);

    return () => cxt.revert();
  });

  return (
    <section className="my-20">
      <WidthClamp>
        <div className="w-full p-10 grid gap-6 grid-cols-2" ref={container}>
          <div className="grid grid-cols-2 gap-2">
            {new Array(20).fill(null).map((_, idx) => (
              <div key={idx} className="border-4 border-[#ae7769] rounded-md h-auto aspect-square w-full"></div>
            ))}
          </div>
          <div className="grid place-content-center self-start">
            <div className="w-24 h-24 border-8 rounded-full border-t-transparent roller border-[#ae7769]"></div>
          </div>
        </div>
      </WidthClamp>
    </section>
  );
};

export default HomeStickySect;
