import logo from './logo.svg';
import './App.css';
import { DataProvider } from './DataProvider.js';
import { ConnectGrid } from './ConnectGrid.js';
import { BottomMenu } from './BottomMenu.js';

function App() {
  
  return (
    <DataProvider>
      <ConnectGrid></ConnectGrid>
      <BottomMenu></BottomMenu>
    </DataProvider>
  );
}

export default App;
