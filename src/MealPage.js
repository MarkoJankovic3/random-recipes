import { PageHeader } from 'antd';
import { useLocation } from 'react-router-dom';

export default function MealPage() {
    const location = useLocation();
    const data = location.state.data;

    return (
        <div>
            <PageHeader title={data.title} subTitle={data.dishTypes[0].toUpperCase()} onBack={() => window.history.back()}/>
            <p>Cooking time: {data.readyInMinutes} minutes</p>
            <p>Number of serving: {data.servings}</p>
            <p>Price per serving: {data.pricePerServing} $</p>
            <p>For full details please click on the link <a href={data.spoonacularSourceUrl}>here</a></p>
        </div>
    );
}