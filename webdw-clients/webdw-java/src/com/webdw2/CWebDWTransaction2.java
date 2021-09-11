package com.webdw2;

//Rem -------------------------------------------------
//Rem WebDW������������
//Rem Ŀ���ǶԿͻ��˵ķ����ṩһ���ں�̨������֧������
//Rem �����Ȳ���һ�����ݿ������
//Rem @CopyRight Mr.Liu Junsong 2008-2009
//Rem @��Ȩ���� ������ 2008-2009
//Rem E_mail : liujunsong@yahoo.com.cn
//Rem -------------------------------------------------
import java.io.*;
import java.net.*;

public class CWebDWTransaction2 extends Golbal2 {
	public String _ReadMe = "JWebDW,Transaction.";

	// 错误字符串
	public String errString = ""; 

	// 结果字符串
	public String resultString = ""; 

/**
 * 调用后台的服务接口，完成数据窗口的检索功能	
 * @param dwname 数据窗口名称
 * @param iret 回写调用返回值 0 正常 -1 调用错误
 * @return 后台调用返回的json格式字符串
 */
	public String retrieve(String dwname, MyInt2 iret) {
		String surl = "";// As String

		errString = "";
		//构建后台访问字符串，采用GET协议进行调用
		surl = Golbal2.G_ServerURL + "/retrieve?token=0&dwname=" + dwname +"&args="+ "&rand=" + Rnd(10);
		System.out.println(surl);
		try {
			URL url = new URL(surl);
			URLConnection conn = url.openConnection();
			// conn.setReadTimeout(30000);
			System.out.println("getting inputStream finished");
			// conn.connect();
			HttpURLConnection hconn = (HttpURLConnection) conn;
			hconn.setDoInput(true);
			// hconn.setReadTimeout(30000);
			InputStream ins = hconn.getInputStream();
			BufferedReader in = new BufferedReader(new InputStreamReader(ins));
			String s = null;
			String svalue = "";
			int i = 0, j = 0;
			while ((s = in.readLine()) != null) {
				if (!s.equals("OK")) {
					if (svalue.equals("")) {
						svalue = s;
					} else {
						svalue = svalue + "\r\n" + s;
					}
				} else {
					svalue = svalue + "\r\n" + s;
				}
			}
			in.close();
			
			//判断返回字符串中是否包含Exception关键词，以确定调用是否发生异常
			if (svalue.indexOf("Exception") > 0) {
				iret.intvalue = -1;
				errString = svalue;
				svalue = "";
			} else {
				iret.intvalue = 0;
			}
			return svalue;
		} catch (Exception e) {
			e.printStackTrace();
			iret.intvalue = -1;
			errString = e.toString();
			return "";
		}
	}

	/**
	 * 调用后台的服务接口，完成设置数据窗口的功能	
	 * @param dwname 数据窗口名称
	 * @param iret 回写调用返回值 0 正常 -1 调用错误
	 * @return 后台调用返回的json格式字符串
	 */
		public String setdataobject(String dwname, MyInt2 iret) {
			String surl = "";// As String

			errString = "";
			//构建后台访问字符串，采用GET协议进行调用
			surl = Golbal2.G_ServerURL + "/setdataobject?token=0&dwname=" + dwname +"&args="+ "&rand=" + Rnd(10);
			System.out.println(surl);
			try {
				URL url = new URL(surl);
				URLConnection conn = url.openConnection();
				// conn.setReadTimeout(30000);
				System.out.println("getting inputStream finished");
				// conn.connect();
				HttpURLConnection hconn = (HttpURLConnection) conn;
				hconn.setDoInput(true);
				// hconn.setReadTimeout(30000);
				InputStream ins = hconn.getInputStream();
				BufferedReader in = new BufferedReader(new InputStreamReader(ins));
				String s = null;
				String svalue = "";
				int i = 0, j = 0;
				while ((s = in.readLine()) != null) {
					if (!s.equals("OK")) {
						if (svalue.equals("")) {
							svalue = s;
						} else {
							svalue = svalue + "\r\n" + s;
						}
					} else {
						svalue = svalue + "\r\n" + s;
					}
				}
				in.close();
				
				//判断返回字符串中是否包含Exception关键词，以确定调用是否发生异常
				if (svalue.indexOf("Exception") > 0) {
					iret.intvalue = -1;
					errString = svalue;
					svalue = "";
				} else {
					iret.intvalue = 0;
				}
				return svalue;
			} catch (Exception e) {
				e.printStackTrace();
				iret.intvalue = -1;
				errString = e.toString();
				return "";
			}
		}	

		/**
		 * 调用后台的服务接口，完成设置数据窗口的功能	
		 * @param dwname 数据窗口名称
		 * @param iret 回写调用返回值 0 正常 -1 调用错误
		 * @return 后台调用返回的json格式字符串
		 */
			public String insertrow(String dwuuid, MyInt2 iret) {
				String surl = "";// As String

				errString = "";
				//构建后台访问字符串，采用GET协议进行调用
				surl = Golbal2.G_ServerURL + "/insertrow?token=0&uuid=" + dwuuid + "&rand=" + Rnd(10);
				System.out.println(surl);
				try {
					URL url = new URL(surl);
					URLConnection conn = url.openConnection();
					// conn.setReadTimeout(30000);
					System.out.println("getting inputStream finished");
					// conn.connect();
					HttpURLConnection hconn = (HttpURLConnection) conn;
					hconn.setDoInput(true);
					// hconn.setReadTimeout(30000);
					InputStream ins = hconn.getInputStream();
					BufferedReader in = new BufferedReader(new InputStreamReader(ins));
					String s = null;
					String svalue = "";
					int i = 0, j = 0;
					while ((s = in.readLine()) != null) {
						if (!s.equals("OK")) {
							if (svalue.equals("")) {
								svalue = s;
							} else {
								svalue = svalue + "\r\n" + s;
							}
						} else {
							svalue = svalue + "\r\n" + s;
						}
					}
					in.close();
					
					//判断返回字符串中是否包含Exception关键词，以确定调用是否发生异常
					if (svalue.indexOf("Exception") > 0) {
						iret.intvalue = -1;
						errString = svalue;
						svalue = "";
					} else {
						iret.intvalue = 0;
					}
					return svalue;
				} catch (Exception e) {
					e.printStackTrace();
					iret.intvalue = -1;
					errString = e.toString();
					return "";
				}
			}	

			/**
			 * 调用后台的服务接口，完成设置数据窗口的功能	
			 * @param dwname 数据窗口名称
			 * @param iret 回写调用返回值 0 正常 -1 调用错误
			 * @return 后台调用返回的json格式字符串
			 */
				public String update(String dwuuid, MyInt2 iret) {
					String surl = "";// As String

					errString = "";
					//构建后台访问字符串，采用GET协议进行调用
					surl = Golbal2.G_ServerURL + "/update?token=0&uuid=" + dwuuid + "&rand=" + Rnd(10);
					System.out.println(surl);
					try {
						URL url = new URL(surl);
						URLConnection conn = url.openConnection();
						// conn.setReadTimeout(30000);
						System.out.println("getting inputStream finished");
						// conn.connect();
						HttpURLConnection hconn = (HttpURLConnection) conn;
						hconn.setDoInput(true);
						// hconn.setReadTimeout(30000);
						InputStream ins = hconn.getInputStream();
						BufferedReader in = new BufferedReader(new InputStreamReader(ins));
						String s = null;
						String svalue = "";
						int i = 0, j = 0;
						while ((s = in.readLine()) != null) {
							if (!s.equals("OK")) {
								if (svalue.equals("")) {
									svalue = s;
								} else {
									svalue = svalue + "\r\n" + s;
								}
							} else {
								svalue = svalue + "\r\n" + s;
							}
						}
						in.close();
						
						//判断返回字符串中是否包含Exception关键词，以确定调用是否发生异常
						if (svalue.indexOf("Exception") > 0) {
							iret.intvalue = -1;
							errString = svalue;
							svalue = "";
						} else {
							iret.intvalue = 0;
						}
						return svalue;
					} catch (Exception e) {
						e.printStackTrace();
						iret.intvalue = -1;
						errString = e.toString();
						return "";
					}
				}	
			
}
