
import { Card } from "@/components/ui/card";

const episodes = [
  {
    number: "EPISÓDIO 1",
    image: "/lovable-uploads/04308392-e974-4f00-ba8a-586f92b65b46.png",
    name: "Sabrina Nunes",
    link: "#"
  },
  {
    number: "EPISÓDIO 2",
    image: "/lovable-uploads/04308392-e974-4f00-ba8a-586f92b65b46.png",
    name: "Natália Martins",
    link: "#"
  },
  {
    number: "EPISÓDIO 3",
    image: "/lovable-uploads/04308392-e974-4f00-ba8a-586f92b65b46.png",
    name: "Edmar Resende",
    link: "#"
  },
  {
    number: "EPISÓDIO 4",
    image: "/lovable-uploads/04308392-e974-4f00-ba8a-586f92b65b46.png",
    name: "Reinaldo Doni",
    link: "#"
  }
];

const Podcast = () => {
  return (
    <section className="bg-[#0A2647] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section with Large Podcast Title */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-center mb-4">
              <span className="text-[#1E90FF]">PODCAST</span>
              <br />
              VALORNOVO
            </h1>
            <div className="text-2xl font-semibold text-[#1E90FF] flex items-center gap-4">
              Insights inovadores para o seu negócio.
              <img 
                src="/lovable-uploads/8ab4c7a4-ee6f-454f-af54-6d3e8b2d37f8.png" 
                alt="ValorNovo Logo" 
                className="h-8"
              />
            </div>
          </div>
        </div>

        {/* Episodes Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            ASSISTAS NOSSAS EPISÓDIOS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {episodes.map((episode, index) => (
              <Card 
                key={index}
                className="bg-white text-[#0A2647] overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={episode.image}
                    alt={episode.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#1E90FF]">{episode.number}</p>
                      <h3 className="text-lg font-bold">{episode.name}</h3>
                    </div>
                    <img 
                      src="/lovable-uploads/8ab4c7a4-ee6f-454f-af54-6d3e8b2d37f8.png" 
                      alt="ValorNovo Logo" 
                      className="h-6"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Platform Links */}
          <div className="flex justify-center items-center gap-6 mt-16">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full px-8 py-3 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="h-6" />
              <span className="text-black font-semibold">YouTube</span>
            </a>
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1DB954] rounded-full px-8 py-3 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-6" />
              <span className="text-white font-semibold">Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
