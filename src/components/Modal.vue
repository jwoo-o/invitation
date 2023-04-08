<template>
  <transition name="modal">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="button" @click="$emit('close')" >
              확인
            </button>
            <br><br>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {}
</script>


<style lang="scss" scoped>
.modal-wrapper {
  margin-top: 10px;
}
.button {
  padding: 0 28px;
  height: 30px;
  border-radius: 2px;
  margin: 0 2px;
  line-height: 20px;
  color: #ffffff;
  background-color: #479264;
}
</style>