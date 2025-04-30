"use client"

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SparklesText } from "@/components/magicui/sparkles-text";


export default function home() {



  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Destenia Reva Nanda Aulia Putri",
      designation: "2802491620",
      src: "https://i.imgur.com/rU9MXhO.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Fannya Felidzia Zarate",
      designation: "2802487023",
      src: "https://i.imgur.com/wrMVlnp.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Khansadia Arsaila",
      designation: "2802533932",
      src: "https://i.imgur.com/i3rihrs.jpeg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Nadia Fahra Ali Safitri",
      designation: "2802459014",
      src: "https://i.pinimg.com/736x/4f/d6/36/4fd636fb4ca4bdc1c116f364b3e55d8c.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Tarisya Noor Iqlima",
      designation: "2802487440",
      src: "https://i.pinimg.com/736x/27/49/4e/27494e3e65c4712072c70215d73c6b9c.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Sadira Azzalia",
      designation: "2802449966",
      src: "https://i.pinimg.com/736x/8d/2c/b8/8d2cb822cca0b7e6a2c8652c33dc4344.jpg",
    },
  ];

  return (
    <div className="mx-auto h-auto overflow-hidden bg-black mt-20">
    <div className="h-[30rem]">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        AI-Based Digital CBT Therapy
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        An AI-powered digital CBT therapy platform to help you manage stress, anxiety, and negative thoughts—anytime, anywhere.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="/ai">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Start chatting
            </button>
          </Link>
        </div>
      </Vortex>
    </div>
  
    {/* AnimatedTestimonials di luar Vortex tapi tetap satu halaman */}
    <SparklesText className="text-center mt-10">Our Team</SparklesText>
    <AnimatedTestimonials testimonials={testimonials} />
  </div>
  
  );
}
