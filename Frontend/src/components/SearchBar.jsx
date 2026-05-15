export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search your notes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 shadow-sm"
    />
  );
}