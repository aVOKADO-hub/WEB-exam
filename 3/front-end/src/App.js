import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [servicemen, setServicemen] = useState([]);
  const [averageAge, setAverageAge] = useState(null);

  useEffect(() => {
    // Отримуємо дані з сервера
    axios.get('http://localhost:5000/api/servicemen')
      .then(response => {
        setServicemen(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const calculateAverageAge = () => {
    if (servicemen.length === 0) return;

    const totalAge = servicemen.reduce((sum, serviceman) => sum + serviceman.age, 0);
    const avgAge = totalAge / servicemen.length;
    setAverageAge(avgAge.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Таблиця військовослужбовців</h1>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Звання</th>
            <th>ПІБ</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          {servicemen.map((serviceman, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{serviceman.rank}</td>
              <td>{serviceman.fullName}</td>
              <td>{serviceman.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={calculateAverageAge}>Старт</button>
      {averageAge !== null && (
        <div>
          <h3>Середній вік: {averageAge}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
