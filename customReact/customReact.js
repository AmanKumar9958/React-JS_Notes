const mainContainer = document.getElementById('root');

// creating function..
function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)    // Here we can create inbuilt tag but we are going to make our own tag..
    // This is the harder way to add attributes in the tag...
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement);*/

    // Another way...
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // In this way we are using loop to set all the attributes automatically..
    for(properties in reactElement.props){
        if(properties === 'children'){
            continue
        }
        domElement.setAttribute(properties, reactElement.props[properties]);
    }
    container.appendChild(domElement);
}

// creating react Element..
const reactElement = {
    type: 'a',  // any tag..
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'    // text which will be visible on the page..
}

// calling function..
customRender(reactElement, mainContainer)   // kya insert krna hai, kha insert krna hai..