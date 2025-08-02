import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const fetchRecipes = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: query,
            number: 6,
            apiKey: API_KEY,
          },
        }
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
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
          <button
            onClick={fetchRecipes}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 w-72 flex-shrink-0">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">{recipe.title}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
