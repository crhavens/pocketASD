import { useState, useEffect, useMemo } from "react"
import { useTable } from 'react-table'

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
              <td><button>Approve</button></td>
              <td><button>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function Appointments() {
  const [appointments,setAppointments] = useState([])

  async function fetchAppointments(){
    //dummy array, will fetch from DB later
    const arrFromDB = [{
      userFirstName: "Jonathan",
      userLastName: "Lim",
      date: "2023-05-31"
    },
      {
        userFirstName: "Christopher",
        userLastName: "Havens",
        date: "2023-04-21"
      },
      {
        userFirstName: "Aaron",
        userLastName: "Wong",
        date: "2023-05-21"
      }
    ]

    setAppointments(arrFromDB)
  }

  useEffect(() => {
    fetchAppointments()
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'userFirstName',
      },
      {
        Header: 'Last Name',
        accessor: 'userLastName',
      },
      {
        Header: 'Appointment Date',
        accessor: 'date',
      },
    ],
    []
  )

  const data = useMemo(() => appointments, [appointments])

  return (<div>
    <h1>Appointments</h1>
    <Table columns={columns} data={data} />
  </div>)
}