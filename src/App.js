import React from 'react';

class App extends React.Component{

  state = {
    nome: 'Rafael'
  }

  modificarNome = (event) => {
    let nome = event.target.value;
    this.setState({
      nome: nome
    })
  }

  criaComboBox = () => {
    const opcoes = ["Gato", "Cachorro"]
    const comboBoxOptions = opcoes.map(opcao => <option>{opcao}</option>)


    return (
      <select>
        {comboBoxOptions}
      </select>
    )
  }

  render(){
    const ComboxAnimal = () => this.criaComboBox()

    return (
      <>
      <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
      <h1>Hello {this.state.nome} </h1>
      <ComboxAnimal/>
      </>
    )
  }

}

export default App;
