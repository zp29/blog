# PlugName -> vue-lazyload 



### lazy-component (Update Bug) 

:no_entry_sign:
  ```javascript
   <lazy-component @show="show">
      <div v-if="UserTagLoading" class="UserTagLoading"></div>
      <UserTag
        v-if  = "!UserTagLoading"
        class = "UserTag"
        :tags = "tags"
        :userId = "user.sUserId"
        :tab = "tab"
        :key = "`${user.sUserId} Sparks`"
        />
  </lazy-component>
  ```

:100:
```javascript
<lazy-component @show="show">
    <div v-if="UserTagLoading" class="UserTagLoading"></div>
</lazy-component>
 <UserTag
    v-if  = "!UserTagLoading"
    class = "UserTag"
    :tags = "tags"
    :userId = "user.sUserId"
    :tab = "tab"
    :key = "`${user.sUserId} Sparks`"
    />
```

```javascript
// methods...
show () {
  this.UserTagLoading = false
}
```
