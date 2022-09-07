import { useEffect, useState } from 'react'
import styles from '../styles/Calendar.module.scss'

import config from "../.trcalendar.json";
import { getDaysMonths } from '../helpers/DatesController';

const Calendar = (props) => {

  let [selectedMonths, setSelectedMonths] = useState(null);

  useEffect(() => {

    let months = getDaysMonths(2, 2022);

    setSelectedMonths(months);

  }, [])

  const getDayList = (num) => {
    return Array.from({length: num}, (_, i) => i + 1)
  }

  let currentIndex = 0;

  return (
    <div>
      Calendario


      {selectedMonths && selectedMonths.current ?
        <div className={styles.calendar}>
          <div className={styles.info}>
            <div>Month {selectedMonths.current.number}</div>
            <div className={styles.right}>
              <div>Prev</div>
              <div>Next</div>
            </div>
          </div>
          <div className={styles.weeks}>
            <div className={styles.weekNames}>
              <div className={styles.nameDay}>Lunes</div>
              <div className={styles.nameDay}>Martes</div>
              <div className={styles.nameDay}>Miércoles</div>
              <div className={styles.nameDay}>Jueves</div>
              <div className={styles.nameDay}>Viernes</div>
              <div className={styles.nameDay}>Sabado</div>
              <div className={styles.nameDay}>Domingo</div>
            </div>

            {selectedMonths.current.startDay !== 1 ?
              <></>
              :
              <></>
            }
            {getDayList(selectedMonths.current.daysNumber).map(num => (
              <div>HOla</div>
            ))}

            {/* {selectedMonths.map(week => {
              return <div className={styles.week}>
                {week.map((day, index) => {
                  return <div className={styles.day} key={index}>
                      <div className={styles.dayContent}>
                        <div>{day.getDate()}</div>
                      </div>
                    </div>
                  })
                }
              </div>
            })} */}
          </div>
        </div>
      :
        <>No hay mes seleccionado</>
      }

    </div>
  )
}

export default Calendar;
