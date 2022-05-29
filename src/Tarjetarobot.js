export default function Tarjetarobot(props) {
  const robot = props.robot;

  return (
    <div className="Tarjetarobot">
      <div className="Tarjetaroboti">
        <div className="Tarjetarobotf">
          <div className="nombre">{`${robot.first_name} ${robot.last_name}`}</div>
          <div className="trabajo">{robot.employment.title}</div>
        </div>
        <div className="Tarjetarobotb">
          <div className="informacion">
          <div className="estilo">Usuario</div>
            {robot.username}
            <div className="estilo">Suscripcion</div>
            {robot.subscription.plan}
            <div className="estilo">Email</div>
            {robot.email}
            <div className="estilo">Cumpleaños</div>
            {robot.date_of_birth}
            <div className="estilo">Telefono</div>
            {robot.phone_number}
          </div>
        </div>
      </div>
    </div>
  );
}
