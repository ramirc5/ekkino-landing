import Image from "next/image";

export default function Pkgs() {
  let pkg = ["MARKETING PACKAGES"];
  const options = ["Marketing", "Design", "Both"];
  let selection = options[0];

  return (
    <div className="w-[80%] mx-auto flex">
      <div className="flex">
        <h1 className="text-bold text-[32px]">{pkg[0]}</h1>
        <div className="flex"></div>
      </div>
      <div className="flex "></div>
    </div>
  );
}
