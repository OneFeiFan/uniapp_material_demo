<template>
	<view class="content" :style="[theme,SXData]">
    <material-nav-bar>
      <view class="nav-bar">
        <uni-icons type="bars" size="" color="var(--md-sys-color-on-surface)" class="icon-left"/>
        <text class="title" >一个非凡</text>
        <uni-icons type="loop" size="" color="var(--md-sys-color-on-surface)" class="icon-right"/>
      </view>
    </material-nav-bar>
	</view>
</template>

<script>
	import {global_theme} from "@/components/material-uni/colors";
  import {SXData} from "@/components/material-uni/sx";
  import MaterialNavBar from "@/components/material-uni/material-nav-bar/material-nav-bar.vue";
  export default {
    components: {MaterialNavBar},
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

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
</style>
