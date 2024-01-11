import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import FadeIn from './FadeInComponent.tsx'

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <Container className="mt-5" className={event.isEnd?'bg-success':'bg-none'}>
      <ListGroup>
        {events.map((event, index) => (
      <FadeIn>
          <ListGroup.Item key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{event.title}</h5>
              <small>{event.date}</small>
            </div>
            <p className="mb-1">{event.description}</p>
            <section>{
              event.icons.map(i=>{
                return i
              })
            }</section>
          </ListGroup.Item>
        </FadeIn>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Timeline;
