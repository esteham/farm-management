import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/home.css';

const HomeComponent = () => {
  return (
    <div className="farm-management-homepage">
      {/* Hero Section */}
      <div className="hero-section bg-light p-5 rounded mb-5">
        <Container>
          <h1>Modern Farm Management</h1>
          <p className="lead">
            Streamline your agricultural operations with our comprehensive farm management solution
          </p>
          <Button variant="success" size="lg" as={Link} to="/signup">
            Get Started
          </Button>
        </Container>
      </div>

      {/* Features Carousel */}
      <Container className="features-section my-5">
        <h2 className="text-center mb-5">Key Features</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Crop+Management"
              alt="Crop Management"
            />
            <Carousel.Caption>
              <h3>Crop Management</h3>
              <p>Track planting, growth, and harvest cycles with precision.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Livestock+Tracking"
              alt="Livestock Tracking"
            />
            <Carousel.Caption>
              <h3>Livestock Tracking</h3>
              <p>Monitor animal health, breeding, and inventory in real-time.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Weather+Integration"
              alt="Weather Integration"
            />
            <Carousel.Caption>
              <h3>Weather Integration</h3>
              <p>Plan activities based on accurate weather forecasts.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Feature Cards */}
      <Container className="feature-cards my-5">
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Field Monitoring</Card.Title>
                <Card.Text>
                  Track soil conditions, irrigation, and crop health across all your fields.
                </Card.Text>
                <Button variant="outline-primary" as={Link} to="/fields">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Inventory Control</Card.Title>
                <Card.Text>
                  Manage seeds, fertilizers, equipment, and other resources efficiently.
                </Card.Text>
                <Button variant="outline-primary" as={Link} to="/inventory">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Financial Tracking</Card.Title>
                <Card.Text>
                  Monitor expenses, income, and profitability of your farming operations.
                </Card.Text>
                <Button variant="outline-primary" as={Link} to="/reports">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <Container fluid className="cta-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2>Ready to transform your farm management?</h2>
              <p className="lead mb-0">
                Join thousands of farmers who are already benefiting from our system.
              </p>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Button variant="success" size="lg" as={Link} to="/signup">
                Start Free Trial
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>AgroManage Pro</h5>
              <p>Modern solutions for modern farming challenges.</p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-white">Contact</Link></li>
                <li><Link to="/pricing" className="text-white">Pricing</Link></li>
                <li><Link to="/blog" className="text-white">Blog</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Connect With Us</h5>
              <div className="social-links">
                <a href="#" className="text-white me-3">Facebook</a>
                <a href="#" className="text-white me-3">Twitter</a>
                <a href="#" className="text-white me-3">Instagram</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomeComponent;
