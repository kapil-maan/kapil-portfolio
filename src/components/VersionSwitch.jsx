"use client";

import { FaExchangeAlt } from "react-icons/fa";

export default function VersionSwitch() {

  return (

    <a
      href="https://kapil-maan.vercel.app"

      className="
        fixed
        bottom-6
        right-6
        z-[999]

        flex
        items-center
        gap-2

        px-5
        py-3

        rounded-full

        bg-gradient-to-r
        from-cyan-500
        to-blue-600

        text-white

        shadow-2xl

        font-medium

        animate-bounce
        hover:animate-none
        hover:scale-110

        transition-all
        duration-300
      "
    >

      <FaExchangeAlt size={18} />

      Switch UI

    </a>

  );

}