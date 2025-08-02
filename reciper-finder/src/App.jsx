import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Recipe Finder
        </h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a recipe..."
            className="px-4 py-2 w-96 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-4 w-72 flex-shrink-0">
              <img
                src={`https://via.placeholder.com/300x200?text=Recipe+${id}`}
                alt={`Recipe ${id}`}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">
                Recipe Title {id}
              </h2>
              <p className="text-sm text-gray-600">
                Some description about the recipe...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
