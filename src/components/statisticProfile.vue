<template>
    <div class="statistics-wrapper">
        <div class="statistics grey">
            <iconMain class="starImg" name="starIcon" />
            <div class="starName">Star</div>
        </div>
        <div class="separator"></div>
        <div class="statistics white">
            <div class="number__stars">{{ star }}</div>
        </div>
        <div class="separator"></div>
        <div class="statistics grey">
            <iconMain class="starImg" name="forkIcon" />
            <div class="starName">Fork</div>
        </div>
        <div class="separator"></div>
        <div class="statistics white">
            <div class="number__stars">{{ forks }}</div>
        </div>
    </div>
</template>
<script>
import iconMain from '@/icons/iconMain.vue'
export default {
  props: {
    star: Number,
    forks: Number
  },
  components: { iconMain }
}
</script>

<style lang="scss" scoped>
.statistics-wrapper {
    display: flex;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 10px;
}
.statistics {
    display: flex;
    align-items: center;
    padding: 6px 6px;
    cursor: pointer;
    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
}
.statistics.grey {
    background: #FAFBFC;
}

.statistics.white {
  background: #fff;
}
.starImg {
  width: 15px;
  margin-right: 5px;
}
.separator {
  width: 1px;
  background: #87898b;
}
</style>>
