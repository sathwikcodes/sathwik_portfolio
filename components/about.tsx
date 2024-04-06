"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Sathwik Batta, a B.Tech student majoring in Computer Science at{" "}
        <span className="font-medium">SRM University, AP.</span> I have good
        experience in{" "}
        <span className="font-medium">
          full-stack web development, Flutter, blockchain engineering, and
          AI/ML.
        </span>{" "}
        <span className="italic">
          I serve as a Board Member for Next Tech Lab, a student-run
          multidisciplinary lab at SRM University.
        </span>{" "}
        Recently, I won a <span className="underline">national hackathon</span>{" "}
        called Unfold23, conducted by CoinDCX, with a prize of $1000 and was
        nominated as a candidate for{" "}
        <span className="underline">ETH Grants 2.0,</span> eligible for a $5000
        grant. I am always eager to learn new technologies. Currently, I am
        seeking an{" "}
        <span className="font-medium">internship/full-time position</span> as a
        software developer. Feel free to visit my LinkedIn/GitHub to explore my
        work and professional information.
      </p>
    </motion.section>
  );
}
