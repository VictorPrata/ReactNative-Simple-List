import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import bandsData from '../../data/bands.json';
import BandCard from '../../components/BandCard';
import ItemDivider from '../../components/ItemDivider';

function Bands({navigation}) {
  const {bands} = bandsData;

  return (
    <SafeAreaView>
      <FlatList
        data={bands}
        renderItem={({item}) => (
          <BandCard item={item} navigation={navigation} />
        )}
        ItemSeparatorComponent={ItemDivider}
        keyExtractor={band => band.id}
      />
    </SafeAreaView>
  );
}

export default Bands;
