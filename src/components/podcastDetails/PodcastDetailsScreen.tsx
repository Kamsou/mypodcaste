import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SearchStackRouteParamsList } from 'src/navigators/types';
import { FlatList } from 'react-native-gesture-handler';
import { Image, StyleSheet } from 'react-native';
import { theme } from '../../../theme';
import FeatherIcon from 'react-native-vector-icons/Feather'

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>

const PodcastDetailsScreen = () => {
  const {data} = useRoute<NavigationParams>().params ?? {}
  return (
    <Box f={1} bg="white">
      <FlatList 
        ListHeaderComponent={<>
        <Box dir="row" px="sm" mt="sm" mb="md">
          {data.thumbnail && (
            <Box mr={10}>
              <Image source={{ uri: data.thumbnail }} style={s.thumbnail}/>
            </Box>
          )}
          <Box f={1}>
            <Text size="lg" bold>{data.podcastName}</Text>
            <Text size="xs" color="grey">{data.artist}</Text>
            <Text color="blueLight" size="xs">S'abonner</Text>
          </Box>
        </Box>
        <Box px="sm" mb="md" dir="row" align="center">
          <Box mr={10}>
            <FeatherIcon name="play" size={30} color={theme.color.blueLight} />
          </Box>
          <Box>
            <Text bold>Lire</Text>
            <Text size="sm">#39 - Le dernier épisode</Text>
          </Box>
        </Box>

        <Box px="sm" mb="md">
          <Text bold size="md">Episodes</Text>
        </Box>
        </>}
        data={[{id: 1}, {id: 2}]} 
        ItemSeparatorComponent={() => <Box w="100%" px="sm" my="sm">
          <Box style={{ height: StyleSheet.hairlineWidth }} bg="greyLighter"/>
        </Box>}
        renderItem={() => (
        <Box px="sm">
          <Text size="xs" color="grey">DIMANCHE</Text>
          <Text bold>#01 - Le titre </Text>
          <Text size="sm" color="grey" numberOfLines={2}>
          I'm baby photo booth celiac plaid, kitsch godard food truck pok pok taxidermy kogi neutra. Affogato kale chips butcher celiac messenger bag single-origin coffee sartorial mlkshk plaid. Palo santo truffaut lomo prism mustache fam gastropub pop-up hashtag polaroid. Brunch freegan woke godard jean shorts, pickled mumblecore snackwave sartorial vinyl cold-pressed palo santo vexillologist offal messenger bag.
          </Text>
          <Text size="sm" color="grey">3 heures et 13 minuutes</Text>
        </Box>
        )} 
        // keyExtractor={item => item.id}
        />
    </Box>
  )
}

const s = StyleSheet.create({
  thumbnail: {
    height: 100,
    width: 100,
    borderRadius: 10
  }
})

export default PodcastDetailsScreen;