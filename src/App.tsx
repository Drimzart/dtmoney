import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { Header } from "./components/Header";
import Modal  from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

var nome = window.prompt('Qual seu nome ?')
window.alert('Prazer em te conhecer ' + nome +" !")

export function App() {
  const[isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (

    <TransactionsProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard/>
     <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
     
     <GlobalStyle />
    </TransactionsProvider>
  );
}
