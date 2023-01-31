import React from "react";
import ReactLoading from "react-loading";

function loading() {
    const [data, setdata] = useState([]);
    const [done, setdone] = useState(undefined);

    useEffect(() => {
        setTimeout (() => {
            // Aquí irá el proceso que define si la carga ha finalizado o no
            setdone(true);
        }, 3000);
    }, []);

  return (
    <>  
        {done ? (
            <ReactLoading type={"bars"} color={"#000000"} height={667} width={375} />
        ) : (
            // Aquí irá el componente que se mostrará cuando la carga haya finalizado
            <select id="segundoForm" class="login__selector" name="typepins" value={selects} onChange={e=>setSelects(e.target.value) }>
                <option value="pJefe">send PIN to manager's email</option>
                <option value="pSMS">send PIN by SMS</option>
            </select>
        )
        }

    </>
  );
}