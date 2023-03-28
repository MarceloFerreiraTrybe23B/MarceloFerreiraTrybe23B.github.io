import React from "react";
import stacks from "../Db/Stacks";
import { Card } from "react-bootstrap";

function Stacks() {
  return (
    <div>
      <h3>habilidades que aprendi e estudo todos os dias:</h3>
      <div className="card-group">
        {stacks.map((stack, index) => (
          <Card key={index} border="light">
            <Card.Img src={stack.image} style={{ width: '50px', alignSelf: 'center' }}/>
            <Card.Body>
              <Card.Text style={{ textAlign: 'center' }}>
                {stack.name}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>      
    </div>
  )
}

export default Stacks;