import React from "react";
import CommunityCard from "./CommunityCard";

const testimonials = [
  {
    name: "Might Guy",
    date: "Jun 11, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellu",
    borderColor: "#3D37ED",
  },
  {
    name: "Sakura Haruno",
    date: "Jun 12, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus",
    borderColor: "#08E6E6",
  },
  {
    name: "Kakashi Hatake",
    date: "Jun 13, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    borderColor: "#FF6B6B",
  },
];

const moreTestimonials = [
  {
    name: "Neji Hyuga",
    date: "Jun 17, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellu",
    borderColor: "#A259FF",
  },
  {
    name: "Rock Lee",
    date: "Jun 18, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellu",
    borderColor: "#ffff",
  },
  {
    name: "Tenten",
    date: "Jun 19, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellu",
    borderColor: "#FFB703",
  },
];

const Commun = () => {
  return (
    <section className="min-h-screen relative  bg-community flex items-center justify-center overflow-hidden">
      <div className="container max-w-8xl mx-auto text-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2  place-items-center items-center text-center gap-3.5">
          {/* texts */}
          <div className="h-full flex flex-col space-y-3.5 justify-center  md:w-[70%] lg:w-full text-left">
            <p className=" text-2xl text-white/40 ml-5 mt-2">Community</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold lg:whitespace-nowrap text-transparent bg-clip-text bg-[linear-gradient(180.17deg,#3D37ED_20.91%,#08E6E6_90.13%)]">
              We believe in the power of <br /> community
            </h2>
            <p className="text-sm font-bold text-transparent bg-clip-text bg-[linear-gradient(180.17deg,#3D37ED_20.91%,#08E6E6_90.13%)] mb-7">
              our goal is to create a product and service that you 're satisfied
              with and use it every day. this is why we 're constantly working
              on our service to make it better every day and really listen to
              what our users has to say.
            </p>
            <a className="w-full bg-[linear-gradient(180.17deg,#3D37ED_20.91%,#08E6E6_90.13%)] p-2 rounded-lg text-2xl font-bold tracking-wider cursor-pointer text-center">
              Read more Testimonials
            </a>
          </div>
          {/* card */}
          <div className=" w-full  lg:w-[80%] flex  lg:flex-row justify-center mx-auto lg:justify-between gap-2.5 p-3 md:mr-18 ">
            {/* first row */}
            <div className=" lg:flex lg:flex-col lg:space-y-3 grid grid-cols-1 md:grid-cols-2  gap-3.5 lg:translate-y-8 lg:overflow-hidden">
              {testimonials.map((item, index) => (
                <CommunityCard
                  key={index}
                  name={item.name}
                  borderColor={item.borderColor}
                  date={item.date}
                  text={item.text}
                />
              ))}
            </div>
            {/* second row */}
            <div className=" lg:flex lg:flex-col lg:space-y-6 hidden lg:overflow-hidden lg:transform lg:-translate-y-4">
              {moreTestimonials.map((item, index) => (
                <CommunityCard
                  key={index}
                  name={item.name}
                  borderColor={item.borderColor}
                  date={item.date}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commun;
