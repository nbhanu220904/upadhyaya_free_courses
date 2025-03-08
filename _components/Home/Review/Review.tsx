// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ReviewCard from "./ReviewCard";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const Review = () => {
//   return (
//     <div className="pt-16 pb-16 bg-[#fcf6fa]">
//       <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
//         What client say about us
//       </h1>
//       <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
//         <Carousel
//           arrows={false}
//           autoPlay={true}
//           autoPlaySpeed={5000}
//           infinite
//           responsive={responsive}
//           showDots
//         >
//           <ReviewCard name="Jessy Doe" image="/images/c1.png" />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Review;

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ReviewCard from "./ReviewCard";

// const responsive = {
//   desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
//   tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
//   mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
// };

// const reviews = [
//   {
//     name: "Jessy Doe",
//     image: "/images/c1.png",
//     feedback: "Upadhyaya has completely transformed the way I learn and grow!",
//   },
//   {
//     name: "John Smith",
//     image: "/images/c2.png",
//     feedback: "The structured courses and real-time support are just amazing!",
//   },
//   {
//     name: "Sophia Lee",
//     image: "/images/c3.png",
//     feedback: "This platform offers everything I need to advance in my career.",
//   },
// ];

// const Review = () => {
//   return (
//     <div className="py-16 bg-[#fcf6fa]">
//       <h1 className="text-2xl md:text-3xl font-bold text-center">
//         What Our Clients Say About Us
//       </h1>
//       <div className="mt-12 w-[90%] md:w-[80%] mx-auto">
//         <Carousel
//           arrows={false}
//           autoPlay
//           autoPlaySpeed={5000}
//           infinite
//           responsive={responsive}
//           showDots
//         >
//           {reviews.map((review, index) => (
//             <ReviewCard
//               key={index}
//               name={review.name}
//               image={review.image}
//               feedback={review.feedback}
//             />
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Review;
