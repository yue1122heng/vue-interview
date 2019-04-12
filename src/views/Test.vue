<template>
  <div class="test">
    <div>平均值: {{average}}</div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div>{{item.id}}</div>
      <div>{{item.data}}</div>
      <div>{{item.time}}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      dataList: [],
      average: ''
    }
  },
  computed: {

  },
  methods: {
    ...mapMutations(['updateDataList']),
    ...mapActions(['getDataCall']),
    ...mapGetters(['getAverage']),
    update () {
      this.getDataCall().then(data => {
        this.dataList = data
        this.updateDataList(data)
        this.average = this.getAverage()
      })
    }
  }
}
</script>

<style scoped lang="less">
.test {
  .list {
    display: flex;
    flex-direction: row;
    // justify-content: center;
    width:600px;
    height: 30px;
    justify-content: space-between;
    margin:  0 auto;
  }
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }

}
</style>
