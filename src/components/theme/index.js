const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#E6BC07',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#1D2129',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#355CCA',
  },
};

export { lightTheme, darkTheme };
