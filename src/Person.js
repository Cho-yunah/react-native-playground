import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

function Person() {
  const [people, setPeople] = useState([
    {name: 'shawn', id: '1'},
    {name: 'mike', id: '2'},
    {name: 'yoon', id: '3'},
    {name: 'hwa', id: '4'},
    {name: 'minsu', id: '5'},
    {name: 'yoon', id: '6'},
    {name: 'hwa', id: '7'},
    {name: 'minsu', id: '8'},
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      {/* 리스트의 항목들이 많을 때 한번에 모든 데이터를 렌더하지 않기때문에 사용한다. */}
      <FlatList
        numColumns={2} // 열을 설정한 개수로 잘라준다.
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map(item => {
          return (
            <Viewid={itemid}>
              <Text style={styles.item}>{item.name}</Text>
            </Viewid>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});

export default Person;
