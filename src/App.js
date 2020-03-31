import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './listOfItems'
import DeleteItem from './deleteItem'
import CreateNewItem from'./createNewItem'
class App extends React.Component {
  state = {
   
    items: [],
  };


  
  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
         
          
        
		
        
        <CreateNewItem onAddItem={this.handleAddItem} />
		<DeleteItem  deleteLastItem = {this.deleteLastItem}
					 buttonDisabled  = {this.noItemsFound()}
					/>
	</form>
        
        <ol className="item-list">
         
			<List items = {this.state.items}/>
			
        </ol>
      </div>	
    );
  }
}

export default App;
