import { getServices } from '../services/services'
import { useState, useEffect } from 'react'
import {
  createQuestion,
  getAllQuestion,
  answerToQuestion
} from '../services/questions'
const AskDoctor = () => {
  const initalState = {
    service: '',
    title: '',
    content: ''
  }
  const [services, setServices] = useState([])
  const [formValues, setFormValues] = useState(initalState)
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  useEffect(() => {
    const getAllServices = async () => {
      const { services } = await getServices()
      setServices(services)
    }
    const getQuestions = async () => {
      setQuestions(await getAllQuestion())
    }
    getQuestions()
    getAllServices()
  }, [])
  const handleChange = async (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    })
  }
  const handelSubmit = async () => {
    event.preventDefault()
    setQuestions(await createQuestion(formValues))
    setFormValues({
      service: '',
      title: '',
      content: ''
    })
  }
  const handelAnswer = async (event, questionId) => {
    event.preventDefault()
    console.log(answers[questionId])
    const ans = {
      answer: answers[questionId]
    }
    setQuestions(await answerToQuestion(ans, questionId))
  }
  const handelAnswerChange = (event, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: event.target.value
    })
  }

  return (
    <div>
      <h1>ASK DOCTOR</h1>
      <div class="question-form-container">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            placeholder="Question Title"
            id="title"
            onChange={handleChange}
            value={formValues.title}
          />
          <input
            type="text"
            placeholder="Question"
            id="content"
            onChange={handleChange}
            value={formValues.content}
          />
          <label htmlFor="service"></label>
          <select
            id="service"
            className="addDocInput"
            placeholder="Service"
            onChange={handleChange}
            value={formValues.service}
          >
            <option value="" selected disabled>
              Select Service
            </option>
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.name}
              </option>
            ))}
          </select>
          <button type="submit"> ASK</button>
        </form>
      </div>

      <h2>All questions</h2>
      <div className="allqustion">
        {questions
          ? questions.map((question) => (
              <div key={question._id} className="question-container">
                <span className="username">{question.user.name}</span>
                <p className="title">{question.title}</p>
                <p className="content">{question.content}</p>
                <p className="time-ago">{question.creatAt}</p>
                <section className="ans-section">
                  {question.answer ? (
                    <h5 className="answer">ANS:{question.answer}</h5>
                  ) : (
                    <form
                      onSubmit={(event) => handelAnswer(event, question._id)}
                    >
                      <input
                        placeholder="Ans"
                        id="answers"
                        onChange={(event) =>
                          handelAnswerChange(event, question._id)
                        }
                        value={answers[question._id] || ''}
                      />
                      <button>Answer</button>
                    </form>
                  )}
                </section>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default AskDoctor
