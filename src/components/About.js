const About = () => {
  return (
    <div className="w-full h-auto mt-5 p-14 text-black mb-[10vh] font-Poppins sm:p-4">
      {/* <h1>About Page</h1>
      <h2>Lazy Loading or OnDemand Loading Implemented on This Route</h2> */}
      <ul className="flex flex-col gap-6 text-base md:text-sm sm:gap-3 sm:text-xs">
        <li className="font-bold text-2xl md:text-lg sm:text-base">
          😎 Key Features
        </li>
        <li>📌 Shimmer UI for Better UserExperience</li>
        <li>📌 Search Feature </li>
        <li>📌 Sort on diffrent category Feature </li>
        <li>📌 Cart Feature Add Remove Item From Cart</li>
        <li>📌 Checking network connection</li>
        <li>📌 Implemented Lazy Loading or OnDemand Loading on This Router</li>
      </ul>
      <ul className="flex flex-col gap-6 text-base mt-10 md:text-sm sm:gap-3 sm:text-xs sm:mt-7">
        <li className="font-bold text-2xl md:text-lg sm:text-base">
          ⚙️ Tech Stack used
        </li>
        <li>➡️ React JS for UI </li>
        <li>➡️ Parcel for Bundling </li>
        <li>➡️ Redux for state management</li>
        <li>➡️ Tailwind CSS for Styling</li>
      </ul>
    </div>
  );
};

export default About;
