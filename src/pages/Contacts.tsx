import React from "react"
import {Link} from 'react-router-dom'
const animals = [
    'все',
    'Тигр',
    'Заец',
    'Котики',
    'Собаки',
    'Черепахи',
]

const arrayAnimals = [
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Testudo_horsfieldii%3B_Baikonur_001.jpg', 
        index: 5,
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Testudo_horsfieldii%3B_Baikonur_001.jpg', 
        index: 5,
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Testudo_horsfieldii%3B_Baikonur_001.jpg', 
        index: 5,
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Testudo_horsfieldii%3B_Baikonur_001.jpg', 
        index: 5,
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg', 
        index: 1,
    },
    {
        imageUrl: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-08/20201218_gaf_u40_190.jpeg.jpg?itok=IEogP-rS', 
        index: 4,
    }
]

export const Contacts = () => {
    const [id, setId] = React.useState(0)
  const filteredAnimals = id === 0 ? arrayAnimals : arrayAnimals.filter(obj => obj.index === id);

  return (
    <>
      <div className="categories">
        <ul className="ulForNames">
          {animals.map((names, index) => (
            <li key={index} onClick={() => setId(index)} className={`noactive${id === index ? '_active' : ''}`}>
              {names}
            </li>
          ))}
        </ul>
        {filteredAnimals.length > 0 ? (
          <ul className="animals">
            {filteredAnimals.map((obj, index) => (
              <li key={index}>
                <img src={obj.imageUrl} alt="Разное" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="noone">нету твоих блядских зверушек</p>
        )}
      </div>
      <Link to='/' className="back">Назад</Link>
    </>
  );
}