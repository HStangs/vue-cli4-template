<template>
  <div class="t-input">
    <input :value="val" @input="onInput" @change="onChange" @focus="onFocus" @blur="onBlue" @keydown="onKeydown" />
  </div>
</template>

<script>
export default {
  name: "tInput",
  props: {
    value: {
      type: [Number, String],
      default: ""
    }
  },
  data: function() {
    return {
      val: this.value
    };
  },
  watch: {
    value(newVal) {
      this.val = newVal;
    }
  },
  methods: {
    onInput(e) {
      this.$emit("onInput", {
        value: e.target.value,
        oldValue: this.val
      });
    },
    onChange(e) {
      this.$emit("onChange", {
        value: e.target.value,
        oldValue: this.val
      });
    },
    onFocus() {
      this.$emit("onFocus");
    },
    onBlue() {
      this.$emit("onBlue");
    },
    onKeydown(e) {
      this.$emit("onKeydown", e);
    }
  }
};
</script>

<style></style>>
