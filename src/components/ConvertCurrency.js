import React, { useState } from 'react';

const ConvertCurrency = () => {
  const [currency_from, setCurrencyFrom] = useState('usd');
  const [currency_to, setCurrencyTo] = useState('cad');
  const [amount, setAmount] = useState('');
  const [converted_amount, setConvertedAmount] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const currency = {currency_from, amount, currency_to};

    fetch('http://localhost:3001/currency_exchange',{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({exchange_api: currency})
    }).then((res) => res.json())
    .then((data) => {
      setConvertedAmount(data);
    })
  };

  return (
    <div>
      <h2>Convert Currency</h2>
      <form onSubmit={handleOnSubmit}>

        <label>
          Enter Currency From:
          </label>

          <select value={currency_from}
            onChange={(e) => setCurrencyFrom(e.target.value)}>
            <option value="usd">USD</option>
            <option value="cad">CAD</option>
            <option value="inr">INR</option>
            <option value="aud">AUD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>

        <label>
          Amount
        </label>
        <input type="number"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />

        <label>
          Enter Currency To:
          <select value={currency_to}
            onChange={(e) => setCurrencyTo(e.target.value)}>
            <option value="cad">CAD</option>
            <option value="usd">USD</option>
            <option value="aud">AUD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
            <option value="gbp">GBP</option>
          </select>
        </label>


        <button>Convert</button>

      </form>

      <p> The converted Amount is: </p>
      {converted_amount && converted_amount.converted_amount}
    </div>
  );
};

export default ConvertCurrency;