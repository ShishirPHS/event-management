import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const allServices = useLoaderData();
  const { id } = useParams();

  const service = allServices.find((singleService) => singleService.id == id);

  const { title } = service;

  return (
    <div className="container mx-auto">
      <h2>service details of :{title}</h2>
    </div>
  );
};

export default ServiceDetails;
