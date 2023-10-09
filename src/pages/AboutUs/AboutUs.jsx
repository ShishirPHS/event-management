const AboutUs = () => {
  return (
    <div className="container mx-auto mt-12 px-4 lg:px-0">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Creating Unforgettable Social Events
        </p>
      </div>
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-[700px] mx-auto">
          Our mission is to transform your special moments into unforgettable
          experiences. We are dedicated to creating, planning, and executing
          social events that reflect your unique style, vision, and personality.
        </p>
      </div>
      <div className="mb-24">
        <h2 className="text-3xl font-semibold text-gray-800 mb-20 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg shadow-lg p-6">
            <img
              src="https://i.ibb.co/th5JhWY/team-Member1.jpg"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Event Planner</p>
            <p className="text-gray-600">
              John is a creative and detail-oriented event planner with over 10
              years of experience in the industry. He is dedicated to making
              every event he plans a truly memorable experience for clients and
              their guests.
            </p>
            <ul className="mt-4">
              <li className="text-gray-600">
                <span className="font-semibold">Experience:</span> 10+ years in
                event planning
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Specialization:</span> Weddings,
                birthday parties
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Email:</span>{" "}
                john.doe@example.com
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Phone:</span> (123) 456-7890
              </li>
            </ul>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-6">
            <img
              src="https://i.ibb.co/Fw1v9pR/team-Member2.png"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Sarah Johnson
            </h3>
            <p className="text-gray-600">Catering Coordinator</p>
            <p className="text-gray-600">
              Sarah brings her culinary expertise to the table as our catering
              coordinator. With a background in gourmet cuisine and event
              management, she ensures that every bite at your event is a
              delectable experience.
            </p>
            <ul className="mt-4">
              <li className="text-gray-600">
                <span className="font-semibold">Experience:</span> 7+ years in
                catering and event management
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Specialization:</span> Food and
                beverage services, menu planning
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Email:</span>{" "}
                sarah.johnson@example.com
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Phone:</span> (555) 123-7890
              </li>
            </ul>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-6">
            <img
              src="https://i.ibb.co/th5JhWY/team-Member1.jpg"
              alt="Team Member Name"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Event Planner</p>
            <p className="text-gray-600">
              John is a creative and detail-oriented event planner with over 10
              years of experience in the industry. He is dedicated to making
              every event he plans a truly memorable experience for clients and
              their guests.
            </p>
            <ul className="mt-4">
              <li className="text-gray-600">
                <span className="font-semibold">Experience:</span> 10+ years in
                event planning
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Specialization:</span> Weddings,
                corporate events
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Email:</span>{" "}
                john.doe@example.com
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Phone:</span> (123) 456-7890
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-24 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Our Experience</h2>
        <p className="text-gray-600 max-w-[650px] mx-auto mt-4">
          We have been planning and executing exceptional events for X years.
          Explore some of our recent projects in our portfolio.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
