import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[0px]  max-w-[0px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[0px] h-[0px] object-contain" />
    <p className="font-poppins font-normal text-[0px] leading-[0px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[0px] h-[0px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[0px] leading-[0px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[0px] leading-[0px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
