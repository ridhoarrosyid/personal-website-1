export default function GetInTouch() {
  return (
    <div className="flex justify-between px-20 pb-20 bg-[#0f0f0f]">
      <div>
        <h1 className="text-white font-semibold text-3xl mb-10">
          Get in Touch
        </h1>
        <p className="text-srGrey font-normal mb-8">
          For business and partnership inquiry please contact me below!
        </p>
        <ul>
          <li className="flex items-center mb-3 gap-5">
            <img src="./Group 7.png" />
            <div>
              <h2 className="text-srGrey">Phone</h2>
              <p className="text-white">0899-3415-875</p>
            </div>
          </li>
          <li className="flex items-center mb-3 gap-5">
            <img src="./Group 6.png" />
            <div>
              <h2 className="text-srGrey">Email</h2>
              <p className="text-white">dimasarsmith@gmail.com</p>
            </div>
          </li>
          <li className="flex items-center mb-3 gap-5">
            <img src="./Group 8.png" />
            <div>
              <h2 className="text-srGrey">Address</h2>
              <p className="text-white">
                Griya Japan Raya Tahap 4 B2/01, Sooko, Mojokerto
              </p>
            </div>
          </li>
        </ul>
      </div>
      <img src="./Vector.png" />
    </div>
  );
}
