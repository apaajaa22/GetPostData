import Axios from 'axios';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [dataUser, setDataUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });
  const getData = () => {
    Axios.get('https://reqres.in/api/users/2')
      .then((response) => {
        setDataUser(response.data.data);
      })
      .catch((error) => console.log('error: ', error));
  };
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
    id: '',
  });
  const dataAPI = {
    name: 'morpheus',
    job: 'leader',
    id: '46',
  };
  const postData = () => {
    Axios.post('https://reqres.in/api/users', dataAPI)
      .then((res) => {
        console.log('res: ', res);
        setDataJob(res.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };
  return (
    <View style={styles.page}>
      <View style={styles.getData}>
        {dataUser.avatar.length > 0 && (
          <Image source={{uri: dataUser.avatar}} style={styles.image} />
        )}
        <View style={styles.gap} />
        <Text
          style={
            styles.text
          }>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
        <Text style={styles.text}>{dataUser.email}</Text>
        <View style={styles.gap} />
      </View>
      <Button title="Get Data" onPress={getData} />
      <View style={styles.gap} />
      <View style={styles.line} />
      <View style={styles.gap} />
      <Text style={styles.text}>{dataJob.name}</Text>
      <Text style={styles.text}>{dataJob.job}</Text>
      <Text style={styles.text}>{dataJob.id}</Text>
      <View style={styles.gap} />
      <Button title="Post Data" onPress={postData} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {padding: 40},
  getData: {alignItems: 'center'},
  image: {width: 100, height: 100, borderRadius: 100 / 2},
  text: {fontSize: 18},
  gap: {height: 20},
  line: {borderBottomWidth: 1},
});
