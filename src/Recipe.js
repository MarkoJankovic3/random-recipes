import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Recipe({ meal }) {
    return (
        <Card style={{ width: 400 }} size="small" title={meal.title} cover={<img src={meal.image} alt="recipe" />} bordered='true'>
            <Link to={`/meal/${meal.id}`} state={{data: meal}} >
                <Button type="primary">Go to Recipe</Button>
            </Link>
        </Card>
    ); 
}