import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        brand: {
            main: '#197EEF'
        },
        backgrounds: {
            1: '#EBEDEE',
            2: '#0D253F',
            3: '#EDF5FE',
            4: '#EEF4FF',
        },
        primary: {
            main: '#197EEF',
            50: '#def3ff',
            100: '#b2d7ff',
            200: '#85bcfa',
            300: '#56a1f4',
            400: '#2887f0',
            500: '#197EEF',
            600: '#0555a8',
            700: '#003d79',
            800: '#00244c',
            900: '#000d1f',
        },
        black: {
            50: '#f2f2f2',
            100: '#d9d9d9',
            200: '#bfbfbf',
            300: '#a6a6a6',
            400: '#8c8c8c',
            500: '#737373',
            600: '#595959',
            700: '#404040',
            800: '#262626',
            900: '#0d0d0d',
        },
        grays: {
            1: '#0D253F',
            2: 'rgba(255,255,255,.56)',
            3: '#47596D',
            4: '#E2EDFE',
            5: 'rgba(255,255,255,.24)',
            6: 'rgba(25, 126, 239, 0.08)',
            7: '#EFF4FE',
            8: '#9DA8BB',
            9: 'rgba(25, 126, 239, 0.4)',
            10: 'rgba(255,255,255,.76)',
        }
    },
    borders: {
        none: 0,
        '1px': '1px solid',
        '2px': '2px solid',
        '4px': '4px solid',
        '8px': '8px solid',
    },
    transition: {
        property: {
            common: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
            colors: 'background-color,border-color,color,fill,stroke',
            dimensions: 'width,height',
            position: 'left,right,top,bottom',
            background: 'background-color,background-image,background-position',
        },
        easing: {
            'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
            'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
            'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        duration: {
            'ultra-fast': '50ms',
            faster: '100ms',
            fast: '150ms',
            normal: '200ms',
            slow: '300ms',
            slower: '400ms',
            'ultra-slow': '500ms',
        },
    },
    fonts: {
        body: "'DM Sans', -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        heading: "HafferXH, sans-serif",
        mono: 'SFMonoRegular, Menlo, Monaco, Consolas,"Liberation Mono","Courier New", monospace',
    },
    styles: {
        global: props => ({
            body: {
                color:
                    'gray.800',
            },
        }),
    },
},
    withDefaultColorScheme({
        colorScheme: 'primary',
    }),
)
