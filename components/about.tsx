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
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
        am an experienced software engineer with a strong background in the U.S.
        healthcare industry. For the past 3 years, I have been developing
        innovative solutions that help healthcare providers, insurers, and
        patients navigate the complexities of the American healthcare system
        more efficiently. My technical skill set includes proficiency in C#,
        .NET, SQL Server, JavaScript, React.js, Microsoft Dynamics CRM, MongoDB,
        Docker, Python, NumPy, and Pandas. I have a deep understanding of
        full-stack development and have experience in building custom electronic
        health record (EHR) systems and patient-facing mobile applications.
        Beyond my technical expertise, I possess a robust set of professional
        and social skills, including teamwork, problem-solving, collaboration,
        communication, and decision-making. I excel at working with
        cross-functional teams to deliver solutions that meet the unique needs
        of healthcare professionals and their patients. I am fluent in Nepali,
        Hindi, and English, which allows me to communicate effectively with a
        diverse range of stakeholders and clients. Throughout my career, I have
        developed a keen eye for detail and a deep understanding of the
        regulatory landscape that governs the U.S. healthcare industry. I am
        committed to staying at the forefront of technological advancements and
        leveraging my skills to develop solutions that streamline processes,
        improve patient outcomes, and transform the way healthcare is delivered
        in the United States.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
