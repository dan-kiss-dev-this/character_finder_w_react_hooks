import React, { Component, useState, useEffect } from 'react';

import './CharPicker.css';

const CharPicker = props => {
  const [loadedChars, setLoadedChars] = useState([]);
  const [isLoadingNow, setIsLoadingNow] = useState(false);
  // const [state, setState] = useState({ characters: [], isLoading: false })
  // state = { characters: [], isLoading: false };

  useEffect(() => {
    console.log('useEffect runs')
    setIsLoadingNow(true);
    fetch('https://swapi.co/api/people')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(charData => {
        const selectedCharacters = charData.results.slice(0, 5);
        setLoadedChars(
          selectedCharacters.map((char, index) => ({
            name: char.name,
            id: index + 1
          })),
        );
        // setLoadedChars({
        //   characters: selectedCharacters.map((char, index) => ({
        //     name: char.name,
        //     id: index + 1
        //   })),
        // });
        setIsLoadingNow(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoadingNow(false);
      });
  },[]);

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   fetch('https://swapi.co/api/people')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch.');
  //       }
  //       return response.json();
  //     })
  //     .then(charData => {
  //       const selectedCharacters = charData.results.slice(0, 5);
  //       this.setState({
  //         characters: selectedCharacters.map((char, index) => ({
  //           name: char.name,
  //           id: index + 1
  //         })),
  //         isLoading: false
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  let content = <p>Loading characters...</p>;

  if (
    !isLoadingNow &&
    loadedChars &&
    loadedChars.length > 0
  ) {
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={props.side}
      >
        {loadedChars.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (
    !isLoadingNow &&
    (!loadedChars || loadedChars.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
}

export default CharPicker;

// class CharPicker extends Component {
//   state = { characters: [], isLoading: false };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     fetch('https://swapi.co/api/people')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch.');
//         }
//         return response.json();
//       })
//       .then(charData => {
//         const selectedCharacters = charData.results.slice(0, 5);
//         this.setState({
//           characters: selectedCharacters.map((char, index) => ({
//             name: char.name,
//             id: index + 1
//           })),
//           isLoading: false
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   render() {
//     let content = <p>Loading characters...</p>;

//     if (
//       !this.state.isLoading &&
//       this.state.characters &&
//       this.state.characters.length > 0
//     ) {
//       content = (
//         <select
//           onChange={this.props.onCharSelect}
//           value={this.props.selectedChar}
//           className={this.props.side}
//         >
//           {this.state.characters.map(char => (
//             <option key={char.id} value={char.id}>
//               {char.name}
//             </option>
//           ))}
//         </select>
//       );
//     } else if (
//       !this.state.isLoading &&
//       (!this.state.characters || this.state.characters.length === 0)
//     ) {
//       content = <p>Could not fetch any data.</p>;
//     }
//     return content;
//   }
// }

// export default CharPicker;
