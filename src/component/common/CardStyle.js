import React from 'react'
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const CardStyle = ({ item_data }) => {
  console.log("item_data", item_data)


  return (
    <CardGroup>
      <Row xs={1} md={2} lg={3}>
        {item_data.map((item) => (
          <Col key={item.id} style={{ paddingLeft: '80px'}}>
           
            <Card key={item.id} style={{ width: '18rem',marginBottom: "20px" }}>
              <Card.Img variant="top" src={item.img_url} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button variant="success">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </CardGroup>
  )
}

export default CardStyle