import config from "../.trcalendar.json";

const Calendar = (props) => {

  let a = __dirname;

  console.log("Esto es config")
  console.log(config)

  return (
    <div>
      {a} <br />
      Esto sería el calendario.
    </div>
  )
}

export default Calendar;