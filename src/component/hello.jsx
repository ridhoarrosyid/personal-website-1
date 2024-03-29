export default function Hello() {
  return (
    <div className="flex gap-20">
      <div className="basis-7/12 *:text-justify">
        <div className="w-[500px] *:mb-10 last:mb-0 ">
          <h2 className="text-white text-3xl font-semibold">Hello Buds</h2>
          <h1 className="text-white text-5xl font-semibold">
            I am <span className="text-lavender">Dimas Ardiansyah</span>
          </h1>
          <p className="text-srGrey">UI/UX Design Enthusiast</p>
          <hr className="bg-srGrey w-20 h-0.5" />
          <p className="text-srGrey ">
            I&#39;m a person who has a keen interest in the design layout. I
            think presenting an attractive design is a matter of concern in
            developing a branding of products. To creates a good design, I focus
            on proper composition and visual decoration details in order to make
            it more professional. For the time being, I’m developing the skill
            for acquiring the UI/UX design for dynamic application and web
            development.
          </p>
        </div>
        <div className="*:w-40 *:h-14 *:text-white *:font-semibold *:rounded-md">
          <button className=" bg-lavender hover:bg-[#7456ff]">
            <img src="./file-text-fill.png" className="inline" /> Download CV
          </button>
          <button className="border-white border ml-5 hover:border-lavender hover:text-lavender transition-colors duration-500">
            More
          </button>
        </div>
      </div>
      <div className="pt-10">
        <img className="h-4/6" src="./Picture.png" />
        <div className="flex gap-5 items-center">
          <p className="text-white font-semibold ">Find Me On</p>
          <a href="#">
            <img src="./facebook.png" />
          </a>
          <a href="#">
            <img src="./whatsapp.png" />
          </a>
          <a href="#">
            <img src="./linkedin.png" />
          </a>
          <a href="#">
            <img src="./instagram.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
