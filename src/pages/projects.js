import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import pic1 from "../../public/images/projects/careerhunt.jpg";
import pic2 from "../../public/images/projects/pawcare.jpg";
import pic3 from "../../public/images/projects/calculator.jpg";
import pic4 from "../../public/images/projects/eventopia.jpg";
import pic5 from "../../public/images/projects/finanseer.png";
import pic6 from "../../public/images/projects/kyr2.png"
import TransitionEffect from "@/components/transitionEffect";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  const [theme] = useThemeSwitcher();
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border 
        border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        md:flex-col md:p-8 sm:flex-col sm:p-8 xs:flex-col"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
            lg:w-full md:w-full sm:w-full xs:w-full"
      >
        <FramerImage
          src={img} // Direct path to the image
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full md:w-full sm:w-full xs:w-full
            lg:pl-0 lg:pt-6 md:pl-0 md:pt-6 sm:pl-0 sm:pt-6 xs:pl-0 xs:pt-6"
      >
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl xs:text-2xl
                    md:text-3xl lg:text-3xl"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm xs:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg border bg-dark text-light hover:bg-light hover:text-dark hover:border-dark 
                    p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light
                    sm:px-4 sm:text-base xs:px-4 xs:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
        bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
            md:-right-2 md:w-[101%] sm:-right-2 sm:w-[101%] xs:-right-2 xs:w-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img} // Direct path to the image
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base sm:text-base xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base sm:text-base xs:text-base"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8 md:w-6 sm:w-6 xs:w-6"
          >
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Kapil Kumar | Projects Page</title>
        <meta name="description" content="My projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="text-8xl mb-16 lg:text-7xl md:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl
                    xs:mb-8"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
                    md:gap-x-8 sm:gap-y-24 xs:gap-x-0 xs:gap-y-24"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Knowing Your Rights"
                img={pic6}
                summary="An app to increase and spread constitutional literacy to all ages"
                link="https://kyr-frontend.vercel.app/"
                github="https://github.com/AkankshRakesh/KYR1"
                type="MERN app built on Typescript SWC and TailwindCSS"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-12">
              <Project
                title="Eventopia"
                img={pic4}
                link="https://eventopia-olive.vercel.app/"
                github="https://github.com/AkankshRakesh/Eventopia"
                type="MERN app built on Typescript and tailwind"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-12">
              <Project
                title="Finance Dashboard"
                img={pic5}
                link="https://finanseer-ruddy.vercel.app/"
                github="https://github.com/AkankshRakesh/Finanseer-frontend"
                type="MERN app with predictions and analytics using ML"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-12">
              <Project
                title="Job career search app"
                img={pic1}
                link="https://careerhunt.onrender.com/"
                github="https://github.com/AkankshRakesh/CareerHunt"
                type="MERN stack based app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-12">
              <Project
                title="Pawcare"
                img={pic2}
                link="https://akankshrakesh.github.io/Paw-care/"
                github="https://github.com/AkankshRakesh/Paw-Care"
                type="HTML, CSS and JS website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-12">
              <article
                className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
            bg-light dark:bg-dark dark:border-light p-6 relative"
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                rounded-br-3xl"
                />
                <FramerImage
                  src={pic3} // Direct path to the image
                  alt="Calculator"
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="w-full flex flex-col items-start justify-between mt-4">
                  <span className="text-primary dark:text-primaryDark font-medium text-xl">
                    Python Calculator
                  </span>
                  <Link
                    href=""
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-3xl font-bold">
                      Calculator
                    </h2>
                  </Link>
                  <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                      href="https://github.com/AkankshRakesh/Calculator"
                      target="_blank"
                      className="w-10"
                    >
                      {" "}
                      <GithubIcon />{" "}
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
