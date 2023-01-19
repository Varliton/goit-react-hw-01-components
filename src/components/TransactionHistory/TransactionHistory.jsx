import {
  TableBox,
  TableHead,
  TableData,
  TableRow,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
      <TableBox>
        <thead>
          <tr>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
          </tr>
        </thead>

        <tbody>
          {items.map(({type, amount, currency, id}) => (
            <TableRow key={id}>
                  <TableData>{type}</TableData>
                  <TableData>{amount}</TableData>
                  <TableData>{currency}</TableData>
            </TableRow>
          ))}
        </tbody>
      </TableBox>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })).isRequired
}