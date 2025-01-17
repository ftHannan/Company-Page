import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        I'm
        <span className="bg-gradient-to-r from-sky-700 to-sky-900 text-transparent bg-clip-text">
          {" "}
          Abdul Hannan,
        </span>
        <span className="bg-gradient-to-r from-sky-900 to-sky-700 text-transparent bg-clip-text">
          {" "}
          Full Stack Developer
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Founder & CTO at GST Solutions | Software Development, Graphics
        Designing & Social Media Marketing Services | Delivered 500+ Projects |
        Strategic thinker | Certified & Experienced Full Stack Developer
      </p>
      <div className="flex jusify-center my-10">
        <a
          href="https://www.linkedin.com/company/gst-solutions-s/"
          className="bg-gradient-to-r from-sky-700 to-sky-900 py-3 px-4 mx-3 rounded-md"
        >
          Our Page
        </a>
        <a
          href="mailto:infogstsolutionllc@gmail.com"
          className="py-3 px-4 mx-3 border rounded-md"
        >
          Email Us
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sky-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sky-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
