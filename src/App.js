import { Component } from 'react';
import { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setvalue]
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilterMonsters] = useState(monsters)

  
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users)
    )
  }, [])


  useEffect(() => {
    const newFilteredUsers = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilterMonsters(newFilteredUsers)
  }, [monsters, searchField])
  

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase()
    setSearchField(searchString)
  }


  return (
    <div className="App">
        <h1 className='app-title'>Mon Rolodex</h1>
        <SearchBox className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Mons' />
        <CardList monsters={ filteredMonsters} />
      </div>
  )
}
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters : users }
//       },
//         () => {
//       }
//       ))
//   }
//   onSearchChange = (event) => {
//           const searchString = event.target.value.toLowerCase()
//             this.setState(() => {
//               return { searchString }
//             })
//       }

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredUsers = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString)
//     })
//     return (
      
//     );
//   }

// }

export default App;
