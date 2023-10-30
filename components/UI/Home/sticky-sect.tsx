import WidthClamp from "@/components/Common/Custom/width-clamp";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowLeftIcon, ArrowRight, ExternalLink, Search, User2Icon } from "lucide-react";
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

      const pinSections = gsap.utils.toArray(".pin-sec");

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
        <section className={`w-full absolute top-0 left-0 h-full flex items-center bg-[#ae7769] pin-sec pin-sect-1`}>
          <WidthClamp>
            <div className="space-y-2">
              <h4 className="text-[8rem] font-extrabold">We Buy</h4>
              <div className="space-y-6">
                <p className="text-2xl font-light max-w-3xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Beatae vero dicta, delectus excepturi et accusantium modi! Molestiae
                  mollitia
                </p>

                <button className="text-xl flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 hover:px-5 py-2">
                  <span>Contact Us</span>
                  <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </WidthClamp>
        </section>

        <section className={`w-full absolute top-0 left-0 h-full flex items-center bg-[#9c6b5f] pin-sec pin-sect-2`}>
          <WidthClamp>
            <div className="space-y-2 text-right">
              <h4 className="text-[8rem] font-extrabold">We Sell</h4>
              <div className="space-y-6">
                <p className="text-2xl font-light max-w-3xl ml-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Beatae vero dicta, delectus excepturi et accusantium modi! Molestiae
                  mollitia
                </p>

                <button className="text-xl float-right flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 hover:px-5 py-2">
                  <ArrowLeft className="group-hover:-translate-x-4 transition-transform duration-300" />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </WidthClamp>
        </section>

        <section className={`w-full absolute top-0 left-0 h-full flex items-center bg-[#ae7769] pin-sec pin-sect-3`}>
          <WidthClamp>
            <div className="space-y-2">
              <h4 className="text-[8rem] font-extrabold">Visit Our Showcase</h4>
              <div className="space-y-6">
                <p className="text-2xl font-light max-w-3xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Beatae vero dicta, delectus! Molestiae mollitia
                </p>

                <button className="text-xl flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 py-2">
                  <span>Visit Showcase</span>

                  <ExternalLink className="transition-transform duration-300" />
                </button>
              </div>
            </div>
          </WidthClamp>
        </section>

        <section
          className={`w-full absolute top-0 left-0 h-full flex text-center items-center bg-[#9a695d] pin-sec pin-sect-4`}
        >
          <WidthClamp>
            <div className="space-y-2">
              <h4 className="text-[8rem] font-extrabold">Skincare Finder</h4>
              <div className="space-y-6">
                <p className="text-2xl font-light max-w-3xl mx-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Beatae vero dicta, delectus! Molestiae mollitia
                </p>

                <div className="grid place-content-center">
                  <button className="text-xl flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 py-2">
                    <span>Find A Skincare Product</span>

                    <Search className="transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </WidthClamp>
        </section>

        {/* {new Array(4).fill(null).map((_, idx) => {
          const background = classNames({
            "bg-amber-100": idx + 1 === 1,
            "bg-amber-200": idx + 1 === 2,
            "bg-amber-300": idx + 1 === 3,
            "bg-amber-400": idx + 1 === 4,
          });
          return (
            <section
              key={idx}
              className={`${background} w-full absolute top-0 left-0 h-full flex items-center justify-center text-black pin-sec pin-sect-${
                idx + 1
              }`}
            >
              <div>
                <p className="font-medium text-4xl">Section {idx + 1}</p>
              </div>
            </section>
          );
        })} */}
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
