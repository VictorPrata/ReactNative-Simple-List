import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {getBand} from '../../services/api';
import {
  Container,
  Content,
  Description,
  Header,
  Information,
  Name,
  Photo,
} from './styles';

function BandDetails({route}) {
  const bandId = route.params.id;
  const [bandDetails, setBandDetails] = useState(null);

  const fetchData = async () => getBand(bandId).then(response => response);

  useEffect(() => {
    fetchData()
      .then(response => {
        setBandDetails(response);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

  return (
    <SafeAreaView>
      {bandDetails && (
        <Container>
          <Photo
            resizeMethod="resize"
            source={{
              uri: bandDetails.image,
            }}
          />
          <Content>
            <Header>
              <Name>{bandDetails.name}</Name>
              <Information>{`Gênero ${bandDetails.genre}`}</Information>
              <Information>{`Tocada ${bandDetails.numPlays} vezes`}</Information>
            </Header>

            <Description>{bandDetails.biography}</Description>
          </Content>
        </Container>
      )}
    </SafeAreaView>
  );
}

export default BandDetails;
