<template>
  <div class="celebrate">
    <div class="description">how to celebrate</div>
    <h2 class="h2">두 사람에게 축하의 마음 전하는 방법</h2>
    <p>
      <Button @click="m=true">신랑 측 계좌번호</Button>
    </p>
    <Modal v-if="m" @close="m = false">
      <div slot="body">
        <p>
          <span>혼주 [부] 오병국</span> <br>
          <span @click="copy('302-0738-2135-11')" style="font-weight: bold">농협 302-0738-2135-11</span> <br><br>
          <span>혼주 [모] 김주남</span> <br>
          <span @click="copy('810-02-019614')" style="font-weight: bold">농협 810-02-019614</span> <br><br>
          <span>신랑 오진우 </span> <br>
          <span @click="copy('110-314-682771')" style="font-weight: bold">신한 110-314-682771</span> <br><br>
        </p>
      </div>
    </Modal>
    <p>
      <Button @click="w=true">신부 측 계좌번호</Button>
    </p>
    <Modal v-if="w" @close="w = false">
      <div slot="body">
        <p>
          <span>혼주 [부] 원종윤</span><br>
          <span @click="copy('046-21-0709-329')" style="font-weight: bold">국민 046-21-0709-329</span> <br><br>
          <span>혼주 [모] 조애란</span> <br>
          <span @click="copy('356-1005-2213-03')" style="font-weight: bold">농협 356-1005-2213-03</span> <br><br>
          <span>신부 원보영</span> <br>
          <span @click="copy('110-472-418067')" style="font-weight: bold">신한 110-472-418067</span> <br><br>
        </p>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from './Modal'

export default {
  name: "Celebrate",
  components: {
    Modal
  },
  data() {
    return {
      m: false,
      w: false
    }
  },
  methods: {
    copy(text) {
      try {
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = text
        t.select();
        
        document.execCommand("copy");
        document.body.removeChild(t);

        this.$notify({
          group: 'foo',
          text: '계좌번호가 복사되었습니다',
          duration: 500,
          ignoreDuplicates: true,
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to copy text: ', err)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.celebrate {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;

  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }

  .h2 {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 24px;
  }

  p {
    line-height: 24px;

    span {

    }
    span {
      font-size: 20px;
    }
  }

  .goose {
    width: 90px;
    margin-top: 67px;
    margin-bottom: 20px;
  }

  .cat {
    width: 85px;
    margin-top: 32px;
    margin-bottom: 16px;
  }
}
</style>
