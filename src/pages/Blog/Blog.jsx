const Blog = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="w-[80%] mx-auto">
        <div className="p-9 border rounded-lg">
          <h1 className="text-3xl font-bold mb-16">
            Some Essential Tips for Planning the Perfect Wedding
          </h1>
          <img
            className="rounded-lg mb-7"
            src={"https://i.ibb.co/C90vPD4/Pan-Pacific-Sonargaon-Dhaka.jpg"}
          />
          <p className="text-gray-600 mb-2 font-medium">
            Posted on October 15, 2023
          </p>
          <div>
            <div className="mb-7">
              <h3 className="font-bold text-2xl mb-3">1. Start Early</h3>
              <p className="font-medium">
                Begin your wedding planning journey as early as possible. This
                allows you to secure your preferred venue, vendors, and date.
                Early planning also helps in spreading out tasks, reducing
                stress, and ensuring everything runs smoothly.
              </p>
            </div>
            <div className="mb-7">
              <h3 className="font-bold text-2xl mb-3">
                2. Set a Realistic Budget
              </h3>
              <p className="font-medium">
                Determine your budget before making any decisions. Be realistic
                about what you can afford and allocate funds to various aspects
                of the wedding, such as catering, attire, and decorations. A
                well-planned budget will help you avoid overspending.
              </p>
            </div>
            <div className="mb-7">
              <h3 className="font-bold text-2xl mb-3">
                3. Create a Guest List
              </h3>
              <p className="font-medium">
                Compile a list of guests you would like to invite. Keep in mind
                that the size of your guest list impacts your choice of venue
                and budget. Make sure to consult with your partner and
                prioritize close family and friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
