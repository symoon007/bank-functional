document.querySelector("#btn-deposit").addEventListener("click", function () {
  // get element by id // get value from element // convert string to number

  const newDepositAmount = getInputFieldValueById("deposit-field");
  if (
    isNaN(newDepositAmount) ||
    newDepositAmount === "string" ||
    newDepositAmount < 0
  ) {
    alert("Error! Enter positive numbers of amount");
    return;
  }
  // get previous deposit total  by id
  const previousDepositAmount = getElementValueById("deposit-total");
  // calculate new deposit total
  const newDepositTotal = newDepositAmount + previousDepositAmount;
  // set deposit total in deposit element
  setTextElementValueById("deposit-total", newDepositTotal);
  // get previous balance total
  const previousBalanceTotal = getElementValueById("balance-total");
  // calculate new balance total
  const newBalanceTotal = newDepositAmount + previousBalanceTotal;
  // set balance total in balance element
  setTextElementValueById("balance-total", newBalanceTotal);
});
