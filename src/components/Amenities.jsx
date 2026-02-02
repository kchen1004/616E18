export default function Amenities() {
  const items = [
    "Gym & Fitness Center",
    "Laundry Room",
    "Courtyard with Grill",
    "Parking & Bike Storage",
    "Doorman & Porter",
    "Walk-in Closets"
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6">Amenities</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <li key={item} className="bg-gray-100 p-4 rounded shadow">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}