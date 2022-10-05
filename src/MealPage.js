import { PageHeader, Layout, Typography, Space } from 'antd';
import { useLocation } from 'react-router-dom';
import './css/MealPage.css';

export default function MealPage() {
    const location = useLocation();
    const data = location.state.data;
    const { Header, Content } = Layout;
    const { Text } = Typography;
    return (
        <Layout className='hero'>
            <PageHeader title={data.title} subTitle={data.dishTypes[0]} onBack={() => window.history.back()} />
            <Content className='recipe-content'>
                <Space direction='vertical'>
                    <Text type='warning'>Cooking time: {data.readyInMinutes} minutes</Text>
                    <Text type='warning'>Number of serving: {data.servings}</Text>
                    <Text type='warning'>Price per serving: {data.pricePerServing} $</Text>
                    <Text type='warning'>For full details please click on the link <a href={data.spoonacularSourceUrl}>here</a></Text>
                </Space>
            </Content>   
        </Layout>
    );
}