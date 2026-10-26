<script lang="ts" setup>
import { shellContent } from '../shell/shell-content';
</script>

<template>
  <Frame>
    <Page class="conference-page">
      <ActionBar :title="shellContent.title" class="conference-action-bar" />
      <GridLayout>
        <Label
          :text="shellContent.body"
          textWrap="true"
          verticalAlignment="center"
          horizontalAlignment="center"
          textAlignment="center"
          margin="24"
          fontSize="20"
          color="#111111"
        />
      </GridLayout>
    </Page>
  </Frame>
</template>

<style scoped>
.conference-page,
.conference-action-bar {
  background-color: #ffffff;
  color: #111111;
}
</style>

