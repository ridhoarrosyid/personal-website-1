export default function Stat() {
  const stat = [
    {
      number: "05",
      desc: "Client Order",
    },
    {
      number: "03",
      desc: "Complete Project",
    },
    {
      number: "4.5",
      desc: "Stars Ranting",
    },
    {
      number: "06",
      desc: "Month Experience",
    },
  ];
  return (
    <div className="bg-[rgba(19,19,19,0.9)] flex justify-center gap-4 py-28 font-semibold">
      {stat.map((e, i) => (
        <div
          key={i}
          className="h-[233px] w-[255px] bg-[#0f0f0f] border-2 border-[#999] text-white border-dashed rounded-lg flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl"> {e.number} </h1>
          <p> {e.desc} </p>
        </div>
      ))}
    </div>
  );
}
