import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import FadeIn from './FadeInComponent.tsx';

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  isEnd: boolean; // Assuming isEnd is a property of TimelineEvent
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <Container className="mt-5">
      <ListGroup>
        {events.map((event, index) => (
          <FadeIn key={index}>
            <ListGroup.Item className={event.isEnd ? 'text-success' : 'bg-none'}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{event.title}</h5>
                <small>{event.date}</small>
              </div>
              <p className="mb-1">{event.description}</p>
              <section>
                {event.icons.map((i, iconIndex) => (
                  <div key={iconIndex}>{i}</div>
                ))}
              </section>
            </ListGroup.Item>
          </FadeIn>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Timeline;
