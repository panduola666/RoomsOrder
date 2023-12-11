<template>
  <div class="container-fluid d-flex align-items-center bg-neutral-bg text-white position-relative">
    <img
      src="../assets/image/Line.png"
      alt="Line"
      class="position-absolute end-0 top-0 mt-8 py-5"
    />

    <img
      src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="loginImg"
      class="w-50 object-fit-cover position-relative z-1 d-none d-lg-block"
      style="max-height: 1078px"
    />
    <div class="row w-lg-50 flex-grow-1 position-relative z-1">
      <div class="col-lg-6 col mx-auto">
        <div class="">
          <p class="mb-2 text-primary fw-bold fs-small fs-lg-0">享樂酒店，誠摯歡迎</p>
          <h1 class="fw-bold fs-lg-1 fs-3 mb-7">立即開始旅程</h1>
          <form class="needs-validation mb-7">
            <div class="mb-3">
              <label for="email" class="form-label">電子信箱</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="hello@exsample.com"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="password"
                aria-describedby="password"
                autocomplete="on"
                placeholder="請輸入密碼"
                required
              />
            </div>
            <div class="mb-7 d-flex justify-content-between">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="remember" />
                <label class="form-check-label" for="remember"> 記住帳號 </label>
              </div>
              <router-link to="">忘記密碼？</router-link>
            </div>
            <input type="submit" class="btn btn-primary w-100 py-3 px-6 "  value="會員登入">
          </form>
          <span>沒有會員嗎？</span>
          <router-link to="/signIn">前往註冊</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
