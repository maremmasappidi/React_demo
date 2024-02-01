// import 'bulma/css/bulma.css';
// import ProfileCard from './ProfileCard';
// import AlexImage from './images/alexa.png';
// import CortanaImage from './images/cortana.png';
// import SiriImage from './images/siri.png'


// function App()
// {
//     return(
//     <div>
//         <section className='hero is-primary'>
//             <div className='hero-body'>
//                 <p className='title'>personal digital Assistants</p>

//             </div>
//         </section>
        
//         <div className='container'>
//             <section className='section'>
//                 <div className='columns'>
//                     <div className='column is-4'>
//                     <ProfileCard title="Alexa" handle="@alx99" image={AlexImage}
//                      description='alex was createsd by amazion and it gives all the information' />
//                     </div>
//                     <div className='column is-4'>
//                     <ProfileCard title="Cortana" handle="@cortana99" image={CortanaImage}
//                       description='alex was createsd by amazion and it gives all the information' />
//                     </div>
//                     <div className='column is-4'>          
//                    <ProfileCard title="Siri" handle="@siri" image={SiriImage}
//                      description='alex was createsd by amazion and it gives all the information' />
//                     </div>
//                 </div>

                
//             </section>


//         </div>

    
//     </div>

//     );
// }
//  export  default App;



// App.js
import React, { useState } from 'react';
import Card from './components/Card';



const App = () => {
  const initialCardData = [
    { title: 'Product 1', description: 'Description 1', number: 123 },
    { title: 'Product 2', description: 'Description 2', number: 456 },
    { title: 'Product 3', description: 'Description 3', number: 789  },
    { title: 'Product 4', description: 'Description 4', number: 101 },
    { title: 'Product 1', description: 'Description 1', number: 123 },
    { title: 'Product 2', description: 'Description 2', number: 456 },
    { title: 'Product 3', description: 'Description 3', number: 789  },
    { title: 'Product 4', description: 'Description 4', number: 101 },
    { title: 'Product 1', description: 'Description 1', number: 123 },
    { title: 'Product 2', description: 'Description 2', number: 456 },
    { title: 'Product 3', description: 'Description 3', number: 789  },
    { title: 'Product 4', description: 'Description 4', number: 101 },
    { title: 'Product 1', description: 'Description 1', number: 123 },
    { title: 'Product 2', description: 'Description 2', number: 456 },
    { title: 'Product 3', description: 'Description 3', number: 789  },
    { title: 'Product 4', description: 'Description 4', number: 101 },
  ];

  const [filter, setFilter] = useState('');
  const [cardData, setCardData] = useState(initialCardData);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    // Filter the data based on the title
    const filteredData = initialCardData.filter((card) =>
      card.title.toLowerCase().includes(value.toLowerCase())
    );

    setCardData(filteredData);
  };

  return (
    <div className="container">
      {/* Filter Input */}
      <div className="row mb-3">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by title"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Display Filtered Cards */}
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card title={card.title} description={card.description} number={card.number} icon={card.icon} />
          </div>
        ))}
      </div>

      {/* Buttons on the Right Side */}
     
    </div>
  );
};

export default App;
