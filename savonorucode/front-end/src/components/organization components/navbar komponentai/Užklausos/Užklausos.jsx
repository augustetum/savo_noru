import "./Užklausos.css";
import Row from "./tablerow";

function Užklausos() {
  return (
    <div className="uzklausosContainer">
      <h1 className="uzklausos">Užklausos</h1>
      <table className="table">
        <thead className="tablehead">
            <tr>
                <th className="th">Vardas</th>
                <th className="th">Pavardė</th>
                <th className="th">Telefono numeris</th>
                <th className="th">El. paštas</th>
                <th className="th">priimti/atmesti</th>
            </tr>
        </thead>
        <tbody>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </tbody>
        </table>
    </div>
  );
}

export default Užklausos;