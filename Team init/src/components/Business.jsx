import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[0px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[0px] h-[0px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[0%] h-[0%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[0px] leading-[0px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[0px] leading-[0px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You handle your Will, <br className="sm:block hidden" /> we’ll handle fitness
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Don’t limit your challenges. Challenge your limits.” – Jerry Dunn
      Keep pushing yourself and breaking those barriers! 💪
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
