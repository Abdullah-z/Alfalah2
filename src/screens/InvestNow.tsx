import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Input} from 'native-base';

export default function InvestNow() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchCoins = async () => {
    setLoading(true);
    const {data} = await axios.get(
      'http://dummy.restapiexample.com/api/v1/employees',
    );
    console.log(data);

    setCoins(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = () => {
    return coins.filter(
      (coin) => coin.employee_name.toLowerCase().includes(search) || '',
    );
  };

  return (
    <ScrollView>
      <Input onChangeText={(value) => setSearch(value.toLowerCase())}></Input>
      {handleSearch().map((row) => {
        return <Text key={row.id}>{row.employee_name}</Text>;
      })}
    </ScrollView>
  );
}
