import * as React from 'react';
import WebView from 'react-native-webview';
import { View, Text, Alert } from 'react-native';


const url = 'https://smtmalltest.smgtech.net/';
// const url = '//m.mtime.cn/#!/onlineticket/615072603/';
// const url = 'https://1111.tmall.com/';
// const url = 'https://www.2345.com/?kmupiao';

const JsCode = (window, document) => {
  // 在这里就可获取或操用页面中的DOM啦！
  let submitBtn;
  function waitForBtnRender() {
    submitBtn = document.getElementById('submitBtn');
    if (!submitBtn) {
      // 提交按钮渲染了吗？没有的话我过两秒再来问，轮询调用
      setTimeout(waitForBtnRender, 2000);
    } else {
      submitBtn.onclick = () => {
        const seats = [];
        document.querySelectorAll('.seat_selected').forEach((node) => {
          seats.push(node.getAttribute('name'));
        });
        window.ReactNativeWebView.postMessage(seats.join(', '));
      };
    }
  };
  // 暗号：技术为生活服务！
  waitForBtnRender();
};

const Find = () => {

  const style = `display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh; color: purple; font-size: 4rem;`;
  return (

    <WebView
      originWhitelist={['*']}

      // source={{ html: `<h1 style="${style}">我是一个静态的HTML代码</h1>` }}
      source={{ url }}

      // injectedJavaScript 注入js脚本(转为字符串)
      injectedJavaScript={`(${JsCode.toString()})(window, document)`}

      onMessage={(e) => {
        Alert.alert('您选中的座位是：' + e.nativeEvent.data);
      }}
    />
  );
}

export default Find;