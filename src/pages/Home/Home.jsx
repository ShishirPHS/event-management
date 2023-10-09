import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Venue from "../../components/Venue/Venue";
import QuestionsAndAns from "../../components/QuestionsAndAns/QuestionsAndAns";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto mb-24">
        <h3 className="text-center text-4xl mb-12 font-semibold">
          Our Services
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.map((singleData) => (
            <Service key={singleData.id} singleData={singleData}></Service>
          ))}
        </div>
      </div>
      <Venue></Venue>
      <QuestionsAndAns></QuestionsAndAns>
      <Footer></Footer>
    </div>
  );
};

export default Home;
