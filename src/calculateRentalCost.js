/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalSum = days * 40;
  const DAY3DISCOUNT = 20;
  const DAY7DISCOUNT = 50;
  const total3DaySum = totalSum - DAY3DISCOUNT;
  const total7DaySum = totalSum - DAY7DISCOUNT;

  if (days >= 7) {
    return total7DaySum;
  }

  if (days >= 3) {
    return total3DaySum;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
