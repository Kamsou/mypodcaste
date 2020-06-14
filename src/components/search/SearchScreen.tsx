import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../../../theme';
import { useLazyQuery } from '@apollo/react-hooks';
import { SearchQuery, SearchQueryVariables, SearchQuery_search } from '../../types/graphql';
import searchQuery from '../../graphql/query/searchQuery';
import SearchEmpty from './SearchEmpty';
import SearchTile from './SearchTile';





const SearchScreen = () => {
  const [term, setTerm] = React.useState<string>('');
  const [search, { data, loading, error }] = useLazyQuery<SearchQuery, SearchQueryVariables>(searchQuery)

  const onSearch = async () => {
    try {
      await search({variables: {term}});
    } catch (error) {
      console.log('error', error);
      
    }
  }

  return (
      <Box f={1} bg="white">
        <Box h={50} w="100%" px="md" my="sm">
          <TextInput 
            style={s.input} 
            placeholder="Rechercher Podcast.."
            selectionColor={theme.color.blueLight}
            onChangeText={setTerm}
            autoCorrect={false}
            onSubmitEditing={onSearch}
            value={term}
          />
        </Box>

        {error ? (
          <Box f={1} center>
            <Text color="red">{error.message}</Text>
          </Box>
        ) : (


        <FlatList<SearchQuery_search>
          keyboardShouldPersistTaps="never"
          contentContainerStyle={s.listContentContainer}
          data={data?.search ?? []}
          ListHeaderComponent={
            <>
            {loading && (
              <Box f={1} center h={200}>
                <ActivityIndicator size="large" color={theme.color.blueLight}/>
              </Box>
            )}
            </>
          }
          ListEmptyComponent={
            <>
            {!loading && (
              <SearchEmpty/>
            )
            }
            </>
          }
          renderItem={({item}) => (
            <SearchTile item={item}/>
          )}
          keyExtractor={(item) => String(item.feedUrl)}
        />

        )}
      </Box>
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
  listContentContainer: {
    paddingBottom: 90
  }
})

export default SearchScreen;