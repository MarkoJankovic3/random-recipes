import { Row, Col } from "antd";
import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipeData }) {
    return (
        <Row>
            {recipeData.recipes.map((meal) => {
                return (
                    <Col key={meal.id} lg={8} md={12} xs={24} >
                        <Recipe key={meal.id} meal={meal} />
                    </Col>
                    );
            })}
        </Row>
    );
}