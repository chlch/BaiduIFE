<template>
    <div>
        <form>
            <div>
                <label for="name">姓名</label>
                <input type="text" name="name" v-model="name">
            </div>
            <div>
                <label for="age">年龄</label>
                <input type="text" name="age" v-model="age">
            </div>
            <div>
                <label for="brifInfo">简介</label>
                <input type="text" name="brifInfo" v-model="brifInfo">
            </div>
        </form>
        <div>
            <span>信息</span>
            <button v-on:click="clear">移除信息</button>
        </div>
        <div>
            <p>姓名：{{ name }}</p>
            <p>年龄：{{ age }}</p>
            <p>简介：{{ brifInfo }}</p>
        </div>
    </div>
</template>
<script>
function getDefaultData() {
    return {
        name: "",
        age: "",
        brifInfo: ""
    }
}
export default {
    data: function() {
        return {
            name: "",
            age: "",
            brifInfo: ""
        }
    },
    methods: {
        clear: function() {
            var def = getDefaultData();
            Object.assign(this.$data, def);
        }
    }

}
</script>
<style lang="stylus" scoped>
</style>