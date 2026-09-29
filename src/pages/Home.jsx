import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <div className="bg-[#fffaf3] text-[#2b2118]">
      <Hero />
      <Categories />
      <HowItWorks />
    </div>
  );
}

export default Home;
