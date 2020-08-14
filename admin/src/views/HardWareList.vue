<template>
  <div class="about">
    <h1>硬件列表</h1>
    <el-table :data="hardware">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
        <el-table-column  label="图片">
            <template slot-scope="scope">
                <img :src="scope.row.icon" style="height:3rem">
            </template>
        </el-table-column>
        <el-table-column prop="category.name" label="类型">
        </el-table-column>
        <el-table-column prop="name" label="硬件名称">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope" >
            <el-button type="primary" @click="$router.push(`/hardware/edit/${scope.row._id}`)" size="small">查看</el-button>
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
            hardware:[]
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('rest/hardware')
            this.hardware = res.data
        },
        async remove(row){
            this.$confirm(`是否要删除${row.name}?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async () => {
                 await this.$http.delete(`rest/hardware/${row._id}`)
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
