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
        I'm Sathwik Batta, a B.Tech student majoring in Computer Science with a
        specialization in AI-ML at
        <span className="font-medium">SRM University, AP</span>, where I have
        maintained a<span className="font-medium">CGPA of 8.5.</span> I have
        substantial experience in
        <span className="font-medium">
          full-stack web development, Flutter, blockchain engineering, and
          AI/ML.
        </span>
        <span className="italic">
          I serve as a Board Member for Next Tech Lab, a student-run
          multidisciplinary lab at SRM University, and Syndicate Blockchain Lab,
          fostering innovation and research.
        </span>
        Recently, I won a <span className="underline">national hackathon</span>{" "}
        called Unfold23, conducted by CoinDCX, with a prize of $1000, and was
        also nominated for
        <span className="underline"> ETH Grants 2.0</span>, eligible for a $5000
        grant. Additionally, I was part of the winning team for the
        <span className="underline"> Smart India Hackathon 2024</span>, solving
        critical problems with innovative solutions.
        <br />
        <br />I have solved over{" "}
        <span className="font-medium">200+ DSA problems</span> on platforms like
        LeetCode and GFG, ranking among the Top 50 in university-level coding
        contests. I am passionate about building scalable, efficient systems and
        exploring cutting-edge technologies in AI/ML and blockchain.
        <br />
        <br />
        Currently, I am seeking an
        <span className="font-medium">
          {" "}
          internship or full-time position
        </span>{" "}
        as a software developer. Feel free to visit my LinkedIn or GitHub to
        explore my work and professional journey.
      </p>
    </motion.section>
  );
}
