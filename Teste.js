import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Teste = () => {
    const route = useRoute();
    const { address } = route.params;
  console.log('Address:', address);

  return (
    <View>
      <Text>{address}</Text>

      {/* You can render additional UI components here if needed */}
    </View>
  );
};

export default Teste;
