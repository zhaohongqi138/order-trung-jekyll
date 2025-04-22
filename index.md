---
layout: default
title: Tính giá order hàng Trung
---

<h1>{{ page.title }}</h1>

<form>
  <label>Giá sản phẩm (¥)<input id="price" type="number" step="0.01"></label><br>
  <label>Tỷ giá (VNĐ/¥)<input id="rate" type="number" value="3600"></label><br>
  <label>Phí dịch vụ (%)<input id="fee" type="number" value="5"></label><br>
  <label>Phí vận chuyển nội địa (¥)<input id="localShip" type="number"></label><br>
  <label>Cân nặng thực tế (kg)<input id="realWeight" type="number" step="0.01"></label><br>
  <label>Kích thước (cm):</label><br>
  <input id="length" type="number" placeholder="Dài">
  <input id="width" type="number" placeholder="Rộng">
  <input id="height" type="number" placeholder="Cao"><br>
  <label>Đơn giá vận chuyển quốc tế (VNĐ/kg)<input id="shipRate" type="number" value="35000"></label><br>
  <button type="button" onclick="calc()">Tính</button>
</form>

<div id="result" style="margin-top: 20px;"></div>

<script src="assets/script.js"></script>
