package hello.dbinterface.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;

import hello.dbinterface.service.DbInterfaceDBSelectOper;
import hello.dbinterface.service.QuerySQLService;

@Controller
@RequestMapping(path = "/public")
public class CommonQueryController {

	@Autowired
	private DbInterfaceDBSelectOper dbSelectOper;

	@Autowired
	private QuerySQLService querysqlService;
	private static final Logger logger = LoggerFactory.getLogger(CommonQueryController.class);

	@ResponseBody
	@RequestMapping(value = "/test", method = RequestMethod.GET, produces = "text/plain;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public String test() {
		return "TEST-OK";
	}
	
	@ResponseBody
	@RequestMapping(value = "/getdata", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	//@CrossOrigin(origins = "*", maxAge = 3600)
	public JSONArray getData(@RequestBody JSONObject jsonParam) {
		logger.info("enter getData");
		logger.info(jsonParam.toString());
		logger.info(jsonParam.getString("token"));
		JSONArray ret;
		try {
			//鑾峰彇Qid锛屽嵆鏌ヨID缂栧彿
			int qid = jsonParam.getIntValue("qid");
			//鑾峰彇Qargs锛屼互json鏍煎紡鎻忚堪鏌ヨ鍙傛暟锛岀粺涓�浠ュ瓧绗︿覆鏍煎紡鎻忚堪
			JSONObject qargs = jsonParam.getJSONObject("qargs");
			//sqlconfig浠ｈ〃瑕佷粠閭ｅ紶SQL閰嶇疆琛ㄦ潵鑾峰彇SQL妯℃澘
			String sqlconfig = jsonParam.getString("sqlconfig");
			//sqlconfig鏄寚鍚慡QL閰嶇疆琛ㄧ殑锛岀郴缁熸敮鎸佸寮燬QL閰嶇疆琛ㄥ苟瀛�
			if(sqlconfig == null) {
				sqlconfig ="";
			}
			//鑾峰彇瑕佹墽琛岀殑SQL璇彞
			//璋冪敤鍙傛暟涓猴細Qid,鏌ヨ鍙傛暟锛屾煡璇㈢敤鏁版嵁琛�
			String strsql = querysqlService.getSQLString(qid, qargs,sqlconfig);
			
			//鎵цSQL璇彞锛岀洰鍓嶄粎鏀寔鏌ヨ璇彞,杩斿洖鍊间负涓�涓狫SONArray
			ret = dbSelectOper.executeSelect(strsql);
			return ret;
		} catch (Exception e) {
			//TODO:鍙戠敓寮傚父鏃惰褰曞紓甯告棩蹇楀埌鏁版嵁搴撳幓澶囨煡
			
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.error("Exception:{}:{}, Error:{}", e.getClass().getName(), e.getLocalizedMessage(), e.getStackTrace()[0].toString(), e);
			return new JSONArray();
		}
	}
}
