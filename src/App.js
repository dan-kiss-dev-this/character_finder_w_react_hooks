import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = (props) => {
  // const [state, setState] = useState({
  // selectedCharacter: 1
  // destroyed: false
  // });

  const [chosenSide, setChosenSide] = useState('light');

  const [selectedCharacter, setSelectedCharacter] = useState('1')

  const [destroyed, setDestroyed] = useState(false)

  const sideHandler = side => {
    setChosenSide(side)
    // setState({ ...state, side: side })  
  }

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId)
    // setState({ ...state, selectedCharacter: charId })

  };

  const destructionHandler = () => {
    setDestroyed(true);
    // setState({ ...state, destroyed: true });
  };


  let content = (
    <React.Fragment>
      <CharPicker
        side={chosenSide}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(null, 'light')}>
        Light Side
        </button>
      <button onClick={sideHandler.bind(null, 'dark')}>Dark Side</button>
      {chosenSide === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}




// class App extends Component {
//   state = {
//     selectedCharacter: 1,
//     side: 'light',
//     destroyed: false
//   };

//   sideHandler = side => {
//     this.setState({ side: side });
//   };

//   charSelectHandler = event => {
//     const charId = event.target.value;
//     this.setState({ selectedCharacter: charId });
//   };

//   destructionHandler = () => {
//     this.setState({ destroyed: true });
//   };

//   render() {
//     let content = (
//       <React.Fragment>
//         <CharPicker
//           side={this.state.side}
//           selectedChar={this.state.selectedCharacter}
//           onCharSelect={this.charSelectHandler}
//         />
//         <Character selectedChar={this.state.selectedCharacter} />
//         <button onClick={this.sideHandler.bind(this, 'light')}>
//           Light Side
//         </button>
//         <button onClick={this.sideHandler.bind(this, 'dark')}>Dark Side</button>
//         {this.state.side === 'dark' && (
//           <button onClick={this.destructionHandler}>DESTROY!</button>
//         )}
//       </React.Fragment>
//     );

//     if (this.state.destroyed) {
//       content = <h1>Total destruction!</h1>;
//     }
//     return content;
//   }
// }

export default App;
