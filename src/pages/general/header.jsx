export default function Header() {
  const fecha = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">Notus</h1>
      <span className="text-gray-500 text-sm">{fecha}</span>
    </header>
  );
}
