import WidthClamp from "@/components/Common/Custom/width-clamp";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowLeftIcon, ArrowRight, ExternalLink, Search, User2Icon } from "lucide-react";
import Image from "next/image";
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
      const sections = gsap.utils.toArray<HTMLElement>(".pin-sec");

      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: pinSection.current,
          start: "",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + pinSection.current?.offsetWidth,
        },
      });

      sections.forEach((section) => {
        const texts = section.querySelectorAll(".anim");
        const button = section.querySelectorAll(".pin-sec-button");
        const image = section.querySelector(".pin-img");

        const shareObj = { y: -30, opacity: 0 };
        const shareObjTrig = { trigger: section, start: "left center", containerAnimation: scrollTween };

        gsap.from(texts, {
          ...shareObj,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.1,
          scrollTrigger: shareObjTrig,
        });

        gsap.from(button, {
          ...shareObj,
          ease: "none",
          delay: 0.1,
          duration: 0.2,
          scrollTrigger: shareObjTrig,
        });

        gsap.from(image, {
          scale: 1.3,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "left left",
            end: () => "+=" + section.offsetWidth,
            containerAnimation: scrollTween,
            scrub: true,
          },
        });
      });
    }, pinSection);

    return () => cxt.revert();
  });

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
  }, []);

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

      <div className="relative overflow-x-hidden">
        <div ref={pinSection} className="flex w-[400vw]">
          <section className={`relative w-[100vw] h-[100vh] bg-[#ae7769] overflow-hidden pin-sec pin-sect-1`}>
            <div className="relative top-0 left-0 w-full h-full">
              <Image
                src={"/images/backgrounds/facial.jpg"}
                width={1920}
                height={1280}
                className="object-cover w-full pin-img absolute top-0 left-0 h-full"
                id="facialImg"
                alt="Product"
              />
              <div className="absolute top-0 left-0 h-full w-full grad-bottom"></div>
            </div>
            <div className="flex items-center absolute top-0 left-0 w-full h-full">
              <WidthClamp>
                <div className="space-y-2">
                  <h4 className="text-[8rem] font-extrabold anim">We Do Facial</h4>
                  <div className="space-y-6">
                    <p className="text-2xl font-light max-w-3xl anim">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit
                      amet consectetur adipisicing elit. Beatae vero dicta, delectus excepturi et accusantium modi!
                      Molestiae mollitia
                    </p>

                    <button className="text-xl flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 hover:px-5 py-2 pin-sec-button">
                      <span>Book Now</span>
                      <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </WidthClamp>
            </div>
          </section>
          <section className={`relative w-[100vw] h-[100vh] bg-[#ae7769] overflow-hidden pin-sec pin-sect-2`}>
            <div className="relative top-0 left-0 w-full h-full">
              <Image
                src={"/images/backgrounds/spa.jpg"}
                width={1920}
                height={1280}
                className="object-cover w-full pin-img absolute top-0 left-0 h-full"
                id="facialImg"
                alt="Product"
              />
              <div className="absolute top-0 left-0 h-full w-full grad-bottom"></div>
            </div>
            <div className="flex items-center absolute top-0 left-0 w-full h-full">
              <WidthClamp>
                <div className="space-y-2">
                  <h4 className="text-[8rem] font-extrabold anim">We SPA</h4>
                  <div className="space-y-6">
                    <p className="text-2xl font-light max-w-3xl anim">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit
                      amet consectetur adipisicing elit. Beatae vero dicta, delectus excepturi et accusantium modi!
                      Molestiae mollitia
                    </p>

                    <button className="text-xl flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 hover:px-5 py-2 pin-sec-button">
                      <span>Contact Us</span>
                      <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </WidthClamp>
            </div>
          </section>
          <section className={`relative w-[100vw] h-[100vh] bg-[#ae7769] overflow-hidden pin-sec pin-sect-3`}>
            <div className="relative top-0 left-0 w-full h-full">
              <Image
                src={"/images/backgrounds/skin-care.jpg"}
                width={1920}
                height={1280}
                className="object-cover w-full pin-img absolute top-0 left-0 h-full"
                id="facialImg"
                alt="Product"
              />
              <div className="absolute top-0 left-0 h-full w-full grad-bottom"></div>
            </div>
            <div className="flex items-center absolute top-0 left-0 w-full h-full">
              <WidthClamp>
                <div className="space-y-2">
                  <h4 className="text-[8rem] font-extrabold anim">We Deliver WorldWide</h4>
                  <div className="space-y-6">
                    <p className="text-2xl font-light max-w-3xl anim">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit
                      amet consectetur adipisicing elit. Beatae vero dicta, delectus excepturi et accusantium modi!
                      Molestiae mollitia
                    </p>

                    <button className="text-xl flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 hover:px-5 py-2 pin-sec-button">
                      <span>Order Now</span>
                      <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </WidthClamp>
            </div>
          </section>

          <section className={`relative w-[100vw] h-[100vh] bg-[#ae7769] overflow-hidden pin-sec pin-sect-4`}>
            <div className="relative top-0 left-0 w-full h-full">
              <Image
                src={"/images/backgrounds/woman-model.jpg"}
                width={1920}
                height={1280}
                className="object-cover w-full pin-img absolute top-0 left-0 h-full"
                id="facialImg"
                alt="Product"
              />
              <div className="absolute top-0 left-0 h-full w-full grad-bottom"></div>
            </div>
            <div className="flex items-center absolute top-0 left-0 w-full h-full">
              <WidthClamp>
                <div className="space-y-2">
                  <h4 className="text-[8rem] font-extrabold anim">We&apos;re Also Hiring</h4>
                  <div className="space-y-6">
                    <p className="text-2xl font-light max-w-3xl anim">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, atque. Lorem, ipsum dolor sit
                      amet consectetur adipisicing elit. Beatae vero dicta, delectus excepturi et accusantium modi!
                      Molestiae mollitia
                    </p>

                    <button className="text-xl flex items-center gap-2 group border border-[#e6b7abd6] px-4 duration-300 hover:px-5 py-2 pin-sec-button">
                      <span>Contact Us</span>
                      <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </WidthClamp>
            </div>
          </section>
        </div>
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
