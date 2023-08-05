// import { Spin } from "antd";

export default function Loading() {
  return (
    // <Spin tip="Loading" size="large">
    //   <div className="content d-flex align-items-center justify-content-center" />
    // </Spin>
    // <div class="loader">
    //   <span></span>
    // </div>

<div id="page" className="d-flex align-items-center justify-content-center"> 
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3">loading</div>
        </div>
</div>
  );
}
