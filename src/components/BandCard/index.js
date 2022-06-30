import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CardContainer, Name} from './styles';

function BandCard({item: band, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detalhes', {
          id: band.id,
        })}>
      <CardContainer>
        <Name>{band.name}</Name>
      </CardContainer>
    </TouchableOpacity>
  );
}

export default BandCard;
