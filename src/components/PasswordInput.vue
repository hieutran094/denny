<template>
  <div
    class="wrap-input100 validate-input has-feedback"
    data-validate="Password is required"
  >
    <input
      class="input100"
      :type="isShow ? 'text' : 'password'"
      name="pass"
      placeholder="Enter your password"
      autocomplete="false"
    />
    <i
      class="bi form-control-feedback"
      :class="[{ 'bi-eye-slash-fill': !isShow }, { 'bi-eye-fill': isShow }]"
      style="font-size: 22px"
      @click="toggle"
    ></i>
  </div>
</template>
<script>
export default {
  name: "PassordComponent",
  data() {
    return {
      isShow: false,
    };
  },
  components: {},
  computed: {},
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.has-feedback {
  padding-right: 25px;
}
.form-control-feedback {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  z-index: 2;
  display: block;
  text-align: center;
  cursor: pointer;
}
</style>