package com.yedam.common;

import java.util.Map;

import com.yedam.board.todayCoodiControl;

public class FrontControlSong {
	 public static void put(Map<String, Control> map) {
		 map.put("/todayCoodi.do", new todayCoodiControl());
	   }
	}

