<template>
    <div class="haowen">
        <div class="title">好文在线</div>
        <div class="search">

        </div>
        <!-- <div class="head-swiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>I'm Slide 1</swiper-slide>
                <swiper-slide>I'm Slide 2</swiper-slide>
                <swiper-slide>I'm Slide 3</swiper-slide>

                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
        </div> -->
        <div class="hotList">
            <div class="hot-art" v-for="(item, index) in hotList" :key="index">
                <p class="hotTitle">{{ item.title }}</p>
                <div class="info">
                    <span class="hot">热</span>
                    <span class="read">{{ item.readNum }}阅读</span>
                    <span class="time">{{ item.date }}</span>
                </div>
            </div>
        </div>
        <div class="articleList">
            <div class="artiList" v-for="(item, index) in artiList" :key="index" @click="showDetail">
                <div class="titleBar">
                    <p class="arti">{{ item.title }}</p>
                    <span class="read">{{ item.readNum }}阅读</span>
                    <span class="time">{{ item.date }}</span>
                </div>
                <div class="pic">
                    <img src="item.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'home',
    data(){
        return{
            hotList: [
                {title:'洗脸的误区都有哪些 这些错误你至今还在犯吗', readNum: '4.5w', date: '2018-06'},
                {title:'洗脸的误区都有哪些 这些错误你至今还在犯吗', readNum: '4.5w', date: '2018-06'}
            ], //热门文章列表数组
            artiList: [], //文章列表数组
            swiperOption: {//swiper官网api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 6000,
                direction : 'vertical',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',//上一张
                nextButton:'.swiper-button-next',//下一张
                scrollbar:'.swiper-scrollbar',//滚动条
                mousewheelControl : true,
                observeParents:true,
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true,
            }
        }
    },
    components: {
        swiper, 
        swiperSlide,
    },
    methods: {
        showDetail(){
            console.log('show detail!');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../style/rem.scss';
@import '../../../style/reset.scss';
@import '../../../style/normalize.scss';

.haowen {
    color: #000;
    .title{
        position: relative;
        padding-left: rem(5);
        margin-left: rem(15);
        width: rem(100);
        height: rem(50);
        line-height: rem(50);
        font-size: rem(15);
        color: orange;
        font-weight: 900; 
        background-color: #fff;
        &::after {
            content: '';
            position: absolute;
            top: rem(-2);
            left: 0;
            width: rem(18);
            height: 100%;
            background: url(../../../assets/haowen/WechatIMG15.png) no-repeat left center;
            background-size: rem(18) auto;
        }
    }
    .hotList{
        padding: rem(15);
        .hot-art {
            margin-top: rem(20);
            padding-bottom: rem(10);
            border-bottom: 1px solid #F0F0F0;
            .hotTitle{
                font-size: rem(20);
                font-weight: 500;
                text-align: start;
            }
            .info{
                width: rem(160); 
                margin-top: rem(8);
                .hot{
                    display: inline-block;
                    border: 1px solid red;
                    font-size: rem(15);
                    width: rem(24);
                    height: rem(24);
                    line-height: rem(24);
                    color: red;
                }
                .read{
                    margin-left: rem(8);
                    color: #8F8F8F;
                    font-size: rem(14);
                }
                .time{
                    color: #8F8F8F;
                    font-size: rem(14);
                    margin-left: rem(10);
                }
            }
        }
        
    }
    .articleList{
        padding: rem(15);
        .artiList{
            margin-top: rem(20);
            padding-bottom: rem(10);
            border-bottom: 1px solid #F0F0F0;
            .titleBar{
                .artiTitle{
                    font-size: rem(20);
                    font-weight: 500;
                    text-align: start;
                }
            }
        }
    }
}
</style>
