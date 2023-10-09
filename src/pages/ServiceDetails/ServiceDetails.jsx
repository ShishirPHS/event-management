import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const allServices = useLoaderData();
  const { id } = useParams();

  const service = allServices.find((singleService) => singleService.id == id);

  const { title, image, price, short_description } = service;

  return (
    <div className="container mx-auto flex justify-center mb-28">
      <div className="flex flex-col items-center w-[80%] border p-8 rounded-2xl">
        <img className="rounded-lg" src={image} alt={`image for ${title}`} />
        <div className="mt-5 mb-8 flex flex-col lg:flex-row justify-between w-full font-semibold">
          <h3 className="text-3xl">{title}</h3>
          <p className="text-2xl mt-5 lg:mt-0">{price}</p>
        </div>
        <p className="text-justify">{short_description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
