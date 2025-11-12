export default function UnirseClase() {
  return (
    <div className="flex h-full justify-center mt-10">
      <form
        action=""
        className="flex flex-col max-w-150 justify-top items-center gap-[1rem]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="codigo" className="text-xl font-semibold">
          Código de la clase:
        </label>
        <input
          type="text"
          name="codigo"
          id="codigo"
          className="p-2 border rounded w-100"
          placeholder="Ej: XXXX-XXXX-XXXX"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Unirme
        </button>
      </form>
    </div>
  );
}
