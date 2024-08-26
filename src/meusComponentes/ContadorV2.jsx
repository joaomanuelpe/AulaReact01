import { useState } from "react";

export default function Contador(props) {
    const [valor, setValor] = useState(0); //hook useState, define o valor inicial da váriavel.
    //E o método render? É o que a função retorna!

    function incrementar() {
        setValor(valor + 1);
    }

    function decrementar() {
        valor > 0 ? setValor(valor - 1) : setValor(0);
    }
    
    return (
        <div>
            <div className="visor">
                <h1>
                    {valor}
                </h1>
            </div>
            <div className="botoes">
                <button onClick={() => {
                    incrementar();
                }}>
                    +
                </button>
                <button onClick={() => {
                    decrementar();
                }}>
                    -
                </button>
            </div>
        </div>
    )
}