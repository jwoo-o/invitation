<template>
  <div class="live">
    <p class = "desc">
      위 애니메이션은 꼭 소리를 켜고 봐주세요!
    </p>
    <img src="~@/assets/images/hands.png" class="hands" />
    <div>
      <p class = "header">
        "우리 결혼 합니다!"<br />
        <br />
      </p>
      <p>
        각자의 삶을 열심히 살아온 저희가,<br />
        이제는 손을 잡고 함께 나란히 걸어가려 합니다.<br />
        사랑한다는 말이 어울리는 사람과 함께<br />
        오래도록 있는 힘을 다해 행복해지겠습니다.<br />
        <br />
      </p>
      <p class= "big">
        오병국 / 김주남<span class="small">의 장남</span>진우<br />
        원종윤 / 조애란<span class="small">의 장녀</span>보영<br />
      </p>
      <p class = "header">
        <br />
        23년 5월 13일 토요일<br />
        오후 14시 30분<br />
        광주 위더스 웨딩홀 3F/펠리체홀
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Divider",
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    font-size: 17px;
    &.desc {
      color: #295238;
      font-size: 15px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
      font-size: 20px;
    }
    &.big {
      font-size: 20px;
    }
    &.small {

    }
    &:last-child {
      margin-bottom: 40px;
    }
  }
  span {
    &.small {
      font-size: 15px;
    }
  }
}
</style>
