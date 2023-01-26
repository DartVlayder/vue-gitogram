<template>
    <div class="statistics-wrapper">
        <div class="statistics grey">
            <iconMain class="starImg" name="starIcon" />
            <div class="starName">Star</div>
        </div>
        <div class="statistics white">
            <div class="number__stars">12</div>
        </div>
        <div class="statistics grey">
            <iconMain class="starImg" name="forkIcon" />
            <div class="starName">Fork</div>
        </div>
        <div class="statistics white">
            <div class="number__stars">123</div>
        </div>
    </div>
</template>
<script>

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
    padding: 6px 12px;
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
</style>>
