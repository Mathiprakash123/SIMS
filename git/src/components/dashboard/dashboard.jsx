// Dashboard.js

import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Bar, Doughnut } from 'react-chartjs-2';

const Dashboard = () => {
  // Sample data for charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Container fluid>
      <h1 className="mt-4">Dashboard</h1>
      <Row>
        <Col md={6}>
          <Card>
            <CardBody>
              <h5 className="card-title">Monthly Sales</h5>
              <Bar
                data={barChartData}
                options={{
                  scales: {
                    x: {
                      beginAtZero: true,
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <CardBody>
              <h5 className="card-title">Product Distribution</h5>
              <Doughnut data={doughnutChartData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
