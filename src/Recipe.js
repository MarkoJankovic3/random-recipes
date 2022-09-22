import { Card, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';

export default function Recipe({ meal }) {
    return (
        <Card style={{ width: 400 }} size="small" cover={<img src={meal.image} alt="recipe" />} bordered hoverable>
            <Meta title={meal.title} />
            <Link to={`/meal/${meal.id}`} state={{data: meal}} >
                <Button size="middle">Go to Recipe</Button>
            </Link>
        </Card>
    ); 
}