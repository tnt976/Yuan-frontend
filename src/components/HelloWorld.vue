
<template>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="150px"
    size="default" @submit.prevent>
    <div class="static-content-item">
      <div>单列表单</div>
    </div>
    <div class="static-content-item">
      <el-divider direction="horizontal"></el-divider>
    </div>
    <el-form-item label="发件人姓名" prop="input12931" class="required label-right-align">
      <el-input v-model="formData.input12931" type="text" clearable></el-input>
    </el-form-item>
    <el-form-item label="是否保密" prop="switch96070" class="label-right-align">
      <el-switch v-model="formData.switch96070"></el-switch>
    </el-form-item>
    <el-form-item label="发件人号码" prop="input23031" class="required label-right-align">
      <el-input v-model="formData.input23031" type="text" clearable></el-input>
    </el-form-item>
    <el-form-item label="发件人地址" prop="textarea21654" class="required label-right-align">
      <el-input type="textarea" v-model="formData.textarea21654" rows="3"></el-input>
    </el-form-item>
    <div class="static-content-item">
      <el-divider direction="horizontal"></el-divider>
    </div>
    <el-form-item label="收件人姓名" prop="input113152" class="required label-right-align">
      <el-input v-model="formData.input113152" type="text" clearable></el-input>
    </el-form-item>
    <el-form-item label="接收时间段" prop="checkbox63174" class="required label-right-align">
      <el-checkbox-group v-model="formData.checkbox63174">
        <el-checkbox v-for="(item, index) in checkbox63174Options" :key="index" :label="item.value"
          :disabled="item.disabled" style="{display: inline}">{{item.label}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="收件人号码" prop="input40240" class="required label-right-align">
      <el-input v-model="formData.input40240" type="text" clearable></el-input>
    </el-form-item>
    <el-form-item label="收件人地址" prop="input78584" class="required label-right-align">
      <el-input v-model="formData.input78584" type="text" clearable></el-input>
    </el-form-item>
    <div class="static-content-item">
      <el-divider direction="horizontal"></el-divider>
    </div>
    <el-form-item label="送货时间" prop="timerange47503" class="required label-right-align">
      <el-time-picker is-range v-model="formData.timerange47503" class="full-width-input" format="HH:mm:ss"
        value-format="HH:mm:ss" clearable></el-time-picker>
    </el-form-item>
    <el-form-item label="价格保护" prop="slider54714" class="label-right-align">
      <el-slider v-model="formData.slider54714" :step="10"></el-slider>
    </el-form-item>
    <el-form-item label="其他信息" prop="textarea64794" class="label-right-align">
      <el-input type="textarea" v-model="formData.textarea64794" rows="3"></el-input>
    </el-form-item>
  </el-form>
  
</template>

<script >
  import {
    defineComponent,
    toRefs,
    reactive,
    getCurrentInstance
  }
  from 'vue'
  export default defineComponent({
    components: {},
    props: {},
    setup() {
      const state = reactive({
        formData: {
          input12931: "",
          switch96070: true,
          input23031: "",
          textarea21654: "",
          input113152: "",
          checkbox63174: [],
          input40240: "",
          input78584: "",
          timerange47503: null,
          slider54714: null,
          textarea64794: "",
        },
        rules: {
          input12931: [{
            required: true,
            message: '字段值不可为空',
          }],
          input23031: [{
            required: true,
            message: '字段值不可为空',
          }],
          textarea21654: [{
            required: true,
            message: '字段值不可为空',
          }],
          input113152: [{
            required: true,
            message: '字段值不可为空',
          }],
          checkbox63174: [{
            required: true,
            message: '字段值不可为空',
          }],
          input40240: [{
            required: true,
            message: '字段值不可为空',
          }],
          input78584: [{
            required: true,
            message: '字段值不可为空',
          }],
          timerange47503: [{
            required: true,
            message: '字段值不可为空',
          }],
        },
        checkbox63174Options: [{
          "label": "上午9:00 - 11:30",
          "value": 1
        }, {
          "label": "下午12:30 - 18:00",
          "value": 2
        }, {
          "label": "晚上18:00 - 21:00",
          "value": 3
        }],
      })
      const instance = getCurrentInstance()
      const submitForm = () => {
        instance.proxy.$refs['vForm'].validate(valid => {
          if (!valid) return
          //TODO: 提交表单
        })
      }
      const resetForm = () => {
        instance.proxy.$refs['vForm'].resetFields()
      }
      return {
        ...toRefs(state),
        submitForm,
        resetForm
      }
    }
  })
  
</script>

<style lang="scss">
  .el-input-number.full-width-input,
  .el-cascader.full-width-input {
    width: 100% !important;
  }
  
  .el-form-item--medium {
    .el-radio {
      line-height: 36px !important;
    }
    
    .el-rate {
      margin-top: 8px;
    }
  }
  
  .el-form-item--small {
    .el-radio {
      line-height: 32px !important;
    }
    
    .el-rate {
      margin-top: 6px;
    }
  }
  
  .el-form-item--mini {
    .el-radio {
      line-height: 28px !important;
    }
    
    .el-rate {
      margin-top: 4px;
    }
  }
  
  .clear-fix:before,
  .clear-fix:after {
    display: table;
    content: "";
  }
  
  .clear-fix:after {
    clear: both;
  }
  
  .float-right {
    float: right;
  }
  
</style>

<style lang="scss" scoped>
  div.table-container {
    table.table-layout {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;

      td.table-cell {
        display: table-cell;
        height: 36px;
        border: 1px solid #e1e2e3;
      }
    }
  }
  
  div.tab-container {}
  
  .label-left-align :deep(.el-form-item__label) {
    text-align: left;
  }
  
  .label-center-align :deep(.el-form-item__label) {
    text-align: center;
  }
  
  .label-right-align :deep(.el-form-item__label) {
    text-align: right;
  }
  
  .custom-label {}
  
  .static-content-item {
    min-height: 20px;
    display: flex;
    align-items: center;

    :deep(.el-divider--horizontal) {
      margin: 0;
    }
  }
  
</style>