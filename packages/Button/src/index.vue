<template>
  <button class="fy-button" :class="[`fy-button-${type}`, `fy-button--${size}`,{
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }]" @click="handleClick">
        <i v-if="icon" :class="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
    name: 'fyButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        circle: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>

<style>
.fy-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    /* -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none; */
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.fy-button.is-plain {
    background: #fff;
    color: #606266;
}
.fy-button.is-plain:focus, .fy-button.is-plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
}
.fy-button:focus, .fy-button:hover {
    color: #4083ff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.fy-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
.fy-button.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    /* opacity: 0.8; */
    background-color: #fff;
    border-color: #ebeef5;
}
.fy-button-success.is-disabled,.fy-button-success.is-disabled:hover,.fy-button-success.is-disabled:focus {
    color: #fff;
    cursor: not-allowed;
    background-image: none;
    /* opacity: 0.8; */
    background-color: #a6dba1;
    border-color: #a6dba1;
}
.fy-button-primary.is-disabled,.fy-button-primary.is-disabled:hover,.fy-button-primary.is-disabled:focus {
    color: #fff;
    cursor: not-allowed;
    background-image: none;
    /* opacity: 0.8; */
    background-color: #addbfa;
    border-color: #addbfa;
}
.fy-button-info.is-disabled,.fy-button-info.is-disabled:hover,.fy-button-info.is-disabled:focus {
    color: #fff;
    cursor: not-allowed;
    background-image: none;
    /* opacity: 0.8; */
    background-color: #dee2e2;
    border-color: #dee2e2;
}
.fy-button-warning.is-disabled,.fy-button-warning.is-disabled:hover,.fy-button-warning.is-disabled:focus {
    color: #fff;
    cursor: not-allowed;
    background-image: none;
    /* opacity: 0.8; */
    background-color: #f5decf;
    border-color: #f5decf;
}
.fy-button-danger.is-disabled,.fy-button-danger.is-disabled:hover,.fy-button-danger.is-disabled:focus {
    color: #fff;
    cursor: not-allowed;
    background-image: none;
    /* opacity: 0.8; */
    background-color: #fdd5d0;
    border-color: #fdd5d0;
}
.fy-button-primary {
    background: #4083ff;
    border-color: #4083ff;
    color: #fff;
}
.fy-button-primary:focus, .fy-button-primary:hover {
    color: #fff;
    border-color: #629deb;
    background-color: #629deb;
}
.fy-button-primary.is-plain {
    background: rgb(232, 240, 248);
    color: #4083ff;
}
.fy-button-primary.is-plain:focus, .fy-button-primary.is-plain:hover {
    background: #4083ff;
    border-color: #4083ff;
    color: #fff;
}
.fy-button-success {
    background: #21d809;
    border-color: #21d809;
    color: #fff;
}
.fy-button-success:focus, .fy-button-success:hover {
    color: #fff;
    border-color: #79ec8c;
    background-color: #79ec8c;
}
.fy-button-success.is-plain {
    background: #f0f9eb;
    border-color: #21d809;
    color: #21d809;
}
.fy-button-success.is-plain:focus, .fy-button-success.is-plain:hover {
    color: #fff;
    border-color: #21d809;
    background-color: #21d809;
}
.fy-button-info.is-plain {
    background: #f1f1f0;
    border-color: #626662;
    color: #626662;
}
.fy-button-info.is-plain:focus, .fy-button-info.is-plain:hover {
    color: #fff;
    border-color: #626662;
    background-color: #626662;
}
.fy-button-info {
    background: #626662;
    border-color: #626662;
    color: #fff;
}
.fy-button-info:focus, .fy-button-info:hover {
    color: #fff;
    border-color: #929692;
    background-color: #929692;
}
.fy-button-warning {
    background: #f1a921;
    border-color: #f1a921;
    color: #fff;
}
.fy-button-warning:focus, .fy-button-warning:hover {
    color: #fff;
    border-color: #f1c168;
    background-color: #f1c168;
}
.fy-button-warning.is-plain {
    background: #fff8ea;
    border-color: #f1a921;
    color: #f1a921;
}
.fy-button-warning.is-plain:focus, .fy-button-warning.is-plain:hover {
    color: #fff;
    border-color: #f1a921;
    background-color: #f1a921;
}
.fy-button-danger {
    background: #f13d30;
    border-color: #f13d30;
    color: #fff;
}
.fy-button-danger:focus, .fy-button-danger:hover {
    color: #fff;
    border-color: #fc5b4f;
    background-color: #fc5b4f;
}
.fy-button-danger.is-plain {
    background: #ffcece;
    border-color: #f13d30;
    color: #f13d30;
}
.fy-button-danger.is-plain:focus, .fy-button-danger.is-plain:hover {
    color: #fff;
    border-color: #f13d30;
    background-color: #f13d30;
}
.fy-button.fy-button-text,.fy-button.fy-button-text:hover,.fy-button.fy-button-text:focus {
    border: none;
    background: transparent;
}
.fy-button--middle {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.fy-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
.fy-button--mini {
    padding: 7px 12px;
    font-size: 12px;
    border-radius: 3px;
}
</style>