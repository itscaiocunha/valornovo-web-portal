
const clients = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5"
];

const Clients = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          NOSSOS CLIENTES MUDARAM APÓS NOS CONHECER...
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-video flex items-center justify-center p-4 glass-card hover:shadow-lg transition-all duration-300"
            >
              <span className="text-gray-400">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
