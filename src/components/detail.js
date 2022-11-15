import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

export default function Detail() {
    const params = useParams();
    const [mascota, setMascota] = useState([]);
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                let mascota = data.find(mascota => mascota.id === parseInt(params.mascotaId));
                setMascota(mascota);
            });
    }, [params]);
    return (
        <Col>
            <h1>{mascota.nombre}</h1>
            <img src={mascota.foto} alt={"Foto de " |+ mascota.nombre} height="600vh"></img>
            <h2>{mascota.raza}</h2>
        </Col>
    );
}