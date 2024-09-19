const container = document.getElementById('root');

// creating element for the webpage..
const reactElement = {
    type: 'a',  // Tag
    props:{     // Properties
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'    // Text to be displayed on webpage
}

function customReact(reactElement, container){      // kise add krna hia, kha add krna hai..
    /* This is not the good way to add element, we can use this only 
    when we have less attributes but when we have so many attributes
    then we can't use this way.
    */

                                    /* Manually */
    // const element = document.createElement(reactElement.type)   // adding our custom element..
    // element.innerHTML = reactElement.children
    // element.setAttribute('href', reactElement.props)
    // element.setAttribute('target', reactElement.props)

    
                                    /* By Using Loop*/
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    // adding attributes using loop..
    for(const property in reactElement.props){
        if(property === 'children'){
            continue
        }
        else{
            element.setAttribute(property, reactElement.props[property])
        }
    }
    container.appendChild(element);
}
customReact(reactElement, container)