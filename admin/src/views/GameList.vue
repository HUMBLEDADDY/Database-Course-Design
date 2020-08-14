<template>
  <div class="about">
    <h1>游戏列表</h1>
    <el-table :data="games">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
        <el-table-column  label="图片">
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
            <el-button type="primary" @click="$router.push(`/games/edit/${scope.row._id}`)" size="small">查看</el-button>
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
            games:[],
            texts:['差评如潮','特别差评','多半差评','褒贬不一','多半好评','特别好评','好评如潮']
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('rest/games')
            this.games = res.data
            for(let i=0;i<this.games.length;i++){
                switch(this.games[i].score){
                    case "1":
                        this.games[i].score = "差评如潮"
                        break;
                    case "2":
                        this.games[i].score = "特别差评"
                        break;
                    case "3":
                        this.games[i].score = "多半差评"
                        break;
                    case "4":
                        this.games[i].score = "褒贬不一"
                        break;
                    case "5":
                        this.games[i].score = "多半好评"
                        break;
                    case "6":
                        this.games[i].score = "特别好评"
                        break;
                    case "7":
                        this.games[i].score = "好评如潮"
                        break;                        
                }
            }
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
