<template>
	<div>
		姓名<input type="text" name="name" v-model = "newname">
		<button @click="add">添加</button>
		<table>
			<thead>
				<th>姓名</th>
				<th>审核状态</th>
				<th>操作</th>
			</thead>
			<tbody>
				<tr v-for="(item, index) in items">
					<td>{{item.name}}</td>
					<td>{{item.status}}</td>
					<td><button v-if="item.status  == '待审核'" v-on:click="change(index)">审核</button>
						<button v-else v-on:click="remove(index)">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		data : function() {
			return {
				newname : "",
				items : [
					{name : "1", status : "待审核"},
					{name : "2", status : "待审核"},
					{name : "3", status : "待审核"}
				]
			}
		},
		methods : {
			change : function(index) {
				if(this.items[index].status == "待审核") {
					this.$set(this.items[index], "status", "合格")
				}
			},
			remove : function(index) {
				this.items.splice(index, 1);
			},
			add : function() {
				this.items.push({
					name : this.newname,
					status : "待审核"
				})
			}

		}
	}
</script>
