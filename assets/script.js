function calc() {
  let price = parseFloat(document.getElementById('price').value) || 0;
  let rate = parseFloat(document.getElementById('rate').value) || 3600;
  let fee = parseFloat(document.getElementById('fee').value) || 5;
  let localShip = parseFloat(document.getElementById('localShip').value) || 0;
  let realWeight = parseFloat(document.getElementById('realWeight').value) || 0;
  let length = parseFloat(document.getElementById('length').value) || 0;
  let width = parseFloat(document.getElementById('width').value) || 0;
  let height = parseFloat(document.getElementById('height').value) || 0;
  let shipRate = parseFloat(document.getElementById('shipRate').value) || 35000;

  let productCost = (price + localShip) * rate * (1 + fee / 100);
  let volWeight = (length * width * height) / 6000;
  let chargeWeight = Math.max(realWeight, volWeight);
  let intlShip = chargeWeight * shipRate;
  let total = productCost + intlShip;

  document.getElementById('result').innerHTML = `
    <b>Tổng chi phí:</b> ${total.toLocaleString()} VNĐ<br>
    (Phí vận chuyển quốc tế: ${intlShip.toLocaleString()} VNĐ)
  `;
}
