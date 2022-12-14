import {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.componen';
import SearchBox from './components/search-box/serarch-box.component'


class App extends Component {
  constructor(){
    super();
    this.state = {
    monsters :[],
    searchFieled:'',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=>this.setState(()=>{
        return{monsters:users};
      },
    )
  );
}

  onSearchChange = (event) =>{
    const searchFieled = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
    return { searchFieled };
     });
  }

 render(){ 
  const {monsters, searchFieled} = this.state;
  const {onSearchChange} = this;
  const filteredMonsters = monsters.filter((monster)=>{
  return  monster.name.toLocaleLowerCase().includes(searchFieled);
    });

  return (
    <div className='App'>
    <h1 className="app-title">Monsters Rolodex</h1>
     <SearchBox
     className='monsters-search-box'
     onChangeHandler={onSearchChange}
     placeholder='search-monsters'/>
    <CardList monsters={filteredMonsters} />
    </div>

  );
 }
}

export default App;
