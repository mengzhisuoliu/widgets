<script lang="ts" setup>
import { WidgetConfigOption, WidgetEditDialog, useWidgetData } from '@widget-js/vue3'
import { WidgetData } from '@widget-js/core'

const {
  widgetData,
  widgetParams,
  save,
} = useWidgetData(WidgetData, { loadDataByWidgetName: true })

const widgetConfigOption = new WidgetConfigOption({
  custom: false,
  showFooter: true,
  theme: {
    backgroundColor: true,
    color: true,
    borderRadius: true,
  },
})
</script>

<template>
  <WidgetEditDialog
    v-model="widgetData" :option="widgetConfigOption" :widget-params="widgetParams"
    @apply="save"
    @confirm="save({ closeWindow: true })"
  />
</template>

<style scoped></style>
