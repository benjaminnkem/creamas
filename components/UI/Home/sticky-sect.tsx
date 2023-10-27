import WidthClamp from "@/components/Common/Custom/width-clamp";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User2Icon } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

const HomeStickySect = () => {
  const container = useRef<HTMLDivElement>(null);
  const pinSection = useRef<HTMLDivElement>(null);
  const displayWrap = useRef<HTMLDivElement>(null);

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
      const t1 = gsap.timeline();

      t1.from(".pin-sect-2", { xPercent: 100, ease: "none", duration: 2 });
      t1.from(".pin-sect-3", { xPercent: 100, ease: "none", duration: 2 });
      t1.from(".pin-sect-4", { xPercent: 100, ease: "none", duration: 2 });

      ScrollTrigger.create({
        animation: t1,
        trigger: pinSection.current,
        start: "top top",
        end: "+=4100",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
      });
    }, pinSection);

    return () => cxt.revert();
  }, []);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const t = gsap.timeline({
        scrollTrigger: {
          trigger: displayWrap.current,
        },
      });
      t.from(".dis-con", {
        yPercent: 100,
        opacity: 0,
        width: 0,
        stagger: { amount: 0.5, from: "start" },
        // duration: 5,
      });
    }, displayWrap);

    return () => cxt.revert();
  });

  return (
    <div id="sect-wrapper__">
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

      <div ref={pinSection} className="relative h-screen">
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
              className={`${background} w-full absolute top-0 left-0 h-full flex items-center justify-center text-black pin-sect-${
                idx + 1
              }`}
            >
              <div>
                <p className="font-medium text-4xl">Section {idx + 1}</p>
              </div>
            </section>
          );
        })}
      </div>

      <section ref={displayWrap}>
        <div className="h-screen flex items-center">
          <WidthClamp>
            <div className="flex items-center justify-evenly gap-4">
              {new Array(3).fill(null).map((_, idx) => (
                <div
                  key={idx}
                  className="p-10 border rounded-lg flex-1 backdrop-blur-md border-primaryColorLight dis-con"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero a incidunt accusamus repellat
                    recusandae eligendi unde excepturi ducimus provident.
                  </p>
                </div>
              ))}
            </div>
          </WidthClamp>
        </div>
      </section>
    </div>
  );
};

export default HomeStickySect;
