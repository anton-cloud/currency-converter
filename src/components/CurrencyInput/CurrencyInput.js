import PropTypes from 'prop-types'
import sprite from "../../icons/sprite.svg";
import styles from './CurrencyInput.module.css'


const CurrencyInput = ({ amount, currency, carrencies, onCurrencyChange, onAmountChange }) => {

  return (
    <div className={styles.group}>
      {currency === "EUR" && <svg className={styles.icon}>
        <use href={sprite + "#icon-europe-flag-icon"} />
      </svg>}
      {currency === "UAN" && <svg className={styles.icon}>
        <use href={sprite + "#icon-ukraine-flag-icon"} />
      </svg>}
      {currency === "USD" && <svg className={styles.icon}>
        <use href={sprite + "#icon-united-states-flag-icon"} />
      </svg>}
      <input maxLength='5' type="text" value={amount.toString()} onChange={e => onAmountChange(e.target.value)} />
      <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
        {carrencies.map((currency) => <option
          value={currency.toString()} key={currency}>
          {currency}
        </option>)}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {

  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  carrencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,

}

export default CurrencyInput;