import HeroCard from "../components/HeroCard";
import JobListings from "../components/JobListings";
import MiniCard from "../components/MiniCard";
import SmallCards from "../components/SmallCards";
import ViewMoreButton from "../components/ViewMoreButton";
const HomePage = () => {
  return (
    <>
      <HeroCard />
      <SmallCards />
      <MiniCard />
      <JobListings limit={true} />
      <ViewMoreButton />
    </>
  );
};

export default HomePage;
