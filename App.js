// import React, {useState} from 'react';
// // import type {Node} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Alert,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import AddTodo from './src/components/addTodo';
// import Header from './src/components/header';
// import TodoItem from './src/components/todoItem';

// export default function App() {
//   const [todos, setTodos] = useState([
//     {text: 'react 복습하기', key: '1'},
//     {text: 'typescript 공부하기', key: '2'},
//     {text: 'computer science 공부하기', key: '3'},
//   ]);

//   const pressHandler = key => {
//     setTodos(prevTodos => {
//       return prevTodos.filter(todo => todo.key !== key);
//     });
//   };

//   const submitHandler = text => {
//     if (text.length > 3) {
//       setTodos(prevTodos => {
//         return [{text: text, key: Math.random().toString()}, ...prevTodos];
//       });
//     } else {
//       Alert.alert('OOPS!', 'todos must be over 3chars long', [
//         {
//           text: 'Understood',
//           onPress: () => console.log('alert closed'),
//         },
//       ]);
//     }
//   };

//   return (
//     <TouchableWithoutFeedback
//       onPress={() => {
//         Keyboard.dismiss();
//       }}>
//       <View style={styles.container}>
//         <Header />
//         <View style={styles.content}>
//           <AddTodo submitHandler={submitHandler} />
//           <View style={styles.list}>
//             <FlatList
//               data={todos}
//               renderItem={({item}) => (
//                 <TodoItem item={item} pressHandler={pressHandler} />
//               )}
//             />
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     padding: 40,
//     backgroundColor: 'aliceblue',
//     flex: 1,
//   },
//   list: {
//     flex: 1,
//     marginTop: 20,
//   },
// });

import React from 'react';
// import Home from './screens/home';
import Navigator from './routes/homeStack';

function App() {
  return <Navigator />;
}

export default App;
