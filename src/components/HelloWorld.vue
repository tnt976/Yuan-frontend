<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>

<script setup lang='ts'>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'

  const formJson = reactive({"widgetList":[{"key":72165,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input32654","label":"input","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"dqweqwe","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input32654"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"top","size":"large","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)

  const submitForm = () => {
    vFormRef.value.getFormData().then(formData => {
      // Form Validation OK
      alert( JSON.stringify(formData) )
    }).catch(error => {
      // Form Validation failed
      ElMessage.error(error)
    })
  }
</script>
