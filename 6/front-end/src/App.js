import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);

  const handleStartClick = async () => {
    if (name.trim() === '' || age.trim() === '') {
      alert('Будь ласка, заповніть усі поля');
      return;
    }

    try {
      // Відправка даних на сервер
      const response = await axios.post('http://localhost:5000/api/data', {
        name,
        age,
      });

      // Збереження відповіді сервера
      setServerResponse(response.data);
      setModalVisible(true);
    } catch (error) {
      console.error('Помилка при відправці даних:', error);
      alert('Не вдалося відправити дані на сервер');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setServerResponse(null);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Введіть дані</h1>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Вік:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button onClick={handleStartClick}>Старт</button>
      </div>

      {modalVisible && serverResponse && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Дані з сервера</h2>
            <p>
              <strong>Ім'я:</strong> {serverResponse.name}
            </p>
            <p>
              <strong>Вік:</strong> {serverResponse.age}
            </p>
            <p>{serverResponse.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
