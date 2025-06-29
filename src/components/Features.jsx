import { MessageCircle, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { BsWindowSplit } from "react-icons/bs";
import IMG from "../../public/images/tab&phone.png";

const Features = () => {
  const [isWidgetOpen, setIswidgetOpen] = useState(true);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <section className="min-h-screen relative py-24 px-4">
      <div className="container max-w-8xl text-center mx-auto">
        {/* center text */}
        <div>
          <h2 className="font-extrabold capitalize text-3xl lg:text-4xl text-textC tracking-wider mb-3">
            Easy-to-use interfaces on every <br /> platform
          </h2>
          <p className="text-sm opacity-25">
            since most of our features work in a completely automated way,{" "}
            <br /> you will mainly use our apps to discover new TV shows <br />{" "}
            recommended for you and discuss the most interesting episodes <br />{" "}
            with like-minded
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-4">
          {/* widget */}
          <div className="text-red-500 font-bold md:text-2xl flex flex-col space-y-3.5 text-[20px]">
            <button
              onClick={() => setIswidgetOpen((prev) => !prev)}
              className="flex items-center justify-center  w-full"
            >
              <BsWindowSplit size={25} className="mr-2" />{" "}
              <a href="#cus">Customized Dashboard</a>
            </button>
            <div
              className={`${
                isWidgetOpen ? "flex" : "hidden"
              } flex-col items-end justify-center mx-auto opacity-55   space-y-2.5  md:mr-2`}
            >
              <button className="flex items-center mr-11" onClick={toggleDark}>
                <MoonIcon size={20} className="mr-2" />{" "}
                <span href="">Automatic Day & Night</span>
              </button>
              <button className="flex items-center ">
                <MessageCircle size={20} className="mr-2" />{" "}
                <a href="">Integrated Chat Platform</a>
              </button>
            </div>
          </div>

          {/* img */}
          <div>
            <img src={IMG} alt="image" className="shadow-2xs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
