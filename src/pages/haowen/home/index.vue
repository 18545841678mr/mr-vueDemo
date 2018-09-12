<template>
    <div class="haowen">
        <div class="title">
            <img src="~@/assets/haowen/logo.png" alt="">
        </div>
        <div class="search">
            <form>
                <input type="text" id="bdcsMain" placeholder="输入想要搜索的帖子的内容"/>
                <button type="submit"></button>
            </form>
        </div>
        <div class="swiperList">
            <div class="head-swiper">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="swiperSlide"  v-for="(item,key) in swiperList" :key="key" v-on:load="swiperChange(item.title, key)">
                        <img :src="('http://47.105.82.246:8888' + item.picture)" alt="" @click="goDetail(item.id)">
                        <div class="swiperTitle"><span>&nbsp;&nbsp;{{ item.title }}</span> <span class="pageIndex">{{key + 1}}/{{swiperList.length}}&nbsp;&nbsp;</span></div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="hotList">
            <div class="hot-art" v-for="(item, index) in hotList" :key="index" @click="goDetail(item.id)">
                <p class="hotTitle">{{ item.title }}</p>
                <div class="info" >
                    <span class="read">{{ item.read_count }}w阅读</span>
                    <span class="time">{{ item.public_time }}</span>
                </div>
            </div>
        </div>
        <div class="articleList">
            <div class="artiList" v-for="(item, index) in artiList" :key="index" @click="goDetail(item.id)">
                <div class="titleBar">
                    <p class="artiTitle" >{{ item.title }}</p>
                    <div class="info">
                        <span class="read">{{ item.read_count }}w阅读</span>
                        <span class="time">{{ item.public_time }}</span>
                    </div>
                </div>
                <div class="pic" v-if="item.picture">
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
                pagination: {
                    el: '.mySwiper'
                },
                onAutoplay: swiper => {
                    this.activeIndex = swiper.activeIndex;
                },
            },
            activeIndex: 0,
            swipTitle: '',
            index: 0
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
        swiperChange(title, num) {
            this.swipTitle = title;
            this.index = num;
        },
        getList(){
            let _this = this;
            API.getList({})
            .then(function(res) {
                console.log(res.data.data);
                for(let i = 0; i < res.data.data.length; i++) {
                    if(res.data.data[i].is_hot == 1 && res.data.data[i].is_home_show == 1){
                        _this.swiperList.push(res.data.data[i]);
                    }else if(res.data.data[i].is_hot == 1) {
                        _this.hotList.push(res.data.data[i]);
                    }else if(res.data.data[i].is_home_show == 1) {
                        _this.swiperList.push(res.data.data[i]);
                    }else {
                        _this.artiList.push(res.data.data[i]);
                    }
                }
                if(_this.swiperList.length > 3) {
                _this.swiperList.length = 3;
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
        margin-left: rem(10);
        width: rem(100);
        height: rem(30);
        background-color: #fff;
        img{
            height: rem(30);
        }
    }
    .search {
        width: 92%;
        margin: rem(10) auto;
        form {
            width: 100%;
            height: rem(36);
            position: relative;
            input {
                width: 100%;
                height: 100%;
                padding-left: rem(20);
                border: none;
                border-radius: rem(18);
                outline: none;
                background: #f8f8f8;
            }
            button {
                width: rem(20);
                height: rem(20);
                position: absolute;
                right: rem(16);
                top: 50%;
                transform: translateY(-50%);
                border: none;
                outline: none;
                background-color: #f8f8f8;
                background-image: url(../../../assets/haowen/icon-search.png);
                background-size: contain;
            }
        }
    }
    .swiperList {
        .head-swiper{
            .swiperSlide{
                margin: rem(5) auto;
                position: relative;
                width: 100%;
                img{
                    width: 100%;
                    height: 50vw;
                }
                .swiperTitle{
                    position: absolute;
                    width: 100%;
                    height: rem(30);
                    line-height: rem(30);
                    bottom: rem(3.5);
                    font-size: rem(17);
                    text-align: start;
                    color: #fff;
                    background-color: rgba(0, 0, 0, .4);
                    display: flex;
                    justify-content: space-between;
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
        font-size: rem(19);
        text-align: start;
    }
    .hotList{
        padding: rem(0) rem(15);
        .hot-art {
            margin-top: rem(10);
            padding-bottom: rem(10);
            border-bottom: 1px solid #F0F0F0;
            .info{
                width: rem(205); 
                margin-top: rem(8);
                text-align: left;
                padding-left: rem(15);
                position: relative;
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
                &::after{
                    content: '';
                    position: absolute;
                    height: rem(15);
                    width: rem(15);
                    background: url('~@/assets/haowen/hot.png') no-repeat center;
                    background-size: rem(15);
                    top: rem(2);
                    left: rem(0);
                }
            }
            
        }
        
    }
    .articleList{
        padding: 0 rem(15);
        .artiList{
            margin-top: rem(5);
            padding-bottom: rem(5);
            border-bottom: 1px solid #F0F0F0;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            padding: rem(15) 0;
            .titleBar{
                // width: rem(240);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .artiTitle{
                    font-size: rem(16);
                    font-weight: 400;
                    text-align: start;
                }
                .info{
                    width: rem(175); 
                    margin-top: rem(15);
                    text-align: left;
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
                min-width: rem(120);
                max-width: rem(120);
                height: rem(80);
                img{
                    width: 100%;
                    height: 100%;
                    border: 1px solid #F2F2F2;
                }
            }
        }
    }
}
</style>
