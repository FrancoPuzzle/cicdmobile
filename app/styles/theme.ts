const tintColor = '#62d0cf';

const color = {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: '#00D3A7',
  tabBar: '#242529',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  opacityBackground: '#00000080',
  primary: '#00dcda',
  white: 'white',
  primaryButton: 'rgb(65,176,202)',
  inactive: '#b1b1b1',
  black: 'black',
  lightBlue: '#2196F3',
  lightBlueDisabled: '#bfdce3',
  nextDotsPurple: '#401bc4',
  puzzleOrange: '#fe8a43',
};

const defaultTheme = {
  colors: {
    ...color,
    body: {
      bg: '',
      text: '',
    },
    borderColor: 'gray.500',
    headingsColor: 'text.bold',
    subheadingsColor: '',
    textColor: 'text.regular',
    buttonColor: 'white',
    buttonBgColor: 'primary.regular',
    buttonBgHoverColor: 'primary.hover',
    buttonBorderColor: 'primary.regular',
    linkColor: 'primary.regular',
    input: {
      text: '',
      bg: '',
      border: '',
      focus: '',
      placeholder: '',
    },
  },
  text: {
    white: 'white',
    black: 'black',
    primary: 'rgb(53,53,55)',
  },
  ui: {
    error: 'red',
    primary: 'blue',
  },

  breakpoints: ['767px', '991px', '70em', '90em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontSizes: {
    xs: 12,
    sm: 13,
    base: 15,
    md: 19,
    lg: 21,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
    '4xl': 42,
    '5xl': 48,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    bolder: 900,
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  boxSizing: 'border-box',
  radii: {
    base: '6px',
    small: '3px',
    medium: '12px',
    big: '18px',
  },
  shadows: {
    base: '0 3px 6px rgba(0, 0, 0, 0.16)',
    medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
    big: '0 21px 36px rgba(0, 0, 0, 0.16)',
    header: '0 1px 2px rgba(0, 0, 0, 0.06)',
  },
  globals: {},
};

export default defaultTheme;
