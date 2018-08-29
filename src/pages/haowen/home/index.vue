<template>
    <div class="haowen">
        <div class="title">好文在线</div>
        <div class="search">

        </div>
        <div class="head-swiper"></div>
        <div class="hot-art" v-for="(item, index) in hotList" :key="index">
            <p class="hotTitle">{{item.title}}</p>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../style/rem.scss';
@import '../../../style/reset.scss';
@import '../../../style/normalize.scss';

.haowen {

}
</style>
