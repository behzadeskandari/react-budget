import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, Container,Form,Grid,GridRow,Header,Icon,Segment,Statistic} from 'semantic-ui-react'
import MainHeader from './components/MainHeader';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
function App() {
  return (
    <Container>
      <MainHeader title="budget"></MainHeader>
      
      <DisplayBalance title="Your Balance" value="3255.54" size="small"/>
             
      <DisplayBalances/>

      <MainHeader title="History" type="h3">History</MainHeader>
      
      <EntryLine description="Income" value="$10.00"  color="red"/>
      
      <EntryLine description="Expense" value="$10.00" isExpense color="red"/>

      <MainHeader as="h3" title="Add new Transaction"></MainHeader>
      
      <NewEntryForm/>

    </Container>
  );
}

export default App;
