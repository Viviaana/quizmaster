import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//The form allowing users to update existing questions and add or delete questions and answers
export default function Edit(props) {
  
  const updateQuestion = () => {
    //This is where I would gather the updated question details in order to pass through to the database
  }

  const editQuestion = props.questions.map((question, index) => (
    <div className="question">
      <Form.Group controlId="formQuestion">
        <Form.Label>Edit Question</Form.Label><br />
        <Form.Control className='forminputquestions' size="lg" type="text" value={question.question} />
      </Form.Group>
      <div className="answerlist">
      <Form.Group controlId="formAnswers">
        <Form.Label>Edit Answers</Form.Label>
        {question.answers.map((answer) => (
            <ul>
        <li><Form.Control className='forminputanswers' size="lg" type="text" value= {answer} /></li>
        </ul>
        ))}
        
      </Form.Group>
      <Form.Group controlId="formQuestion">
        <Form.Label>Edit Hint</Form.Label><br />
        <Form.Control className='forminputquestions' size="lg" type="text" value={question.hint} />
      </Form.Group>
      <Button className='updatebutton' block size="lg" type="submit" onSubmit={updateQuestion()}>Update</Button>
      </div>
      </div>
  ));
  return <div className="quiz">{editQuestion}</div>;
}
