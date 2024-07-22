import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
  container_2: {
    padding: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoText: {
    color: '#ffa500',
    fontSize: 35,
    fontWeight: 'bold',
  },
  todoCount: {
    color: '#ffa500',
    fontSize: 35,
  },

  input: {
    color: '#808080',
    fontSize: 20,
  },
  inputContainer: {
    backgroundColor: '#37474f',
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
  inputButton: {
    backgroundColor: '#808080',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
