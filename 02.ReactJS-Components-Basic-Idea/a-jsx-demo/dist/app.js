// Gett root HTML Element
var rootHtmlElement = document.getElementById('root');

// Initilize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
var headingReactSectionElement = React.createElement(
    "header",
    { className: "navigation", id: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello JSX from React"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is Awesome"
    ),
    React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, corrupti?"
    )
);

// Create component without JSX
function Main(props) {
    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The Matrix'), React.createElement('li', {}, 'Man of Steel')));
}

// const siteContent = React.createElement(
//     'div',
//     {},
//     headingReactSectionElement,
//     React.createElement(
//         Main,
//         {title: 'Best Movies'},
//     ),
// );

var siteContentJSX = React.createElement(
    "div",
    null,
    headingReactSectionElement,
    React.createElement(Main, { title: "Best Movies" })
);

// Render content
rootReactElement.render(siteContentJSX);