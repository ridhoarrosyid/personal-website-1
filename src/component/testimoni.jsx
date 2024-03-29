export default function Testimoni() {
  return (
    <div className="font-semibold pb-10">
      <h1 className="text-srGrey text-center">Testimoni</h1>
      <h2 className="text-white text-center text-2xl mb-40">
        What Do They Say About Me
      </h2>
      <div className="flex bg-[#131313] px-20 items-center gap-5">
        <img
          src="./Mask group.png"
          className="-translate-y-10 bg-[#1d1d1d] rounded-lg "
        />
        <div>
          <p className="text-srGrey mb-5">
            SamCreative has been the best designer I have ever worked with. The
            UI designs he created are top-notch and the design system he
            integrated allows for straight forward fixes throughout every area
            of the app. I&apos;m looking forward to partner up with him on
            upcoming projects.
          </p>
          <p className="text-lavender text-3xl mb-2">Iqbal Hafish</p>
          <p className="text-white font-normal">Project Manager, DaurUang</p>
        </div>
      </div>
    </div>
  );
}
