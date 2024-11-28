import JobListings from "../components/JobListings";
import HeroCard from "../components/HeroCard";
import BackButton from "../components/BackButton";

const JobsPage = () => {
  return (
    <>
      <BackButton />
      <HeroCard message1="Discover New Opportunities" message2="Browse through our curated list of tech and financial industry jobs and find the perfect fit for your skills and interests." button={false} />
      <JobListings />
    </>
  );
};

export default JobsPage;
