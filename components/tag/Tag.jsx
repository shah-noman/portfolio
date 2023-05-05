const Tag = () => {
  const tagList = [
    "Figma",
    "Adobe",
    "Social Media",
    "Punctuality",
    "Time Management",
    "Flexibility",
    "Pro Active",
    "Teaching",
    // "Flexibility",
    // "Print", 
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
