package com.yedam.vo;



import lombok.Data;

@Data
public class UserVO {
	private String userId; //유저아이디
	private String password; //비밀번호
	private String name; //이름
	private String address; //주소 
	private String phone; //전화번호
	private String birthdate; //생년월일
	private int authority; //권한
	
}
