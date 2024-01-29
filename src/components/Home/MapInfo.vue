<template>
  <div class="bg-black">
    <div class="container py-lg-10">
      <div class="d-flex align-items-center fs-1 text-primary fw-bold mb-7 mb-lg-9">
        <div class="me-7 mb-4">
          <p class="mb-0">交通</p>
          <p class="mb-0">方式</p>
        </div>
        <span class="line"></span>
      </div>
      <div>
        <p class="text-white">台灣高雄市新興區六角路123號</p>
        <img src="@/assets/image/desktop/Map.png" alt="">
      </div>
      <div class="row text-white mt-5 mt-lg-7">
        <div class="col-sm-12 col-lg-4">
          <img class="transport-icon" src="@/assets/icons/car.svg" alt="car">
          <h4>自行開車</h4>
          <p>如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
        </div>
        <div class="col-sm-12 col-lg-4">
          <img class="transport-icon" src="@/assets/icons/train.svg" alt="train">
          <h4>高鐵/火車</h4>
          <p>如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
        </div>
        <div class="col-sm-12 col-lg-4">
          <img class="transport-icon" src="@/assets/icons/luxuryCar.svg" alt="luxuryCar">
          <h4>禮賓車服務</h4>
          <p>承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: inline-block;
  width: 161px;
  height: 2px;
  background: linear-gradient(to right, #BE9C7C , $white);
  vertical-align: middle;
}
.transport-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  margin-top: 0;
}
</style>