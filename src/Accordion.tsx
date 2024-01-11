import Accordion from 'react-bootstrap/Accordion';
interface AccordionProps {
  title: string;
  text: string;
}

function BasicExample(props: AccordionProps) {
  return (
    <Accordion defaultActiveKey="null" >
      <Accordion.Item eventKey="0" >
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
          {props.text}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
