"use client";
import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { gsap } from "gsap";

interface AccordionCardProps {
  title: string;
}

const Card2: React.FC<AccordionCardProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        duration: 0.3,
        height: isOpen ? 0 : "auto",
        ease: "back.out(1.7)",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4 text-slate-600 px-3">
      <button className="bg-white border-b-1 border-black w-full px-4 py-2 text-left text-sm font-medium hover:bg-white focus:outline-none dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 " onClick={handleToggle}>
        <div className="flex items-center justify-between">
          <span className="font-Poppins font-semibold text-[16px]">{title}</span>
          <ChevronDownIcon className={`h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "h-auto" : "h-0"}`}>
        <div className="font-Poppins text-[14px] p-4">
          <ul className="list-disc">
            <li>Exploratory Data Analysis</li>
            <ul className="list-disc pl-6">
              <li>Intro to Exploratory Data Analysis</li>
              <li>Mengidentifikasi pertanyaan untuk Exploratory Data Analysis</li>
              <li>Explorasi parameter statistik dari data</li>
              <li>Mengelompokkan data</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card2;
