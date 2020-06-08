import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import { Colors } from "./resources/styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import renderRoutes from "./routes";
import { configure } from "mobx";
import { observer, Provider } from "mobx-react";
import stores from "./stores";
import Menu from "@/components/Menu";

configure({ enforceActions: true });
@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <div style={{ height: "100%" }}>
            <Menu />
            {renderRoutes()}
          </div>
        </Router>
      </Provider>
    );
  }
}

injectGlobal`
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

body {
  font-family: 'IBM Plex Sans', sans-serif;
  height: 100%;
  color: ${Colors.dark};
}

html {
  height: 100%
}

#root {
  height: 100%
}
`;

export default App;