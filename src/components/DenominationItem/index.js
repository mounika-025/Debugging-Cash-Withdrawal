import './index.css'

const DenominationItem = props => {
  // fixed: props in functional component should not be accessed with this
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  // fixed: Variable declaration should consist of keyword const
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        // fixed: Functions in functional components should not be accessed with this
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
