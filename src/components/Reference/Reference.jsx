import { referenceTitle, referenceSubtitle } from "../../data";
import { AnimateIt } from "../../components";

import imageOne from "../../assets/image-one.svg";
import imageTwo from "../../assets/image-two.svg";
import imageThree from "../../assets/image-three.svg";

const Reference = () => {
  return (
    <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <AnimateIt delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </AnimateIt>
      <AnimateIt delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </AnimateIt>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <AnimateIt delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <img src={imageOne} alt="" />
            <img src={imageTwo} alt="" />
          </div>
        </AnimateIt>
        <AnimateIt delay={0.2} direction="left">
          <div>
            <img src={imageThree} alt="" />
          </div>
        </AnimateIt>
      </div>
    </div>
  );
};

export default Reference;
