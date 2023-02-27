let add_element = () => {
    const template = document.createElement('div');
    template.innerHTML = "Content inside DIV";
    
    document.body.appendChild(template);
}

add_element();
