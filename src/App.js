import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './App.css';

export default function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  function sendEmails(e) {
    e.preventDefault();
    if (name === '' || lastName === '' || subject === '' || message === '') {
      alert("Por favor, preencha todos os campos para envio do formulário.")
    }

    else {
      emailjs.sendForm('gmail', 'template_TBf9bQ2X', e.target, 'user_HiFiWCvomTzu3YMwbnRSc')
        .then((result) => {
          console.log(result.text);
        }, (error) => {

          console.log(error.text);
        });
    }
    alert("E-mail encaminhado com sucesso!\n\n Muito Obrigado pelo seu contato.")
    setName('')
    setLastName('')
    setSubject('')
    setMessage('')
    setEmail('')

  }


  return (
    <div id="contato" className="contato">
      <h2>Quer entrar em <span>contato comigo?</span> </h2>

      <div className="form">
        <form onSubmit={sendEmails}>
          <input
            type="text"
            name="user_name"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Sobrenome"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="user_subject"
            placeholder="Assunto"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}


          ></textarea>
          <button type="submit" >Enviar</button>
        </form>
      </div>
    </div>
  );
}


