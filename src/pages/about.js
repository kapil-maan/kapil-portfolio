import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import pic from "../../public/images/profile/img.png";
import { useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import TransitionEffect from "@/components/transitionEffect";
import Experience from "@/components/Experience";
import DiffSkills from "@/components/DiffSkills";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          motionValue.set(value);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current; // Store ref.current in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use the stored variable
        observer.unobserve(currentRef);
      }
    };
  }, [value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Kapil Kumar | About Page</title>
        <meta name="description" content="Portfolio made with next.js" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 text-8xl lg:text-7xl md:text-7xl 
          sm:text-6xl sm:mb-8 xs:mb-8 xs:text-4xl" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 xs:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4
            lg:col-span-4 md:col-span-8 sm:col-span-8 xs:col-span-8 md:order-2 sm:order-2 xs:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                - Hi, I&apos;m Kapil Kumar, an aspiring web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With a solution-centered mind and optimistic attitude, I
                am always looking for new and innovative ways to bring my
                visions to life.
              </p>
              <p className="my-4 font-medium">
                - I believe that design is about more than just making things
                look pretty, it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                - Whether I&apos;m working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. With growing expertise in
                DSA, I am evolving everyday to be better version of myself than yesterday.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4
            lg:col-span-4 md:col-span-8 sm:col-span-8 xs:col-span-8
            md:order-1 sm:order-1 xs:order-1"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <Image
                src={pic}
                alt="mee"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center
            lg:col-span-8 lg:flex-row lg:items-center
            md:col-span-8 md:flex-row md:items-center
            sm:col-span-8 sm:flex-row sm:items-center
            xs:col-span-8 xs:flex-row xs:items-center 
            md:order-3 sm:order-3 xs:order-3">
                <div className="flex flex-col items-end justify-center xl:items-center
                lg:items-center md:items-center sm:items-center xs:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={9} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
                lg:text-center md:text-center sm:text-center xs:text-center
                md:text-lg sm:text-base xs:text-sm">
                    College CGPA
                  </h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center
                lg:items-center md:items-center sm:items-center xs:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={200} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
                lg:text-center md:text-center sm:text-center xs:text-center
                md:text-lg sm:text-base xs:text-sm">
                    Streak on LeetCode
                  </h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center
                lg:items-center md:items-center sm:items-center xs:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={5} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
                lg:text-center md:text-center sm:text-center xs:text-center
                md:text-lg sm:text-base xs:text-sm">
                    Projects completed
                  </h2>
                </div>
            </div>
          </div>
          <Skills />
          <DiffSkills/>
          <Experience />
          <Education />
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default about;
