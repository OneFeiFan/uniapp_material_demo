<template>
	<view class="content" :style="[theme,SXData]">
    <material-nav-bar>
      <view class="nav-bar">
        <uni-icons type="bars" size="" color="var(--md-sys-color-on-surface)" class="icon-left"/>
        <text class="title" >一个非凡</text>
        <uni-icons type="loop" size="" color="var(--md-sys-color-on-surface)" class="icon-right"/>
      </view>
    </material-nav-bar>

    <main class="container">
      <material-card :height="mx(50)">
        <view class="card-content">
          <text class="card-title">Hello</text>
          <text class="card-desc">这是一张卡片</text>
        </view>
      </material-card>
      <material-card :height="mx(130)">
        <view class="card-content">
          <text class="card-desc">这是一堆按钮</text>
        </view>
        <!-- 基础示例 -->
        <material-button backgroundColor="var(--md-sys-color-on-secondary-container)">默认按钮</material-button>
        <material-button type="filled" backgroundColor="var(--md-sys-color-on-secondary-container)">填充按钮</material-button>
        <material-button type="outlined" outline-color="#ff0000" outline-width="1px" backgroundColor="var(--md-sys-color-on-secondary-container)" font-color="#000">轮廓按钮</material-button>
        <material-button type="text" backgroundColor="var(--md-sys-color-on-secondary-container)" font-color="#000">文字按钮</material-button>
        <material-button type="elevated" backgroundColor="var(--md-sys-color-on-secondary-container)">悬浮按钮</material-button>

        <!-- 形状组合 -->
        <material-button shape="pill" backgroundColor="var(--md-sys-color-on-secondary-container)">圆形按钮</material-button>
        <material-button shape="square" backgroundColor="var(--md-sys-color-on-secondary-container)">直角按钮</material-button>

        <!-- 尺寸组合 -->
        <material-button size="small" backgroundColor="var(--md-sys-color-on-secondary-container)">小型按钮</material-button>
        <material-button size="medium" backgroundColor="var(--md-sys-color-on-secondary-container)">中型按钮</material-button>
        <material-button size="large" backgroundColor="var(--md-sys-color-on-secondary-container)">大型按钮</material-button>

        <!-- 禁用状态 -->
        <material-button disabled backgroundColor="var(--md-sys-color-on-secondary-container)">禁用按钮</material-button>
        <material-button type="outlined" outline-color="#ff0000" outline-width="2px" disabled backgroundColor="var(--md-sys-color-on-secondary-container)" font-color="#000">禁用轮廓按钮</material-button>

        <!-- 复杂组合 -->
        <material-button
            type="outlined"
            shape="square"
            size="large"
            font-color="#6200EE"
            backgroundColor="var(--md-sys-color-on-secondary-container)">
          <text>
            直角
          </text>
        </material-button>

        <!-- 完全自定义样式 -->
        <material-button
            shape="pill"
            size="medium"
            background-color="#FFD8E4"
            font-color="#1D192B"
            color="#FF7598">
          <text>自定义颜色按钮</text>
        </material-button>

        <material-button
            type="text"
            :duration="800"
            :opacity="0.5"
            transition="linear"
            backgroundColor="var(--md-sys-color-on-secondary-container)">
          自定义动画参数
        </material-button>

        <!-- 带图标的按钮 -->
        <material-button backgroundColor="var(--md-sys-color-on-secondary-container)">
          <template #default>
            <span class="icon-wrapper">🎨</span>
            图标按钮
          </template>
        </material-button>

        <material-button
            type="filled"
            shape="pill"
            size="large"
            backgroundColor="var(--md-sys-color-on-secondary-container)">
          大号圆角填充按钮
        </material-button>

      </material-card>
    </main>



    <material-tab-bar/>
	</view>
</template>

<script>
	import {global_theme} from "@/components/material-uni/colors";
  import {mx, SXData} from "@/components/material-uni/sx";
  import MaterialNavBar from "@/components/material-uni/material-nav-bar/material-nav-bar.vue";
  import MaterialTabBar from "@/components/material-uni/material-tab-bar/material-tab-bar.vue";
  import MaterialCard from "@/components/material-uni/material-card/material-card.vue";
  import MaterialButton from "@/components/material-uni/material-button/material-button.vue";
  export default {
    components: {MaterialButton, MaterialCard, MaterialTabBar, MaterialNavBar},
    computed: {
      SXData() {
        return SXData
      },
      theme() {
        return global_theme
      }
    },
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
		},
		methods: {
      mx
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
  .container{
    padding: sx(5);
    width: 100%;
    box-sizing: border-box;

    > *:not(:first-child) {
      margin-top: sx(5);
    }

    .card-content{
      padding: sx(5);
      display: flex;
      flex-direction: column;
    }
  }

</style>
