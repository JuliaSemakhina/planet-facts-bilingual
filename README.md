##Planet Facts Bilingual Site (inspired by challenge on Frontend Mentor)
[Planet Facts Site Preview (home page)](../public/images/Planet1.jpg)
## Welcome!👋


### The challenge 
- One can see page for each planet and toggle between the "Overview", "Structure", and "Geology" tabs
- Different color schemes dpending on the type of planets
- The optimal layout for the site depending on device's screen size
- Hover states for all interactive elements on the page

### Screenshot

[Planet Facts Site Preview (planet info)](../public/images/Planet2.jpg)

### Links

- Live Site URL: [link](https://juliasemakhina.github.io/planet-facts-bilingual/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [react-i18next](https://react.i18next.com) - internationalization framework for React
- [hamburger-react](https://hamburger-react.netlify.app) - For animated Hamburger Menu


### What I learned

- Optimizing tabs rendering with useCallback
- Complex nested structure in json files for langueages
- Making links active even if they are located within separate element 
- Reseting expanded text depending on opened page and tab
- Optimizing transition for display: block/none

```
```
```css
.menu {
    transition: opacity 0.35s ease-in-out, display 0.35s ease-in-out;
    transition-behavior: allow-discrete;  
}
```
```js
const DEFAULT_TAB = "overview";

  const resetTab = useCallback(() => {
    setActiveTab(DEFAULT_TAB);
  }, [setActiveTab]);
  
  useEffect(() => {
    resetTab();
  }, [nameKey, resetTab]);
```
```js
  useEffect(() => {
    setShowFullText(false);
  }, [activeTab, tabs[activeTab]?.content]); 
`````

## Author

- Website - [Yuliya Semakhina](https://github.com/JuliaSemakhina/)
