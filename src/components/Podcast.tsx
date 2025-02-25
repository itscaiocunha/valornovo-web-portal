
const episodes = [
  {
    title: "Episódio 1",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Episódio 2",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Episódio 3",
    image: "/placeholder.svg",
    link: "#"
  }
];

const Podcast = () => {
  return (
    <section id="podcast" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          PODCAST VALORNOVO
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Conheça as últimas novidades e insights sobre inovação e estratégia empresarial.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <a
              key={index}
              href={episode.link}
              className="group block glass-card rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                <span className="text-primary font-medium">ASSISTIR →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcast;
