import { useParams } from "react-router-dom";

function Details() {

    const params = useParams();
    console.log(params);

  return (
    <div>
      <h1>Pagina de detalhes</h1>
    </div>
  );
}

export default Details;