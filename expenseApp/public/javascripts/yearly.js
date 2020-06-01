let purchaseDate = expenseObject.map((val) => {
  return val.expenseType;
});
let purchasePrice = expenseObject.map((val) => {
  return val.price;
});
sumOfPurchasePrice = 0;

function sumPrices(prices) {
  let myPrices = [...prices];
  for (let i = 0; i < myPrices.length; i++) {
    sumOfPurchasePrice += parseInt(myPrices[i]);
  }
  return sumOfPurchasePrice;
}

document.getElementById("totalMoneySpent").innerHTML = sumPrices(purchasePrice);
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: purchaseDate,
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: purchasePrice,
      },
    ],
  },
  options: {
    title: {
      display: true,
    },
  },
});
