// import Image from "next/image";
// import React from "react";

// const WhyChooseCard = ({ image, title, linkText }) => {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
//       <Image src={image} alt={title} width={70} height={70} priority />
//       <h3 className="mt-4 text-lg font-semibold">{title}</h3>
//       <a href="#" className="mt-2 text-blue-600 font-medium hover:underline">
//         {linkText}
//       </a>
//     </div>
//   );
// };

// export default WhyChooseCard;
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
  linkText: string;
};

const WhyChooseCard = ({ image, title, description, linkText }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-lg mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">
        {description}
      </p>
      <p className="text-center font-semibold text-blue-700 hover:text-blue-900 transition-all duration-200 cursor-pointer">
        {linkText} &#8594;
      </p>
    </div>
  );
};

export default WhyChooseCard;
