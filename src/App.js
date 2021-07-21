import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe/Recipe";
import "./App.css";

const App = () => {

  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Search...");

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
    .then(results => results.json())
    .then(data => {
      setRecipes(data.hits);
    })
  }, [query]);


  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-bar">
        <input
          type="text"
          value={search}
          onChange={updateSearch}
          pattern=".*\S.*"
          required
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>

    <div className="recipesContainer">
       {!recipes ? <Loading />
       : recipes.map(r => {
        return (
          <Recipe img={r["recipe"].image}
          title={r["recipe"].label}
          cuisineType={r["recipe"].cuisineType}
          dietLabel={r["recipe"].dietLabel}
          dishType={r["recipe"].dishType}
          calories={r["recipe"].calories}
          cautions={r["recipe"].cautions}
          ingredientLines={r["recipe"].ingredientLines}
          healthLabels={r["recipe"].healthLabels} />
        )
      })
    }
    </div>
   
     

    </div>
  );
};

export default App;


export const Loading = () => {
  return (
    <div style={{fontSize: "100px", fontWeight: "600"}}>
      Loading...
    </div>
  )
}