import React from "react";
import photo from "../../assets/images/Open source-bro.png";

const Service = () => {
  const items = [
    {
      id: 1,
      title: "Frontend Web Development",
      description:
        "Design and develop visually appealing, responsive, and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks like React or Vue.js.",
      image: photo,
    },
    {
      id: 2,
      title: "Backend Web Development",
      description:
        "Build and maintain the server-side logic, database architecture, and APIs for seamless communication between the front end and the database using Node.js, Python, or PHP.",
      image: photo,
    },
    {
      id: 3,
      title: "Full Stack Development",
      description:
        "Master both frontend and backend development to create end-to-end web applications that are robust, scalable, and efficient.",
      image: photo,
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Focus on user experience and interface design by creating intuitive, visually appealing, and easy-to-navigate designs with tools like Figma or Adobe XD.",
      image: photo,
    },
    {
      id: 5,
      title: "Mobile App Development",
      description:
        "Develop feature-rich, cross-platform mobile applications using frameworks like React Native or Flutter, ensuring smooth performance and engaging user experiences.",
      image: photo,
    },
    {
      id: 6,
      title: "Data Science",
      description:
        "Analyze and interpret complex data to extract valuable insights, build predictive models, and support data-driven decision-making using Python, R, or SQL.",
      image: photo,
    },
  ];

  return (
    <div id="services" className="container mx-auto">
      <div className="m-5">
        <h1 className="text-5xl text-white text-center font-bold">
          Our Services
        </h1>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-500 p-5 rounded-lg text-center border-4 border-grayDark hover:border-[#F65023] cursor-pointer"
          >
            <img className="w-80 mx-auto" src={item.image} alt={item.title} />
            <h4 className="text-white text-2xl underline underline-offset-4 py-5 ">
              {item.title}
            </h4>
            <p className="text-white ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
