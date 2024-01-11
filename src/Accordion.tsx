import Accordion from 'react-bootstrap/Accordion';

function BasicExample(props) {
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