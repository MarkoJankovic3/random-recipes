import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipeData }) {
    
    return <main>
        <section className="recipes">
            {recipeData.recipes.map((meal) => {
                return <Recipe key={meal.id} meal={meal} />
            })}
        </section>
    </main>
}