

const reactElement= {
  type:'a',
  props:{
    href:'https://www.google.com',
    target:'_blank'
  },
  children:'click here'
}

export default  function Home (){
  const containerRef = (container) =>{
    if(container) {
      const domElement = document.createElement(reactElement.type);
      domElement.innerHTML = reactElement.children;
      domElement.setAttribute('href', reactElement.props.href);
      domElement.setAttribute('target', reactElement.props.target)
      container.appendChild(domElement);
    }
  }
return(
    <>
    <div>
      Let's see the element
      <div  id='href-element' ref={containerRef}>
      </div>
    </div>
    </>
)
}
