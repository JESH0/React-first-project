


function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.Children;

  /* domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute("target" , reactElement.props.target); */   //  for short this step we can :
 
    for (const prop in reactElement.props) {
     if (prop === "Children" && "type") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
               
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: "a",
    props : {
        href : 'https://google.com',
        target :'_blank'
    },
    Children: 'click to go Google'
}

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);