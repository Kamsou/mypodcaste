import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';
import KeyboardDismissView from '../KeyboardDismissView';

const SearchScreen = () => {
  return (
    <KeyboardDismissView>
      <Box f={1} bg="white">
        <Box h={50} w="100%" px="md" my="sm">
          <TextInput 
            style={s.input} 
            placeholder="Rechercher Podcast.."
            selectionColor={theme.color.blueLight}
          />
        </Box>

        <FlatList
          style={s.list}
          data={[{id: 1}, {id: 2}]}
          renderItem={() => (
            <Box h={90} dir="row" align="center" px="sm">
              <Box h={60} w={60} bg="orange" radius={10} mr={10} />
              <Box>
                <Text bold>Gary Vee</Text>
                <Text size="xs" color="grey">This is the subtitle</Text>
                <Text size="xxs" color="orange">400 épisodes</Text>
              </Box>
            </Box>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Box>
    </KeyboardDismissView>
  )
}

const s = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    backgroundColor: theme.color.greyLightest,
    borderRadius: 10,
    paddingHorizontal: theme.space.sm
  },
  list: {
    minHeight: '100%'
  }
})

export default SearchScreen;