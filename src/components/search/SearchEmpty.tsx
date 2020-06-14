import React from 'react'
import {Box, Text} from 'react-native-design-utility';


const SearchEmpty = () => {
  return(
    <Box f={1} center>
      <Text color="grey">
        Pas de podcasts pour l'instant, lancez la recherche...
      </Text>
    </Box>
  )
}

export default SearchEmpty;