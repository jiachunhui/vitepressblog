# 微信开发相关问题

之后有时间了把代码整理一下。

## 验证微信签名
代码是基于 net 4.5 

:::info 需要注意的几个点，容易验证失败
1. 返回结果注意是不是双引号包着（默认webapi 返回结果有双引号，这样验证失败）\
2. 回复信息不用加密码（原先以为也要加密）
::: 

::: code-group
```c# [验证微信签名CheckSignature]
/// <summary>
	/// 验证微信签名
	/// </summary>
	/// * 将token、timestamp、nonce三个参数进行字典序排序
	/// * 将三个参数字符串拼接成一个字符串进行sha1加密
	/// * 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信。
	/// <returns></returns>
	private bool CheckSignature(string signature,string timestamp,string nonce,string token)
	{
		string[] value = new string[3] { token, timestamp, nonce }.OrderBy((string z) => z).ToArray();
		string s = string.Join("", value);
		byte[] array = SHA1.Create().ComputeHash(Encoding.UTF8.GetBytes(s));
		StringBuilder stringBuilder = new StringBuilder();
		byte[] array2 = array;
		foreach (byte b in array2)
		{
			stringBuilder.AppendFormat("{0:x2}", b);
		}
		
		return signature== stringBuilder.ToString();
	}
```
```c# [webapi ]
 public HttpResponseMessage Get([FromUri]WxVerifyRequest request)
{	
		var token = "ed035348482ebe17d1160cc9bbc21909";
		var check = CheckSignature(request.Signature, request.Timestamp, request.Nonce, token);
		if (check==true)
		{
			HttpResponseMessage responseMessage = new HttpResponseMessage { Content = new StringContent(request.Echostr, Encoding.GetEncoding("UTF-8"), "text/plain") };
			return responseMessage;
		}
		
	}
```
:::
