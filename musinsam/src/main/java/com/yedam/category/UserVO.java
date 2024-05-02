package com.yedam.category;



import lombok.Data;

@Data
public class UserVO {
	private String userId;
	private String password;
	private String name;
	private String address;
	private String phone;
	private String birthdate;
	private int authority;
}
