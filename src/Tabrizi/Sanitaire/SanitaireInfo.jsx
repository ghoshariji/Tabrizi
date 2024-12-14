const SanitaireInfo = () => {
    const infoCards = [
      {
        title: "RÉNOVATION",
        img: "path/to/renovation_image.png", // Replace with actual image path
        icon: "path/to/icon_image.png", // Replace with actual icon path
        description:
          "Modernisez vos installations sanitaires ! Notre expertise en rénovation vous garantit des installations modernes, fonctionnelles et conformes aux normes.",
      },
      {
        title: "CONSTRUCTION NEUVE",
        img: "path/to/construction_image.png", // Replace with actual image path
        icon: "path/to/icon_image.png", // Replace with actual icon path
        description:
          "Des systèmes sanitaires adaptés à vos projets ! Nous collaborons pour des installations économiques et modernes.",
      },
      {
        title: "INTRODUCTION EAU/GAZ",
        img: "path/to/eau_gaz_image.png", // Replace with actual image path
        icon: "path/to/icon_image.png", // Replace with actual icon path
        description:
          "L’introduction eau/gaz maîtrisée pour votre confort ! Une installation sécurisée et durable avec un service professionnel.",
      },
    ];
  
    return (
      <div id="home" className="mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 p-5 "
              >
                <div className="relative mb-4">
                  {/* Icon in a blue circle */}
                  <div className="absolute top-5 left-4  bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
                 
                  </div>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SanitaireInfo;
  