<template>
  <div class="map">
    <div class="description">
      location
    </div>
    <div></div>
    <div class="map-container" ref="gal">
      <vue-daum-map
          :appKey="appKey"
          :center.sync="center"
          :level.sync="level"
          :mapTypeId="mapTypeId"
          :libraries="libraries"
          @load="onLoad"
          style="height:240px;"/>
    </div>
    <div class="cover">
      <div class="navi-apps">
        <a v-bind:href="tmapUrl">
          <div class="ico_comm ico_tmap"><img src="~@/assets/images/icons/tmap.png"/></div>
          <div class="link">T맵</div>
        </a>
      </div>
      <div class="navi-apps">
        <a v-bind:href="kakaoTaxiUrl">
          <div class="ico_comm ico_taxi"><img src="~@/assets/images/icons/kakaot.png"/></div>
          <div class="link">카카오택시</div>
        </a>
      </div>
      <div class="navi-apps">
        <a v-bind:href="navermapUrl">
          <div class="ico_comm ico_navermap"><img src="~@/assets/images/icons/navermap.png"/></div>
          <div class="link">네이버맵</div>
        </a>
      </div>
      <div class="navi-apps">
        <a v-bind:href="kakaomapUrl">
          <div class="ico_comm ico_kakaomap"><img src="~@/assets/images/icons/kakaomap.png"/></div>
          <div class="link">카카오맵</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import VueDaumMap from 'vue-daum-map'

export default {
  name: "Map",
  components: {VueDaumMap},
  data() {
    return {
      scrollX: 0,
      width: 320,
      appKey: 'f05cbac39bc1864c23c53fabc055431c', // 테스트용 appkey
      center: {lat: 35.16717, lng: 126.88356}, // 지도의 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도),
      mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
      libraries: ["drawing"], // 추가로 불러올 라이브러리
      map: null, // 지도 객체. 지도가 로드되면 할당됨.
      daum: null, // 다음 API 객체. 지도가 로드되면 할당됨.
      //////////////
      tmapUrl: "",
      kakaoTaxiUrl: "",
      navermapUrl: "",
      kakaomapUrl: ""

    };
  },
  mounted() {
    this.makeUrls()
  },
  methods: {
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad(map, daum) {
      this.map = map;
      this.daum = daum;

      // 지도를 클릭한 위치에 표출할 마커입니다
      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter()
      });
      // 지도에 마커를 표시합니다
      marker.setMap(map);
    },
    makeUrls() {
      // 장소데이터의 이름정보 불러온 뒤
      const locationName = "광주 위더스"
      this.tmapUrl = "tmap://search?name=" + locationName
      this.kakaoTaxiUrl = "https://t.kakao.com/launch?type=taxi&amp;dest_lat=35.16717&amp;dest_lng=126.88356&amp;ref=localweb"
      this.navermapUrl = "nmap://search?query=" + locationName + "&appname=jwoo-o.github.io/invitation"
      this.kakaomapUrl = "kakaomap://search?q=" + locationName
    }
  }
};
</script>

<style lang="scss" scoped>

.map {
  margin-top: 18px;
  margin-bottom: 18px;
}

.description {
  font-size: 12px;
  letter-spacing: 6px;
  margin-bottom: 30px;
  text-align: center;
}

.navi-apps {
  align-content: center;
  position: relative;

  .ico_comm img {
    vertical-align: middle;
    width: 40px
  }

  div {
    text-align: center;
    padding-top: 10px;
  }

  a{
    text-decoration: none;
  }
}

.cover {
  display: flex;
  justify-content: space-between;
  margin: 22px 10% 22px 10%;
}

.link {
  color: #295238;
}

</style>
