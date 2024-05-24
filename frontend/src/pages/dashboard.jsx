
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Earnings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{p: 2}}>
            <Typography variant="h6">Available funds</Typography>
            <Typography variant="h4">$0.00</Typography>
            <Button variant="contained" sx={{mt: 2}}>
              Withdraw balance
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{p: 2}}>
            <Typography variant="h6">Future payments</Typography>
            <Box>
              <Typography variant="body1">Payments being cleared</Typography>
              <Typography variant="h6">$0.00</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Payments for active orders
              </Typography>
              <Typography variant="h6">Coming soon</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{p: 2}}>
            <Typography variant="h6">Earnings & expenses</Typography>
            <Box>
              <Typography variant="body1">Earnings to date</Typography>
              <Typography variant="h6">$0.00</Typography>
            </Box>
            <Box>
              <Typography variant="body1">Expenses to date</Typography>
              <Typography variant="h6">$0.00</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{p: 2}}>
            <Typography variant="h6">Activity</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Activity</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Beginnings are so exciting! You ll find your earnings here
                    as soon as you complete your first order.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
