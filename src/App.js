import './App.css';
import EnhancedTodoList from './components/TodoList'
import EnhancedDataList from './components/DataList';
function App() {

  return (
    <div className="App"> 
      <EnhancedTodoList />
      <EnhancedDataList />
    </div>
  );
}

export default App;
