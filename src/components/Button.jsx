function Button(props){
    return(
        <button
            {...props}
            >
            {props.children}
        </button>
    );
}

export default Button;

// {...props} puxa todas as props do componente que são passadas no Tasks.jsx
// Em uma situação que eu vá repetir todo o className de um botão pra outro
// Eu poderia fazer:
/* 
function Button(props){
    return(
        <button>
            {...props} className="{ESTILOS}"
            {props.children}
        </button>
    );
}

export default Button;
*/