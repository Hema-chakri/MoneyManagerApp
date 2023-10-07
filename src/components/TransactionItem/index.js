import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
