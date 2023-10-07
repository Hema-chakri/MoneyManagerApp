import './index.css'

const MoneyDetails = props => {
  const {imgUrl, altText, text, rupees} = props
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
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
