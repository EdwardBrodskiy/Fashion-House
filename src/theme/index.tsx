import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react'

const ComponentStyles: Record<string, ComponentStyleConfig> = {
  Text: {
    baseStyle: {
      fontSize: { md: 'xl', base: 'lg' },
    },
  },
}

export const theme = extendTheme({
  colors: {
    brand: {
      dark: '#00152d',
      light: 'white',
    },
  },
  semanticTokens: {
    colors: {
      'colored-text': {
        default: '#00152d',
        _dark: 'white',
      },
    },
  },
  components: ComponentStyles,
})
