import React from 'react'

const TableList = props => {
  const { colums, data } = props;
  return (
    <table>
      <thead>
        <tr>
          {colums.map((item, index) => {
            return <th key={index}>{item.title}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            return <tr key={index}>
              {colums.map((value, key) => <td key={key}>
                {item[value.dataIndex] instanceof Array ?
                  item[value.dataIndex].map((ite, ind) => <td key={ind} style={{ marginLeft: "5px" }}>
                    {ite}</td>)
                  : item[value.dataIndex]}
                {value.render && value.render(item)}
              </td>)}
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default TableList