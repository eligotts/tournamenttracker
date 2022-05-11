import React from 'react'
import { Card, ListGroup}  from 'react-bootstrap';
import './css/TeamBox.css'

export const TeamBox = ({
  teamName,
  members,
  headColor
}) => {
  return (
    <>
      <div>
        <Card className="team-box" style={{ width: '80vw' }}>
          <Card.Header className={`white-font ${headColor}`}>{teamName}</Card.Header>
          <ListGroup variant="flush" numbered>
            {members.map(member => {
              return (
                <ListGroup.Item key={member}>{member}</ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
      </div>
    </>
  )
}
