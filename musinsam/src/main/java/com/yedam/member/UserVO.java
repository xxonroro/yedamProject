package com.yedam.member;



import lombok.Data;

@Data
public class UserVO {
	private String userId;
	private String upassword;
	private String uname;
	private String address;
	private String phone;
	private String birthdate	;
	private int authority;
	
}
