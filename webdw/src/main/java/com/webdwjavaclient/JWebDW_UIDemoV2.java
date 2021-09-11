package com.webdwjavaclient;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.util.ArrayList;

import javax.swing.AbstractButton;
import javax.swing.BorderFactory;
import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

//import com.webdw.demo.UIDemo_DataAccess;
//import com.webdw2.Golbal2;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

//import net.minidev.json.JSONArray;

public class JWebDW_UIDemoV2 extends JApplet {
	private static CWebDWTransaction2 sqlca = new CWebDWTransaction2();
	//褰撳墠鐣岄潰鏁版嵁绐楀彛鐨勮瀹氬悕绉帮紝鐢ㄦ潵浼犻�掑弬鏁�
	public static String dwname="";
	//褰撳墠鐣岄潰鏁版嵁绐楀彛鐨勫悗鍙板搴攗uid锛岀敤鏉ヤ紶閫掑弬鏁�
	public static String dwuuid="";
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void ReadMe() {
		System.out.println("WebDW Java Client Demo.");
		System.out.println(Golbal2.JWebDWInfo);
	}

	static JFrame jframe = new JFrame("JWebDW2.0 Demo Application.");

	static ArrayList targetControls = new ArrayList();

	static JPanel target = null;

	public static void setupFrame() {
		//鍒濆鍖栫獥鍙�
		jframe.setVisible(true);
		jframe.getContentPane().setLayout(null);
		jframe.getContentPane().setBackground(new Color(204, 204, 204));
		jframe.setBounds(200, 100, 1000, 600);

		WindowListener listener = new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		};
		jframe.addWindowListener(listener);

		JPanel targetpic = new JPanel();
		target = targetpic;
		targetpic.setBounds(10, 57, 960, 500);
		// targetpic.setOpaque(true);
		targetpic.setVisible(true);
		targetpic.setLayout(null);
		targetpic.setBorder(BorderFactory.createEtchedBorder());
		jframe.add(targetpic);

		//add setdw buttons
		JButton button1 = new JButton("set dw1");
		button1.setBounds(400,10,100,20);

		JButton button2 = new JButton("set dw2");
		button2.setBounds(550,10,100,20);
		
		JButton button3 = new JButton("set dw3");
		button3.setBounds(700,10,100,20);

		JButton button4 = new JButton("set dw4");
		button4.setBounds(850,10,100,20);

		jframe.add(button1);
		jframe.add(button2);
		jframe.add(button3);
		jframe.add(button4);
		
		
		JButton btn_retrieve = new JButton("retrieve");
		btn_retrieve.setBounds(400, 35, 100, 20);

		JButton btn_insertrow = new JButton("insert row");
		btn_insertrow.setBounds(550, 35, 100, 20);
		
		JButton btn_deleterow = new JButton("delete row");
		btn_deleterow.setBounds(700, 35, 100, 20);

		JButton btn_update = new JButton("Update");
		btn_update.setBounds(850, 35, 100, 20);

		//娣诲姞鎿嶄綔鎸夐挳
		jframe.add(btn_retrieve);
		jframe.add(btn_insertrow);
		jframe.add(btn_deleterow);
		jframe.add(btn_update);

		
		// 璁剧疆鏁版嵁绐楀彛鎸夐挳
		button1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				MyInt2 iret = new MyInt2(0);
				dwname = "d_products";
				 
				String svalue = sqlca.setdataobject(dwname, iret);
				if(iret.intvalue !=0 ) {
					message("call setdataobject failed.");
					return;
				}
				
				drawPictByString(target,svalue);
				message("set dw1 ok.");
			}
		});
		
		// 璁剧疆鏁版嵁绐楀彛鎸夐挳
		button2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				MyInt2 iret = new MyInt2(0);
				dwname = "d_products_grid";
				 
				String svalue = sqlca.setdataobject(dwname, iret);
				if(iret.intvalue !=0 ) {
					message("call setdataobject failed.");
					return;
				}
				drawPictByString(target,svalue);
				message("set dw2 ok.");
			}
		});

		// 璁剧疆鏁版嵁绐楀彛鎸夐挳
		button3.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				MyInt2 iret = new MyInt2(0);
				dwname = "d_employee_list";
				 
				String svalue = sqlca.setdataobject(dwname, iret);
				if(iret.intvalue !=0 ) {
					message("call setdataobject failed.");
					return;
				}
				drawPictByString(target,svalue);
				message("set dw3 ok.");
			}
		});

		// 璁剧疆鏁版嵁绐楀彛鎸夐挳
		button4.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				MyInt2 iret = new MyInt2(0);
				dwname = "d_employee";
				 
				String svalue = sqlca.setdataobject(dwname, iret);
				if(iret.intvalue !=0 ) {
					message("call setdataobject failed.");
					return;
				}
				drawPictByString(target,svalue);
				message("set dw4 ok.");
			}
		});
		
		// 妫�绱㈡寜閽�
		btn_retrieve.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				System.out.println("testbutton clicked!");
				MyInt2 iret = new MyInt2(0);
				if(dwname.equals("")) {
					//璁剧疆鏁版嵁绐楀彛鍚嶇О鐨勯粯璁ゅ��);
					dwname = "d_products";
				}
				 
				String svalue = sqlca.retrieve(dwname, iret);
				if(iret.intvalue !=0 ) {
					message("call retrieve failed.");
					return;
				}
				//鍔ㄦ�佺粯鍒舵暟鎹獥鍙�
				drawPictByString(target,svalue);
				//鎻愮ず妫�绱㈡垚鍔�
				message("retrieve ok.");
			}
		});

		// 妫�绱㈡寜閽�
		btn_insertrow.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				MyInt2 iret = new MyInt2(0);
				//璋冪敤鍙傛暟鍒ゆ柇妫�鏌�
				if(dwuuid.equals("")) {
					message("dwuuid is empty.");
					return ;
				}
				//璋冪敤鍚庡彴鏈嶅姟锛岃幏鍙栬繑鍥炵粨鏋�
				String svalue = sqlca.insertrow(dwuuid, iret);
				//杩斿洖鍊煎垽鏂�
				if(iret.intvalue !=0 ) {
					message("call retrieve failed.");
					return;
				}
				//鍔ㄦ�佺粯鍒舵暟鎹獥鍙�
				drawPictByString(target,svalue);
				//鎻愮ず鎻掑叆鏂拌鎴愬姛
				message("insertrow ok.");
			}
		});

		// 妫�绱㈡寜閽�
		btn_update.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				MyInt2 iret = new MyInt2(0);
				//璋冪敤鍙傛暟鍒ゆ柇妫�鏌�
				if(dwuuid.equals("")) {
					message("dwuuid is empty.");
					return ;
				}
				//璋冪敤鍚庡彴鏈嶅姟锛岃幏鍙栬繑鍥炵粨鏋�
				String svalue = sqlca.update(dwuuid, iret);
				//杩斿洖鍊煎垽鏂�
				if(iret.intvalue !=0 ) {
					message("call update failed.");
					return;
				}
				//鍔ㄦ�佺粯鍒舵暟鎹獥鍙�
				drawPictByString(target,svalue);
				//鎻愮ず鎻掑叆鏂拌鎴愬姛
				message("update ok.");
			}
		});
		
	}

	public static void main(String[] args) {
		init1();
	}

	public void init() {
		init1();
	}

	public static void init1() {
		// Golbal.InitGlobalVariable();
		setupFrame();
	}
	
	//鏄剧ず瀵硅瘽妗�
	public static void message(String strinfo) {
//		JOptionPane.showMessageDialog(null, strinfo,
//				"JWebDW Message", 
//				JOptionPane.INFORMATION_MESSAGE);
	}
	
	
	/**
	 * 鏍规嵁缁欏畾鐨勫瓧绗︿覆鏉ョ粯鍒跺浘褰㈢晫闈�
	 * @param target 瑕佺粯鍒剁殑鍥惧舰瀵硅薄鐩爣
	 * @param retStr 鍚庡彴璋冪敤杩斿洖鐨刯son瀛楃涓诧紝浠ｈ〃鐣岄潰瀵硅薄
	 */
	public static void drawPictByString(JPanel target,String retStr) {
		JSONObject retjson = JSONObject.fromObject(retStr);
		//鍏堝垽鏂繑鍥炲��
		if(! retjson.get("status").toString().equals("200")) {
			
			message("鍚庡彴杩斿洖鏁版嵁閿欒.");
			message(retjson.get("message").toString());
			return;
		}
		//淇濆瓨uuid鐨勬暟鎹��
		if(retjson.get("uuid").toString().length()>0) {
			dwuuid = retjson.get("uuid").toString();
			message(dwuuid);
		}
		//鐩爣瀵硅薄娓呯悊
		target.removeAll();
		target.validate();
		target.repaint();
		
		//鑾峰彇杩斿洖鐨剈i瀵硅薄鍒楄〃锛屽瓨鍌ㄥ湪uiobjList閲岄潰
		net.sf.json.JSONArray json = retjson.getJSONArray("uiobjList");
		System.out.println("json size:" + json.size());
		
		
		for (int i = 0; i < json.size(); i++) {
			JSONObject json1 = (JSONObject) json.get(i);
			CWebDWUIComponent2 ui = new CWebDWUIComponent2();
			//浠巎son鏁版嵁閲岄潰璇诲彇鍒板厓绱犲畾涔夊睘鎬�
			ui.fromJson(json1);
			
			//鍒╃敤鍏冪礌瀹氫箟灞炴�ф潵瀹氫箟鍔ㄦ�乁I瀵硅薄杩涜娓叉煋
			ui.CreateUINode(target);
			
			target.validate();
			target.repaint();
			System.out.println(i);
			System.out.println(ui.left + " " + ui.top + " " + ui.width + " " + ui.height + " " + ui.text);
		}
		System.out.println(targetControls.size());
		
	}

}
