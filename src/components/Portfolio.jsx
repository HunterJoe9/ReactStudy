import ProtfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      <ProtfolioCard />
      <ProtfolioCard />
      <ProtfolioCard />
      <ProtfolioCard />
      <ProtfolioCard />
      <ProtfolioCard />
    </ul>
  );
};

export default Portfolio;
