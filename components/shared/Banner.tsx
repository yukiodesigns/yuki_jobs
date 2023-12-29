import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="bg-green-500 text-white text-center py-10">
      <h2 className="text-4xl font-bold mb-4">Job Opportunities Are Always Open</h2>
      <p className="text-lg mb-8">Discover amazing opportunities with us!</p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Button variant='outline' className="mb-4 md:mb-0 md:mr-4 text-green-500">Search for jobs</Button>
        <Button variant='outline' className=" text-green-500">Post a job</Button>
      </div>
    </div>
  );
};

export default Banner;
