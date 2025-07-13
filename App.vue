<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */

  .nav-bar {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;


    .icon-left {
      /* 调整这个值控制间距 */
      position: relative;
      margin-left:sx(2.5);
      font-size:sx(8);
    }

    .rotate {
      animation: rotate 1s linear infinite;
      display: inline-block;
    }

    .icon-right {
      /* 调整这个值控制间距 */
      position: relative;
      will-change: transform;
      margin-right:sx(2.5);
      font-size:sx(8);
    }


    .title {
      margin: 0 auto;
      font-size: sx(6.5);
      display: block;
      text-align: center;
      color: var(--md-sys-color-on-surface);
    }
  }
</style>
