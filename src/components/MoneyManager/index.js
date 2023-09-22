import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
console.log(transactionTypeOptions)
// Write your code here
class MoneyManager extends Component {
  state = {balance: 0, income: 0, expenses: 0}

  render() {
    return (
      <div>
        <div className="money-manager-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>
        <ul>
          <MoneyDetails />
        </ul>
        <div className="bottom-section">
          <form>
            <h1>Add Transaction</h1>
            <div className="need-display">
              <label htmlFor="title">TITLE</label>
              <input type="text" id="title" placeholder="TITLE" />
            </div>
            <div className="need-display">
              <label htmlFor="amount">AMOUNT</label>
              <input type="text" id="amount" placeholder="AMOUNT" />
            </div>
            <div className="need-display">
              <label htmlFor="type">TYPE</label>
              <select name="type" id="type">
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
              </select>
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="history">
            <h1>History</h1>
            <div className="history-details-list">
              <p className="history-details">Title</p>
              <p className="history-details">Amount</p>
              <p className="history-details">Type</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
