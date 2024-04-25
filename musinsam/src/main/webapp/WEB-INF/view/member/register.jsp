<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!--================Login Box Area =================-->
<section class="login_box_area section-margin">
  <div class="container">
    <div class="login_form_inner register_form_inner">
      <h3>회원 가입</h3>
      <form class="row login_form" action="memberRegistration.do" name="register_form" method="post">
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="userId" name="userId" placeholder="아이디" required/>
          <button type="submit" id="idCheckBtn">중복 체크</button>
        </div>
        <div class="col-md-12 form-group">
          <input type="password" class="form-control" id="password" name="password" placeholder="비밀번호" required/>
          <i class="fa-solid fa-eye-slash"></i>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="name" name="name" placeholder="이름" required/>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="birthday" name="birthday" placeholder="생년월일 6자리" maxlength="6" required/>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="address" name="address" placeholder="주소" required/>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="phone" name="phone" placeholder="휴대폰 번호" required/>
          <button type="submit" id="phoneCheckBtn">중복 체크</button>
        </div>
        <div class="col-md-12 form-group">
          <button type="submit" value="submit" class="button button-register w-100">등록</button>
        </div>
      </form>
    </div>
  </div>
</section>

<!--================End Login Box Area =================-->
