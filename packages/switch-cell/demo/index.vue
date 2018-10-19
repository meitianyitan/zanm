<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <zan-cell-group>
        <zan-switch-cell v-model="checked" :title="$t('title')" />
      </zan-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <zan-cell-group>
        <zan-switch-cell v-model="checked" disabled :title="$t('title')" />
      </zan-cell-group>
    </demo-block>

    <demo-block :title="$t('loading')">
      <zan-cell-group>
        <zan-switch-cell v-model="checked" loading :title="$t('title')" />
      </zan-cell-group>
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
