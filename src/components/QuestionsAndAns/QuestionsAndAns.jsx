import "./QuestionsAndAns.css";

const QuestionsAndAns = () => {
  return (
    <div className="container mx-auto mb-20 grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <h3 className="text-4xl w-[328px] font-semibold mb-5">
          Frequently asked questions
        </h3>
        <p className="text-blue-600">Contact us for more info</p>
      </div>
      <div className="col-span-8">
        <div className="QA collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What types of social events do you specialize in organizing?
          </div>
          <div className="collapse-content">
            <p>
              We specialize in organizing a wide range of social events,
              including weddings, birthday parties, engagement parties, baby
              showers, and more.
            </p>
          </div>
        </div>
        <div className="QA collapse collapse-arrow border-b-stone-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What sets your event management team apart from others?
          </div>
          <div className="collapse-content">
            <p>
              Our experienced team combines creativity, attention to detail, and
              a personalized approach to bring your vision to life. We strive to
              make each event unique and memorable.
            </p>
          </div>
        </div>
        <div className="QA collapse collapse-arrow border-b-stone-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do you handle budget management for events?
          </div>
          <div className="collapse-content">
            <p>
              We work closely with our clients to establish a realistic budget
              for their event. Throughout the planning process, we keep you
              informed about expenses and help you make cost-effective
              decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAndAns;
