<template>
    <div class="haowen">
        <div class="title">好文在线</div>
        <div class="search">

        </div>
        <div class="swiperList">
            <div class="head-swiper">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="swiperSlide"  v-for="(item,key) in swiperList" :key="key">
                        <img :src="('http://47.105.82.246:8888' + item.picture)" alt="" @click="goDetail(item.id)">
                        <div class="swiperTitle">&nbsp;{{ item.title }}</div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="hotList">
            <div class="hot-art" v-for="(item, index) in hotList" :key="index" @click="goDetail(item.id)">
                <p class="hotTitle">{{ item.title }}</p>
                <div class="info" >
                    <span class="hot">热</span>
                    <span class="read">{{ item.read_count }}w阅读</span>
                    <span class="time">{{ item.public_time }}</span>
                </div>
            </div>
        </div>
        <div class="articleList">
            <div class="artiList" v-for="(item, index) in artiList" :key="index" @click="goDetail(item.id)">
                <div class="titleBar">
                    <p :class="item.picture ? 'artiTitle' : 'hotTitle'">{{ item.title }}</p>
                    <div class="info">
                        <span class="read">{{ item.read_count }}w阅读</span>
                        <span class="time">{{ item.public_time }}</span>
                    </div>
                </div>
                <div class="pic">
                    <img :src="('http://47.105.82.246:8888' + item.picture)" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import API from "@/service";

export default {
    name: 'home',
    data(){
        return{
            swiperList: [], //轮播文章数组
            hotList: [], //热门文章列表数组
            artiList: [], //文章列表数组
            swiperOption: {//swiper官网api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                noSwiping : true,
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.mySwiper'
                }
            },
        }
    },
    components: {
        swiper, 
        swiperSlide,
    },
    methods: {
        goDetail(id){
            console.log(id);
            this.$router.push(`article/${id}`);
        },
        getList(){
            let _this = this;
            API.getList({})
            .then(function(res) {
                console.log(res.data.data.data);
                for(let i = 0; i < res.data.data.data.length; i++) {
                    if(res.data.data.data[i].is_hot == 1 && res.data.data.data[i].is_home_show == 1){
                        _this.swiperList.push(res.data.data.data[i]);
                    }else if(res.data.data.data[i].is_hot == 1) {
                        _this.hotList.push(res.data.data.data[i]);
                    }else if(res.data.data.data[i].is_home_show == 1) {
                        _this.swiperList.push(res.data.data.data[i]);
                    }else {
                        _this.artiList.push(res.data.data.data[i]);
                    }
                }
            })
            .catch(function(err) {
                console.log(err);
            })
        }
    },
    mounted(){
        this.getList();
    }
}
</script>

<style lang="scss" scoped>
@import '../../../style/rem.scss';
@import '../../../style/reset.scss';
@import '../../../style/normalize.scss';

.haowen {
    font-family: Microsoft YaHei;
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
    .swiperList {
        .head-swiper{
            .swiperSlide{
                margin: rem(5) auto;
                position: relative;
                width: 100%;
                img{
                    width: rem(332);
                    height: rem(166);
                }
                .swiperTitle{
                    position: absolute;
                    width: rem(332);
                    height: rem(30);
                    line-height: rem(30);
                    bottom: rem(3.5);
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: rem(17);
                    text-align: start;
                    color: #fff;
                    background-color: rgba(0, 0, 0, .4);
                }
            }
        }
    }
    .pagination {
        padding-top: rem(22);
        padding-bottom: rem(28);
        text-align: center;
        font-size:0;
        span {
            width: rem(15);
            height: rem(3);
            display: inline-block;
            vertical-align: middle;
            background: #E0E0E0;
            margin-right: rem(10);
            border-radius: 3px;
            &.active {
                background: #FFDC00;
            }
        }
    }
    .hotTitle{
        font-size: rem(20);
        text-align: start;
    }
    .hotList{
        padding: rem(15);
        .hot-art {
            margin-top: rem(10);
            padding-bottom: rem(10);
            border-bottom: 1px solid #F0F0F0;
            .info{
                width: rem(205); 
                margin-top: rem(8);
                .hot{
                    display: inline-block;
                    border: 1px solid red;
                    font-size: rem(10);
                    width: rem(15);
                    height: rem(15);
                    line-height: rem(15);
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
        padding: 0 rem(15);
        .artiList{
            margin-top: rem(10);
            padding-bottom: rem(10);
            border-bottom: 1px solid #F0F0F0;
            display: flex;
            justify-content: space-between;
            .titleBar{
                width: rem(240);
                .artiTitle{
                    font-size: rem(16);
                    font-weight: 400;
                    text-align: start;
                }
                .info{
                    width: rem(175); 
                    margin-top: rem(8);
                    .read{
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
            .pic{
                img{
                    width: rem(120);
                    height: rem(80);
                }
            }
        }
    }
}
</style>
