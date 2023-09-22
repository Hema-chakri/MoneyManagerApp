// Write your code here
const MoneyDetails = props => {
  const {imgUrl, altText, text, rupees} = props
  return (
    <div>
      <img src={imgUrl} alt={altText} />
      <div>
        <p>{text}</p>
        <p>{rupees}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
