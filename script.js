function sendFileToUser(filename, text){
    var element = document.createElement('a'); 
    element.setAttribute('href', 
      'data:text/javascript;charset=utf-8,' + encodeURIComponent(text)
    ); // 將檔案內容設定為下載內容
    element.setAttribute('download', filename); // 設定下載後的檔案名稱
  
    element.style.display = 'none'; // 隱藏這個超連結 (因為只是暫時的 不需要讓使用者看到)
    document.body.appendChild(element); // 新增到頁面上
  
    element.click(); // 模擬使用者點擊下載
  
    document.body.removeChild(element); // 刪除元素
  }
  
  
function send(){

      let commandName  = document.querySelector("#commandName").value
      let description  =  document.querySelector("#description").value
      let executeReply = document.querySelector("#reply").value    
  
      let filetext = `
  function commandFunction(msgObj, args){
      // 這裡是你要執行的功能
      msgObj.channel.send("執行結果： ${executeReply}");
  }
  const description = "${description}";
  module.exports = {
      commandFunction:commandFunction,
      description:description,
  };
  `
      sendFileToUser(`${commandName}.js`, filetext);
}