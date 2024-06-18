import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lastest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./assets/imgs/meow3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Minh Hoang</span>
          </td>
          <td className="widgetLgDate">14 June 2024</td>
          <td className="widgetLgAmount">100.000vnd</td>
          <td className="widgetLgStatus"><Button type="Appprove" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./assets/imgs/meow3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Minh Hoang</span>
          </td>
          <td className="widgetLgDate">14 June 2024</td>
          <td className="widgetLgAmount">100.000vnd</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./assets/imgs/meow3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Minh Hoang</span>
          </td>
          <td className="widgetLgDate">14 June 2024</td>
          <td className="widgetLgAmount">100.000vnd</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="./assets/imgs/meow3.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Minh Hoang</span>
          </td>
          <td className="widgetLgDate">14 June 2024</td>
          <td className="widgetLgAmount">100.000vnd</td>
          <td className="widgetLgStatus"><Button type="Appprove" /></td>
        </tr>
      </table>

    </div>
  )
}
