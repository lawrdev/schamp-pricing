import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AppLayout from './layout/appLayout';
import './fonts/DMSans/dm-sans-latin-400-normal.woff2';
import './fonts/HafferXH/HafferXH-Medium.otf'
import './fonts/HafferXH/HafferXH-Regular.otf'
import './fonts/HafferXH/HafferXH-SemiBold.otf'
import './fonts/SFMono/SFMonoMedium.otf'
import './fonts/SFMono/SFMonoRegular.otf'


function App() {

  const theme = extendTheme({
    colors: {
      brand: {
        main: '#197EEF'
      },
      backgrounds: {
        1: '#EBEDEE',
        2: '#0D253F',
        3: '#EDF5FE',
        4: '#EEF4FF',
      }
    },
    fonts: {
      body: "'DM Sans', -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      heading: "HafferXH, sans-serif",
      mono: 'SFMonoRegular, Menlo, Monaco, Consolas,"Liberation Mono","Courier New", monospace',
    },
  })
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <AppLayout />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
