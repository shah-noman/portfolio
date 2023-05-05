const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
              I'm a passionate .NET developer with two years of experience. I specialize in using programming languages, frameworks, and tools like C#, ASP.NET, Visual Studio, and SQL Server to build robust and scalable applications for businesses of all sizes.

Over the years, I have worked on a variety of projects, from small startups to large enterprises. I'm proud to say that each of these projects was a success, delivering measurable business value to my clients.

I hold a Master's degree in Computer Science. My experience in the field has taught me the importance of staying up-to-date with the latest technologies and trends, which is why I am always learning and expanding my skill set.

If you're interested in working together or just want to connect, feel free to reach out to me on LinkedIn or via email. I'm always open to new opportunities and love collaborating with other developers to create amazing software solutions. Thanks for visiting my website, and I look forward to hearing from you soon!
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                My ability to understand and empathize with user needs and behavior is one of my most valuable skills.
                My aim is to bring across your message and identity in the most
                creative way.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
