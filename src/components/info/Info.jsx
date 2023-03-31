

import React, { useState } from 'react';
import './info.scss';

export default function Info() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  const questions = [
    {
      id: 1,
      question: 'What is Netflix?',
      answer:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
      id: 2,
      question: 'How much does Netflix cost?',
      answer:
        'Netflix offers three different plans: Basic ($8.99/month), Standard ($13.99/month), and Premium ($17.99/month).',
    },
    {
      id: 3,
      question: 'What can I watch on Netflix?',
      answer:
        'Netflix has an extensive library of TV shows, movies, documentaries, and more. You can watch everything from classic movies to the latest TV shows, and even exclusive Netflix Originals that you won’t find anywhere else.',
    },
    {
      id: 4,
      question: 'How do I sign up for Netflix?',
      answer:
        'You can sign up for Netflix by visiting their website and choosing a plan that works for you. You’ll need to enter your email address and create a password, and you can start watching right away.',
    },
    {
      id: 5,
      question: 'How do I cancel my Netflix subscription?',
      answer:
        'You can cancel your Netflix subscription at any time by visiting your account settings on the Netflix website.',
    },
  ];

  const handleBackButtonClick = () => {
    setActiveQuestion(null);
  };

  return (
    <div className="faq">
      <div className="back-button" onClick={handleBackButtonClick}>
      <a href='/' className='anchor'>
        &lt; Back</a>
      </div>
      <h2 className="h">Frequently Asked Questions</h2>
      <div className="questions">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className={`question ${activeQuestion === index ? 'active' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="question-text">{q.question}</div>
            <div className="answer">{q.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

