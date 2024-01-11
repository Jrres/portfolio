import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import FadeIn from './FadeInComponent';

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  isEnd: boolean;
  icons: JSX.Element[]; // Add the 'icons' property to the interface
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <Container className="mt-5">
      <ListGroup>
        {events.map((event: TimelineEvent, index: number) => (
          <FadeIn key={index}>
            <ListGroup.Item className={event.isEnd ? 'text-success' : 'bg-none'}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{event.title}</h5>
                <small>{event.date}</small>
              </div>
              <p className="mb-1">{event.description}</p>
              <section className="d-flex mx-2 gap-4">
                {event.icons.map((i: JSX.Element, iconIndex: number) => ( // Specify the types of 'i' and 'iconIndex'
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
