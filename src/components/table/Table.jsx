import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 123356,
            product: "Acer Nitro",
            img: "https://www.notebookcheck.net/uploads/tx_nbc2/AcerNitro5-AN515-55__1__12.JPG",
            customer: "William Smith",
            date: "1 March",
            amount: 900,
            method: "Online",
            status: "Approved",
        },
        {
            id: 123446,
            product: "Playstation 5",
            img: "https://www.mcsteve.com/wp-content/uploads/2020/12/ps5-1.jpg",
            customer: "Michael Joe",
            date: "1 March",
            amount: 756,
            method: "Cash On Delivery",
            status: "Pending",
        },
        {
            id: 123256,
            product: "Sneakers",
            img: "https://fatcat.ng/storage/files/ng/1240/thumb-816x460-098c9d745898e7dc65772d890b6d501c.jpg",
            customer: "John Kennedy",
            date: "1 March",
            amount: 328,
            method: "Cash On Delivery",
            status: "Pending",
        },
        {
            id: 122456,
            product: "Razer Blade 15",
            img: "https://static.turbosquid.com/Preview/2015/01/01__22_41_03/razorblade0001.jpgc89bf656-114f-4128-8114-d03fda3f8899Large.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 120,
            method: "Online",
            status: "Approved",
        },
        {
            id: 123456,
            product: "ASUS ROG Strix",
            img: "https://dlcdnwebimgs.asus.com/gain/ACEB2429-FA75-4F85-B47F-E5AC3B4C55C7/w240/h175",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ]


  return (
      <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                  <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List