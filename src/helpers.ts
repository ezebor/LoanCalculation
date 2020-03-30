export function calculateLoan(amount: number, time: number): number {
  let totalAmount;
  if (amount <= 1000) {
    totalAmount = amount * 0.25;
  } else if (amount <= 5000) {
    totalAmount = amount * 0.2;
  } else if (amount <= 10000) {
    totalAmount = amount * 0.15;
  } else {
    totalAmount = amount * 0.1;
  }

  let totalTime = 0;
  switch (time) {
    case 3:
      totalTime = amount * 0.05;
      break;
    case 6:
      totalTime = amount * 0.1;
      break;
    case 12:
      totalTime = amount * 0.15;
      break;
    case 24:
      totalTime = amount * 0.2;
      break;
    default:
      totalTime = amount;
      break;
  }

  return amount + totalTime + totalAmount;
}
