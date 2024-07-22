import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './custom_comp';
import TodoCard from './src/components/TodoCard';

function App() {
  const [list, setList] = useState(['ammo', 'sdase', 'sadasd']);
  const [inputText, setInputText] = useState('');

  const renderTodo = ({item}: {item: any}) => <TodoCard item={item}></TodoCard>;

  const addTodo = () => {
    if (inputText.trim()) {
      setList([...list, inputText]);
      setInputText(''); // inputu yeni görev ekledikten sonra temizler
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_2}>
        <Text style={styles.todoText}>Yapılacaklar</Text>
        <Text style={styles.todoCount}>{list.length}</Text>
      </View>
      <FlatList
        data={list}
        renderItem={renderTodo}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Yeni bir görev ekle"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.inputButton} onPress={addTodo}>
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;
