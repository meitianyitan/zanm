<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zvm-cell-group>
        <zvm-switch-cell v-model="checked" :title="$t('title')" />
      </zvm-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <zvm-cell-group>
        <zvm-switch-cell v-model="checked" disabled :title="$t('title')" />
      </zvm-cell-group>
    </demo-block>

    <demo-block :title="$t('loading')">
      <zvm-cell-group>
        <zvm-switch-cell v-model="checked" loading :title="$t('title')" />
      </zvm-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
