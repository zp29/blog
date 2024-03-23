# Vue 开发 ios

1. PC 端滚动正常，App 打包之后惯性滚动消失

   ```css
   // app.vue
   html, body, #app {
   	-webkit-overflow-scrolling: touch;
   }
   /* 
   * <style> 中不要有 scoped 既为全局 
   */
   ```

2.  ios 监听 scroll 不能实时

   ```javascript
   /*
   * 这个应该不算BUG
   * 解决:使用 touchmove + scroll 监听
   */
   
   let el    = this.$refs.ProfileContent
   el.addEventListener('touchmove', function() { /* do something */ }
   el.addEventListener("scroll", function (e) { /* do something */ }
   
   /*
   * 最好是使用元素监听，使用 window.addEventListener 可能会有问题，我使用的时候不太正常，可能方法不对。
   * 服用请配合 mounted || $nexttick() 
   */
   ```


3. transform 影响 position

   1. position: fixed 会降低到 position: absolute
   2. position: relative -> 层级会有影响

   解决：

   1. transform 的时候给某些元素样式（ 降低到 position: absolute top属性还可以用 ）

      > 影响元素较少

      ```css
      .transformBox div[class*="active"] .ContentRect{
      	top: 34px;
      }
      ```

   2.  position: fixed 替换 position: absolute 

      > 影响元素比较多 