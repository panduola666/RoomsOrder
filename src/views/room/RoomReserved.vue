<template>
  <main class="bg-neutral-bg text-white">
    <div class="container">
      <div>確認訂房資訊</div>

      <div class="container">
        <div class="row">
          <div class="col-7">
            <div>訂房資訊</div>

            選擇房型

            <div class="py-1 d-flex justify-content-between">
              <span>訂房人資訊 </span>
              <span>套用會員資料</span>
            </div>
            <form>
              <label for="name">姓名</label>
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入姓名"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />

              <label for="name">手機號碼</label>
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入手機號碼"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />

              <label for="name">電子信箱</label>
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入電子信箱"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />

              <label for="name">地址</label>
              <div class="d-flex justify-content-between">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="請輸入電子信箱"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </form>
            <br />
            <h4>房間資訊</h4>
          </div>
          <div class="p-5 col-5 rounded bg-white text-black">
            <div class="">
              <img
                class="rounded img-fluid"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/room2-1.png?raw=true"
              />
            </div>
            <div class="py-3">
              <h3 class="fw-bold">價格詳情</h3>
            </div>
            <div class="py-1 d-flex justify-content-between">
              <span> NT$ 10,000 X 2 晚 </span>
              <span> NT$ 20,000 </span>
            </div>

            <div class="py-2 d-flex justify-content-between">
              <span> 住宿折扣 </span>
              <span> -NT$ 1,000 </span>
            </div>
            <div class="py-2 fw-bold d-flex justify-content-between">
              <span> 總價 </span>
              <span> NT$ 19,000 </span>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary w-100">確認訂房</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
