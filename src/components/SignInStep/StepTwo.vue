<template>
  <form class="needs-validation mb-3">
    <div class="mb-3">
      <label for="name" class="form-label">姓名</label>
      <input
        type="text"
        class="form-control p-3"
        id="name"
        aria-describedby="userName"
        placeholder="請輸入姓名"
        required
      />
    </div>
    <div class="mb-3">
      <label for="phoneNum" class="form-label">手機號碼</label>
      <input
        type="number"
        class="form-control p-3"
        id="phoneNum"
        aria-describedby="password"
        autocomplete="on"
        placeholder="請輸入手機號碼"
        required
      />
    </div>
    <div class="mb-3">
      <label for="year" class="form-label">生日</label>
      <div class="d-flex gap-2">
        <select id="year" class="form-select p-3">
          <option selected>1990 年</option>
          <option>1991 年</option>
        </select>
        <select id="month" class="form-select p-3">
          <option selected>8 月</option>
          <option>9 月</option>
        </select>
        <select id="day" class="form-select p-3">
          <option selected>15 日</option>
          <option>16 日</option>
        </select>
      </div>
    </div>
    <div class="mb-3 d-flex flex-column gap-3">
      <label class="form-label">地址</label>
      <div class="d-flex gap-2">
        <select id="address" class="form-select p-3">
          <option selected>高雄市</option>
        </select>
        <select class="form-select p-3">
          <option selected>新興區</option>
        </select>
      </div>
      <input
        type="text"
        class="form-control p-3"
        id="address"
        aria-describedby="address"
        autocomplete="on"
        placeholder="請輸入詳細地址"
        required
      />
    </div>
    <div class="form-check mb-7">
      <input class="form-check-input" type="checkbox" value="" id="finish" />
      <label class="form-check-label" for="finish">我已閱讀並同意本網站個資使用規範 </label>
    </div>
    <input type="submit" class="btn btn-primary w-100 py-3 px-6" value="立即註冊" />
  </form>
</template>
