<template>
    <div class='article'>
        <span v-if='loading'>加载中···</span>
        <article v-else>
            <header>
                <h2 class="title">
                    {{article.title}}
                </h2>
                <div class="ext-info">
                    <router-link to="/"><img src="~@/assets/haowen/WechatIMG15.png" alt=""></router-link>
                    <div class="read-num">{{article.read_count}}w阅读</div>
                    <div class="date">{{article.public_time}}</div>
                </div>
            </header>
            <section v-for='(elem, index) in articleList' :key='index' v-if="elem.image || elem.desc">
                <img :src="host + elem.image" alt="">
                <!-- <p v-if="elem.desc && index == 0" >{{showAll ? firstPara.desc : showContent}}</p> -->
                <p>{{elem.desc}}</p>
            </section>
            <!-- <div v-if="!showAll && (firstPara.desc && (firstPara.desc.length  > 200 || article.article_info.length > 1))" @click="slide" class="show-al-btn">展开全部内容</div> -->
            <div class="end-line">- the end -</div>
        </article>
    </div>
</template>
<script>
import API from "@/service";
import URL from "@/constant/url";

export default {
    data() {
        return {
            loading: true,
            showAll: false,
            //title: '蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用',
            //content: '截至目前，已经有200多家科技公司成为Triplebyte的客户，包括业界第一的苹果，老牌的云端服务Dropbox，以及Stripe、Quora、Reddit、KhanAcademy、Opendoor等一大票科技界的明星公司。最近，Triplebyte发现求职的软件工程师在与公司的薪酬谈判中总是处于弱势地位，他们认为这是不公平的于是，Triplebyte利用自身的平台，统计了硅谷众多科技公司对于软件工程师的年薪酬水平，以此新入行的人们提供一个参考。需要注意的是，Triplebyte统计的只是公司给出的底薪。一般公司还提供股权，年度奖金或者其他福利，这通常占总工资的很大一部分。但Triplebyte认为这些非薪资组成部分在单一的数轴上进行比较是不合理的，所以只有一个底薪的统计。',
            article: {},
            host: URL.HOST
        }
    },
    computed: {
        firstPara() {
            if(this.article.article_info && this.article.article_info.length > 0) {
                return this.article.article_info[0]
            }
            return {}
        },
        showTitle() {
            if(this.firstPara) {
                return this.firstPara.substr(0, 20);
            }
        },
        showContent() {
            if(this.article.article_info && this.article.article_info.length > 0) {
                return this.firstPara.desc.substr(0, 200);
            }
        },
        articleList() {
            return this.article.article_info ? this.article.article_info : []
        }
    },
    methods: {
        slide() {
            this.showAll = true;
        }
    },
    mounted() {
        this.loading = false;
        API.getArticle({
            id: this.$route.params.id
        }).then((res) => {
            this.article = res.data.data.data;
        });
    }
}
</script>
<style lang="scss" scoped>
@import '../../common/style/rem.scss';
.article {
    font-family: Microsoft YaHei;
    padding: rem(10) rem(20);
    article {
        header {
            .title {
                margin: 0;
                padding: rem(10) 0;
                font-size: 22px;
                text-align: left;
                color: #000000;
            }
            .ext-info {
                display: flex;
                justify-content: flex-start;
                line-height: rem(32);
                font-size: 14px;
                color: #8F8F8F;
                img {
                    width: rem(30);
                    height: rem(30);
                    border: rem(1) solid #999999;
                    border-radius: rem(20);
                }
                .read-num {
                    margin:  0 rem(10);
                }
            }
        }
        section{
            margin: rem(14) 0;
            img {
                width: 100%;
                border: solid 1px #F2F2F2;
            }
            .show-al-btn {
                font-size: 14px;
            }
            p {
                margin:rem(6) 0;
                font-size: rem(16);
                line-height: rem(36);
                word-break: break-all;
                text-align: justify;
                color: #000000;
            }
        }
        .end-line {
            padding: rem(10) 0;
            text-align: center;
            opacity: 0.2;
        }
    }
}
</style>

