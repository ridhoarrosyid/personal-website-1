export default function HireMe() {
  const data = [
    {
      img: "./Frame 4.png",
      title: "Workaholic",
      desc: "I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive.",
    },
    {
      img: "./Frame 5.png",
      title: "Communicative",
      desc: "I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.",
    },
    {
      img: "./Frame 7.png",
      title: "Cooperative",
      desc: "Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal.",
    },
    {
      img: "./Frame 6.png",
      title: "Perfectionist",
      desc: "I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.",
    },
  ];
  return (
    <div className="pt-40 pb-28">
      <h2 className="text-white text-2xl font-semibold text-center mb-32">
        Why Hire Me
      </h2>
      <div className="flex mx-10 justify-center gap-10">
        {data.map((e, i) => (
          <div className="flex flex-col items-center w-64" key={i}>
            <div className="rounded-full aspect-square w-40 border-srGrey border grid place-items-center ">
              <div className="rounded-full aspect-square w-32 border-lavender border grid place-items-center bg-[rgba(116,86,255,0.1)]">
                <img className="w-10" src={e.img} />
              </div>
            </div>
            <h3 className=" mt-20 mb-10 text-white text-xl font-semibold">
              {" "}
              {e.title}{" "}
            </h3>
            <p className="text-srGrey text-justify"> {e.desc} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
