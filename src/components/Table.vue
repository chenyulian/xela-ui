<template>
    <h2>{{title}}</h2>
    <table class="xela-table">
        <thead>
            <tr>
                <th class="xela-table-title" v-for="(item,index) in columns" :key="index">{{item}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.name">
                <td class="xela-table-title td" v-for="(value,index) in item" :key="index">{{value}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    export default {
        props: {
            columns: Object,
            data: Array,
            title: {
                type: String,
                default: "Props"
            }
        }
    }
</script>

<style lang="scss" scoped>
h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  .xela-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
  .xela-table-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .td {
    color: #606266;
    font-size: 14px;
  }
</style>