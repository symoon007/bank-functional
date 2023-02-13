document.querySelector("#btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  if (
    isNaN(newWithdrawAmount) ||
    newWithdrawAmount === "string" ||
    newWithdrawAmount < 0
  ) {
    alert("Error! Enter positive numbers of amount");
    return;
  }
  const previousWithdrawAmount = getElementValueById('withdraw-total');
 
 
  const previousBalanceTotal = getElementValueById('balance-total');
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Do Not Have Sufficiant Balance");
    return;
  }
   const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
   setTextElementValueById('withdraw-total', newWithdrawTotal);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById('balance-total', newBalanceTotal);
});
