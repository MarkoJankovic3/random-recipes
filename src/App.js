import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import MealPage from './MealPage';
import './css/App.css';
import { Button } from 'antd';

function App() {
  const [mealData, setMealData] = useState(null);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=f652fa00374c43afbcb00aada9bcbd92&number=1`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("Could not get the recipe list.. check App.js");
    });
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={
        <section className='hero'>
          <div className='bg-overlay'></div>
          <div className='navbar'>
            <Button className='special-button bordered' onClick={getMealData}>Get Recipes</Button>
          </div>
          <div>
            {mealData && <RecipeList recipeData={mealData} />} 
          </div>
        </section> } />
        <Route path='/meal/:mealId' element={<MealPage />} />
      </Routes>
    </Router>
      
  );
}

export default App;
