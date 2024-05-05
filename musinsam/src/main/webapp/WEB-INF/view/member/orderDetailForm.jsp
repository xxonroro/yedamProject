<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
  .order-container {
    background: white;
    margin: 20px 400px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .order-header {
    font-size: 20px;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 100px;
  }

  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
  }

  .table th {
    background-color: #f2f2f2;
  }

  .product-image {
    width: 100px;
    height: auto;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .product-name, .product-desc, .product-price {
    padding: 5px;
  }

  .product-details {
    display: flex;
    align-items: center;
  }

</style>
<div class="order-container">
  <div class="order-header">주문상품정보</div>
  <table class="table">
      <tr>
          <th>상품정보</th>
          <th>진행상태</th>
      </tr>
      <tr>
        <td class="product-details">
          <img src="img/cloth/${requestScope.ovo.clothName}.jpg" alt="${requestScope.ovo.clothName}" class="product-image" style="margin-right: 30px;">
          <div class="product-info">
            <p class="product-name">${requestScope.ovo.clothName}</p>
            <p style="padding-left: 5px;">[Size] ${requestScope.ovo.csize}</p>
            <p class="product-price">${requestScope.ovo.orderPrice}원 | 수량 ${requestScope.ovo.orderCnt}개</p>
          </div>
        </td>
        <td>${requestScope.ovo.deliveryState}</td>
      </tr>
  </table>
  <div class="order-header">주문자 상세 정보</div>
  <table class="table">
      <tr>
          <th>이름</th>
          <th>연락처</th>
      </tr>
      <tr>
          <td>${requestScope.ovo.name}</td>
          <td>${requestScope.ovo.userPhone}</td>
      </tr>
  </table>
  <div class="order-header">배송지 정보</div>
  <table class="table">
      <tr>
          <th>받는사람</th>
          <th>전화번호</th>
          <th>주소</th>
      </tr>
      <tr>
          <td>${requestScope.ovo.recipient}</td>
          <td>${requestScope.ovo.phone}</td>
          <td>${requestScope.ovo.address}</td>
      </tr>
  </table>
</div>
