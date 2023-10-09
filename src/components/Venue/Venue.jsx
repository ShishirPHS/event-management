const Venue = () => {
  return (
    <div className="bg-[#f0eeee] py-28 mb-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-center mb-12 text-4xl font-semibold">Venues</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="px-4 pt-4 pb-6 border border-[#c9b6b6] text-center rounded-lg">
            <img
              className="h-[300px] rounded-lg object-cover w-full"
              src={`https://i.ibb.co/C90vPD4/Pan-Pacific-Sonargaon-Dhaka.jpg`}
              alt="Image of pan pacific sonargaon dhaka"
            />
            <h2 className="text-2xl mt-4 font-semibold">
              Pan Pacific Sonargaon Dhaka
            </h2>
          </div>
          <div className="px-4 pt-4 pb-6 border border-[#c9b6b6] text-center rounded-lg">
            <img
              className="h-[300px] rounded-lg object-cover w-full"
              src={`https://i.ibb.co/HCGGkQq/Radisson-Blu-Chattogram-Bay-View.jpg`}
              alt="Image of radisson blu chattogram bay view"
            />
            <h2 className="text-2xl mt-4 font-semibold">
              Radisson Blu Chattogram Bay View
            </h2>
          </div>
          <div className="px-4 pt-4 pb-6 border border-[#c9b6b6] text-center rounded-lg">
            <img
              className="h-[300px] rounded-lg object-cover w-full"
              src={`https://i.ibb.co/2KKGkf3/Sairu-Hill-Resorts.jpg`}
              alt="Image of sairu hill resort"
            />
            <h2 className="text-2xl mt-4 font-semibold">Sairu Hill Resorts</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
