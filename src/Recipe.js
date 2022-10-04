import { Card, Button, Typography, Row, Col, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
import './Recipe.css';

export default function Recipe({ meal }) {
    const { Meta } = Card;
    const { Title } = Typography;

    return (
        <Card className='special-card' size="default" bordered hoverable>
            <Row align='top'>
                <Col lg={10} md={4}>
                    <Meta description={
                        <Image src={meal.image} />
                    } />
                </Col>
                <Col lg={12} md={8}>
                    <Meta description={
                        <div className='card-body'>
                            <Title level={5} type='warning' ellipsis={{rows: 2, expandable: false}}>{meal.title}</Title>
                            <Link to={`/meal/${meal.id}`} state={{data: meal}} >
                                <Button className='btn-warning' size="middle">Go to Recipe</Button>
                            </Link>
                        </div>
                    } />
                </Col>
            </Row>
        </Card>
    ); 
}