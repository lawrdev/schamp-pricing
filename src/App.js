import {
  RecoilRoot,
} from 'recoil';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme'
import AppLayout from './layout/appLayout';
import './fonts/DMSans/dm-sans-latin-400-normal.woff2';
import './fonts/HafferXH/HafferXH-Medium.otf'
import './fonts/HafferXH/HafferXH-Regular.otf'
import './fonts/HafferXH/HafferXH-SemiBold.otf'
import './fonts/SFMono/SFMonoMedium.otf'
import './fonts/SFMono/SFMonoRegular.otf'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  AOS.init({
    once: false,
    // offset: 80,
    easing: 'ease-in-cubic',
    duration: 700,
    delay: 10,
  });

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <AppLayout />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
