<template>
    <v-card width="1000px">
        <v-table>
            <thead>
                <tr>
                    <!-- <th v-for="item in desserts[0]">
                        {{ item.name }}
                    </th> -->
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                    <th class="text-left">
                        status
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>
                        <v-chip v-if="item.status == false" class="ma-2" color="red" text-color="white">
                            {{ item.status }}
                        </v-chip>
                        <v-chip v-else class="ma-2" color="green" text-color="white">
                            {{ item.status }}
                        </v-chip>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>   
<script>
import desserts from '../shared/data/table/table.js'
export default {
    data() {
        // const keys = Object.keys(this.desserts[0])
        return {
            // keys,
            desserts,
            
        }
    },
    // 生命周期钩子会在组件生命周期的各个不同阶段被调用
    // 例如这个函数就会在组件挂载完成后被调用
    mounted() {
        console.log(this.desserts[0].name)

        const keys = Object.keys(this.desserts[0])

        console.log(keys)
    }
}

</script>