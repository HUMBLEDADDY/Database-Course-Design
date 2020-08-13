<template>
  <div class="about">
    <h1>{{id ? '编辑':'新建'}}游戏</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="价格">
            <el-input type="number" v-model="model.price"></el-input>
        </el-form-item>
        <el-form-item label="简介">
            <el-input type="textarea" rows="5" v-model="model.content"></el-input>
        </el-form-item>
        <el-form-item label="评分">
            <el-rate style="top:10px;position:relative"
                v-model="model.score"
                show-text
                :texts="texts"
                :max="max"
                >
            </el-rate>  
        </el-form-item>
        <el-form-item label="图片">
            <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
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
            max:7,
            texts:['差评如潮','特别差评','多半差评','褒贬不一','多半好评','特别好评','好评如潮'],
            model:{},
        }
    },
    methods:{
        afterUpload(res){
            this.$set(this.model,'icon',res.url)
        },
        async save(){
            if(this.id){
                await this.$http.post(`rest/games/${this.id}`,this.model)
            }
            else{
                await this.$http.post('rest/games',this.model)
            }
            this.$message({
               type: 'success',
               message: '保存成功'
           })
        },
        async fetch(){
            const res = await this.$http.get(`rest/games/${this.id}`)
            this.model = res.data;
        }

    },
    created(){
        this.id && this.fetch()
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
