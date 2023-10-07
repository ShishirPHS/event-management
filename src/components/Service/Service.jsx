import PropTypes from "prop-types";

const Service = ({ singleData }) => {
  const { image, title, short_description, price, details_button } = singleData;

  return (
    <div className="rounded-lg border drop-shadow-md p-5">
      <img
        className="rounded-lg h-[250px] object-cover w-full"
        src={image}
        alt={`Image for ${title}`}
      />
      <div className="mt-3">
        <h3 className="mb-4 text-2xl text-[#1C1B1B] font-medium">{title}</h3>
        <p>{short_description.slice(0, 150)}...</p>
        <p className="font-bold my-3">Price: {price}</p>
        <div className="text-center">
          <button className="w-full py-3 rounded-lg text-white bg-[#4a4040]">
            {details_button}
          </button>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default Service;
