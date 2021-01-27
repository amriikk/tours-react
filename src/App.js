import React, { useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://course.api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  return  (
    <main>
      <Tours tours={tours removeTour={removeTour}} />
    </main>
  )
}

export default App;
