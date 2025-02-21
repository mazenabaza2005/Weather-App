import React from 'react';
import { Card, Col, Row } from 'antd';

const DisplayData = ({ weatherData }) => {
    return (
        <>
            <div className="card1">
                <Card
                    style={{
                        width: 950,
                        height: 45,
                        margin: 20,
                        padding: 10,
                        borderRadius: 10,
                        backgroundColor: '#f0f0f0',
                        textAlign: 'left',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection: 'column',
                    }}
                >
                    <div className='Location'>
                        <p>{weatherData.Country},{weatherData.City}</p>
                        <p>{weatherData.Region}</p>
                    </div>
                </Card>
            </div>

            <div className="firstrow">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title={<span className="card-title">Temperature</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.Temp}</span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title={<span className="card-title">Weather</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.Weather}</span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title={<span className="card-title">Wind</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.Wind}</span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title={<span className="card-title">Humidity</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.Humidity}</span>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="secondrow">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title={<span className="card-title">Cloud</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.Cloud}</span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title={<span className="card-title">Visibility</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.Visibility}</span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title={<span className="card-title">UV</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.UV}</span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title={<span className="card-title">Pressure</span>} variant="borderless" style={{ backgroundColor: '#f8edeb' }}>
                            <span className="weather-data">{weatherData.Pressure}</span>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default DisplayData;