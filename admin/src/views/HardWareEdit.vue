<template>
  <div class="about">
    <h1>{{id ? '编辑':'新建'}}硬件</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="类型">
            <el-select v-model="model.categories">
                <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="图片">
            <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :headers="getAuthHeaders()"
            :show-file-list="false"
            :on-success="afterUpload">
            <img v-if="model.icon" :src="model.icon" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    props:{
        id:{}
    },
    data(){
        return {
            model:{},
            categories:[]
        }
    },
    methods:{
        afterUpload(res){
            this.$set(this.model,'icon',res.url)
        },
        async save(){
            if(this.id){
                await this.$http.post(`rest/hardware/${this.id}`,this.model)
            }
            else{
                await this.$http.post('rest/hardware',this.model)
            }
            this.$router.push('/hardware/list')
            this.$message({
               type: 'success',
               message: '保存成功'
           })
        },
        async fetch(){
            const res = await this.$http.get(`rest/hardware/${this.id}`)
            this.model = res.data;
        },
        async fetchCategories(){
            const res = await this.$http.get(`rest/categories`)
            this.categories = res.data;
        }
    },
    created(){
        this.fetchCategories();
        this.id && this.fetch();
    }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
