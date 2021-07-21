import React from "react";
import './recipe.css'

const Recipe = ({img, title, cuisineType, dietLabel, dishType, calories, cautions, ingredientLines, healthLabels}) => {
  return (
    <div className="recipeContainer">
        <div className="recipeLeft">
            <img src={img} alt="something" />
        </div>
        <div className="recipeRight">
            <h1 className="recipeTitle">{title} - <i>{cuisineType ? cuisineType.map(e => e.substr(0, 1).toUpperCase() + e.substr(1)) : ""}</i>{dietLabel ? ` - ${dietLabel}` : ""}</h1>
            <div className="caloriesAndCautionsContainer">
                <h2 className="recipeTitleType">{dishType ? dishType.map(e => e.substr(0, 1).toUpperCase() + e.substr(1)) : ""}</h2>
                <h2 className="calories">Calories: <b>{Math.floor(calories)}</b></h2>
            <div className="recipeCautions">
                {cautions.map(e => {
                    return(
                        <div className="caution">
                            {e}
                        </div>
                    )
                })}
            </div>
            </div>
            
            <div className="recipeIngredients">
                <ul>
                    {ingredientLines.map(e => {
                        return (
                            <li>
                                <p>{e}</p>
                            </li>
                        )
                    })}
                </ul>
            
              
                
            </div>
            <div className="healthLabels">
                    {healthLabels.map(e => {
                        return(
                            <span className="healthLabel">
                                {e}
                            </span>
                        )})
                    }
                </div>
        </div>
        
    </div>
  );
};

export default Recipe;
