<template>
  <div class="about">
    <h1>游戏列表</h1>
    <el-table :data="games">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
        <el-table-column prop="parent.name" label="图片">
            <template slot-scope="scope">
                <img :src="scope.row.icon" style="height:3rem">
            </template>
        </el-table-column>
        <el-table-column prop="name" label="游戏名称">
        </el-table-column>
        <el-table-column prop="price" label="游戏价格">
        </el-table-column>
        <el-table-column prop="score" label="游戏评分">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope" >
            <el-button type="primary" @click="$router.push(`/games/edit/${scope.row._id}`)" size="small">编辑</el-button>
            <el-button type="primary" @click="remove(scope.row)" size="small">删除</el-button>
        </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data(){
        return{
            games:[]
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('rest/games')
            this.games = res.data
        },
        async remove(row){
            this.$confirm(`是否要删除${row.name}?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async () => {
                 await this.$http.delete(`rest/games/${row._id}`)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.fetch();
            })
        }
    },
    created(){
        this.fetch()
    }
}
</script>
