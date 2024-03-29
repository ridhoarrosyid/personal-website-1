export default function LatestPorject() {
  const project = [
    {
      img: "./Frame 5006 1.png",
      title: "DaurUang Mobile App",
    },
    {
      img: "",
      title: "Ada Mekanik Mobile App",
    },
    {
      img: "",
      title: "InDorse Mobile App",
    },
  ];
  return (
    <div className="text-white font-semibold text-xl mt-56 pb-20">
      <h2 className="text-center mb-40 text-2xl">Latest Project</h2>
      <div className="flex flex-col gap-10 px-10">
        {project.map((e, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#131313] rounded-lg h-40 px-10"
          >
            {e.img ? (
              <img
                className="w-52 aspect-video bg-[rgba(116,86,255,0.2)] rounded-lg border border-lavender"
                src={e.img}
                alt="gambar"
              />
            ) : (
              <div className="w-52 aspect-video bg-[rgba(116,86,255,0.2)] rounded-lg border border-lavender"></div>
            )}
            <p>{e.title}</p>
            <button className="w-[124px] h-[30px] bg-lavender font-normal text-base rounded  ">
              View Detail
            </button>
          </div>
        ))}
      </div>
      <div className="mx-10 px-10 mt-20 flex justify-between items-center bg-[#131313] rounded-lg h-48 ">
        <div>
          <h1>Have Any Project In Mind?</h1>
          <p className="font-thin text-base text-srGrey ">
            I&apos;m avaliable for freelancing
          </p>
        </div>
        <div className=" flex gap-10 font-normal text-lg ">
          <button className="border border-white w-[178px] h-[60px] rounded-lg ">
            More Project
          </button>
          <button className=" w-[178px] h-[60px] flex items-center justify-center gap-3 bg-lavender rounded-lg">
            <img src="./eva_email-fill.png" />
            Email Me
          </button>
        </div>
      </div>
    </div>
  );
}
