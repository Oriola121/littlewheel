const reviews = [
  {
    id: 1,
    feedback:
      "Being a first-generation college student, I had no idea where to start with financial planning. The step-by-step guidance made everything clear",
    image: "/uploads/reviewer1.jpeg",
    name: "Omolayo Fikayo",
    position: "CEO Meeral",
  },
  {
    id: 2,
    feedback:
      "Being a first-generation college student, I had no idea where to start with financial planning. The step-by-step guidance made everything clear",
    image: "/uploads/reviewer2.jpeg",
    name: "Omolayo Fikayo",
    position: "CEO Meeral",
  },
  {
    id: 3,
    feedback:
      "Being a first-generation college student, I had no idea where to start with financial planning. The step-by-step guidance made everything clear",
    image: "/uploads/reviewer3.jpeg",
    name: "Omolayo Fikayo",
    position: "CEO Meeral",
  },
  {
    id: 4,
    feedback:
      "Being a first-generation college student, I had no idea where to start with financial planning. The step-by-step guidance made everything clear",
    image: "/uploads/reviewer1.jpeg",
    name: "Omolayo Fikayo",
    position: "CEO Meeral",
  },
];

export default function LandingSection2() {
  return (
    <div className="h-auto p-6 flex flex-col items-center space-y-6">
      <div className="p-2 gap-4 bg-black rounded-xl flex items-center">
        <div className="flex items-center">
          {[
            "/uploads/avatar1.png",
            "/uploads/avatar2.png",
            "/uploads/avatar3.png",
          ].map((profileImage, index) => (
            <img
              key={index}
              src={profileImage}
              alt={`Donor ${index + 1}`}
              className={`w-8 h-8 rounded-full -ml-2 ${
                index === 0 ? "ml-0" : ""
              }`}
            />
          ))}
          <span className="text-xs w-8 h-8 rounded-full bg-[#ffece5] flex items-center justify-center -ml-2">
            +10
          </span>
        </div>
        <p className="text-white">Over 250 Satisfied customers</p>
      </div>

      <div className="bg-primary w-full max-w-7xl p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {reviews.map((review) => (
          <div
            className="border border-[#F0F2F5] p-4 rounded-lg shadow-lg flex flex-col items-center text-center space-y-3 bg-white"
            key={review.id}
          >
            <p className="text-sm text-gray-700">{review.feedback}</p>
            <img
              src={review.image}
              alt={`${review.name}'s picture`}
              className="w-12 aspect-square rounded-full"
            />
            <p className="font-semibold">{review.name}</p>
            <p className="text-xs text-gray-500">{review.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
