<template>
  <v-card width="1000px">
    <v-table height="500px">
      <thead>
        <tr>
          <th class="text-left">
            User
          </th>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Complelted
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in todoData" :key="item.userId">
          <td>{{ item.userId }}</td>
          <td>{{ item.title }}</td>
          <td>
            <v-chip v-if="item.completed == false" class="ma-2" color="red" text-color="white">
              {{ item.completed }}
            </v-chip>
            <v-chip v-else class="ma-2" color="green" text-color="white">
              {{ item.completed }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
<script>
import apiService from '../shared/apiService/apiService.js'

export default {
  name: 'DataTable',
  data() {
    return {
      todoData:[]
    }
  },
  //生命週期hook會在component生命週期的各個不同階段被調用
  mounted() {
    // 取得user todoList
    this.fetchTodoData();
  },
  methods : {

    // 取得user todoList
    fetchTodoData(){
      apiService.get('/todos')
        .then(response => {
          this.todoData = response.data
          console.log(this.todoData)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>
