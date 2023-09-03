chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "request") {
    const { url, method } = request;
    const fetchDefineParamter = {
      method: method || "GET",
      headers: {
        // "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(request.data || {}),
    };

    if (["GET", "HEAD"].includes(method)) {
      delete fetchDefineParamter.body;
    }

    // 在这里发起网络请求
    fetch(url, fetchDefineParamter)
      .then((response) => response.text())
      .then((data) => {
        // 将响应数据发送给内容脚本或弹出式窗口
        sendResponse({ data });
      })
      .catch((error) => {
        sendResponse({ error: error.message, request });
      });

    return true; // 返回 true 表示异步操作，保持 sendResponse 可用
  }
});
