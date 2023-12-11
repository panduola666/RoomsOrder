<template>
  <form class="needs-validation mb-3">
    <div class="mb-3">
      <label for="email" class="form-label">電子信箱</label>
      <input
        type="email"
        class="form-control p-3"
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
        class="form-control p-3"
        id="password"
        aria-describedby="password"
        autocomplete="on"
        placeholder="請輸入密碼"
        required
      />
    </div>
    <div class="mb-7">
      <label for="checkPassword" class="form-label">確認密碼</label>
      <input
        type="password"
        class="form-control p-3"
        id="checkPassword"
        aria-describedby="checkPassword"
        autocomplete="on"
        placeholder="請再輸入一次密碼"
        required
      />
    </div>
    <input type="submit" class="btn btn-primary w-100 py-3 px-6" value="會員登入" />
  </form>
</template>
