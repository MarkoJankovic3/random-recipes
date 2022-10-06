import { PageHeader, Layout, Typography, Image, Space } from "antd";
import { useLocation } from "react-router-dom";
import "./css/MealPage.css";

export default function MealPage() {
  const location = useLocation();
  const data = location.state.data;
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;

  return (
    <Layout className="meal-hero">
      <Content className="bg-overlay" />
      <PageHeader
        className="return-header"
        title="Recipes"
        onBack={() => window.history.back()}
      />
      <Content className="recipe-content">
        <Header className="recipe-header">
          <Title level={1} type="warning">
            {data.title}
          </Title>
          <Image width={400} src={data.image} />
        </Header>
        <Content className="recipe-list">
          <Space direction="vertical">
            <Text type="warning">
              Cooking time: {data.readyInMinutes} minutes
            </Text>

            <Text type="warning">Number of serving: {data.servings}</Text>

            <Text type="warning">
              Price per serving: {data.pricePerServing} $
            </Text>

            <Text type="warning">
              For full details please click on the link{" "}
              <a href={data.spoonacularSourceUrl}>here</a>
            </Text>
          </Space>
        </Content>
      </Content>
    </Layout>
  );
}
