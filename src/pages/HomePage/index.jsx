import './style.css';
import { Joke } from '../../components/Joke';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);


  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json',
      );
      const data = await response.json();
      setJokes(data);
    };

    fetchJoke();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes + upLikes}
            dislikes={joke.dislikes + downLikes}
            onUpLikes={setUpLikes}
            onDownLikes={setDownLikes}
          />
        );
      })}
    </div>
  );
};
