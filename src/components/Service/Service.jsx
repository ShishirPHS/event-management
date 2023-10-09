import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ singleData }) => {
  const { id, image, title, short_description, price, details_button } =
    singleData;

  return (
    <div className="rounded-lg border shadow-inner p-5 flex flex-col">
      <img
        className="rounded-lg lg:h-[180px] xl:h-[250px] object-cover w-full"
        src={image}
        alt={`Image for ${title}`}
      />
      <div className="mt-3 flex-grow">
        <h3 className="mb-4 text-2xl text-[#1C1B1B] font-medium">{title}</h3>
        <p>{short_description.slice(0, 150)}...</p>
      </div>
      <p className="font-bold my-3">Price: {price}</p>
      <div className="text-center">
        <Link to={`/service/${id}`}>
          <button className="w-full py-3 rounded-lg text-white bg-[#4a4040]">
            {details_button}
          </button>
        </Link>
      </div>
    </div>
  );
};

Service.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default Service;
