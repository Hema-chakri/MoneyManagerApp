import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="amount-image"
        />
        <div className="balance-text">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="amount-image"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="amount-image"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
