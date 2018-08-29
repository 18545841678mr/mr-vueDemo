<template>
    <div class='article'>
        <article>
            <header>
                <h2 class="title">
                    {{showTitle}}
                </h2>
                <div class="ext-info">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2659519208,2040552462&fm=27&gp=0.jpg" alt="">
                    <div class="read-num">4.3w阅读</div>
                    <div class="date">2018-06-01</div>
                </div>
            </header>
            <section>
                <img src="http://imgsrc.baidu.com/baike/pic/item/00e93901213fb80e6fd10aa73ad12f2eb93894b9.jpg" alt="">
                <p>{{showAll ? content : showContent}}</p>
                <img v-if="showAll" src="https://imgsrc.baidu.com/baike/pic/item/64380cd7912397dd161f052d5582b2b7d0a287b1.jpg" alt="" >
                <div v-if="!showAll && content.length > 200" @click="slide" class="show-al-btn">展开全部内容</div>
            </section>
            <div v-if="showAll" class="end-line">- the end -</div>
        </article>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showAll: false,
            title: '蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用蒲公英叶子的功效与作用',
            content: '截至目前，已经有200多家科技公司成为Triplebyte的客户，包括业界第一的苹果，老牌的云端服务Dropbox，以及Stripe、Quora、Reddit、KhanAcademy、Opendoor等一大票科技界的明星公司。最近，Triplebyte发现求职的软件工程师在与公司的薪酬谈判中总是处于弱势地位，他们认为这是不公平的于是，Triplebyte利用自身的平台，统计了硅谷众多科技公司对于软件工程师的年薪酬水平，以此新入行的人们提供一个参考。需要注意的是，Triplebyte统计的只是公司给出的底薪。一般公司还提供股权，年度奖金或者其他福利，这通常占总工资的很大一部分。但Triplebyte认为这些非薪资组成部分在单一的数轴上进行比较是不合理的，所以只有一个底薪的统计。',
        }
    },
    computed: {
        showTitle() {
            return this.title.substr(0, 20);
        },
        showContent() {
            return this.content.substr(0, 200);
        }
    },
    methods: {
        slide() {
            this.showAll = true;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../common/style/rem.scss';
.article {
    padding: rem(10) rem(20);
    article {
        header {
            .title {
                margin: 0;
                padding: rem(10) 0;
                font-size: 22px;
                text-align: left;
            }
            .ext-info {
                display: flex;
                justify-content: flex-start;
                line-height: rem(32);
                font-size: 14px;
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
            margin: rem(10) 0;
            img {
                width: 100%;
            }
            .show-al-btn {
                font-size: 14px;
            }
            p {
                font-size: 16px;
                word-break: break-all;
                text-align: justify;
                text-indent: 2em;
                color: #999999;
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

