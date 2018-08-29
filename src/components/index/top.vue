<template>
    <div class="top">
        <div class="logo">
            <img src="@/assets/logo.jpg" alt="">
        </div>
        <div class="serach">
            <input type="text" v-model='search' placeholder="输入想要搜索的帖子的内容"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: ''
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/common/style/rem.scss';

.top {
    .logo {
        text-align: left;
        img {
            width: rem(300);
        }
    }
}
</style>

