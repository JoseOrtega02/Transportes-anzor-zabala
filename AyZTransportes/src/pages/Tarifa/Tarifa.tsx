function Tarifa() {
  return (
    <>
      <div>
        <h1>Calcula tu Tarifa</h1>
        <label htmlFor="from">Desde </label>
        <input type="text" name="from" id="" placeholder="Origen" />

        <label htmlFor="to">Hasta </label>
        <input type="text" name="to" id="" placeholder="Destino" />
        <button>Calcular</button>
      </div>
      <div>
        <h1>Resultados</h1>
      </div>
    </>
  );
}

export default Tarifa;
