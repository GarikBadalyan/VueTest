<template>
  <div>
    <h1 :class="{ccc: true}">count: {{ count }}</h1>
   <button v-on:click="addCount"> avelacnel </button>
   <button v-on:click="decreaseCount"> pakasecnel </button>
    <hr>
    <input type="text" :placeholder="clue" :value="inputValue" v-on:input="changeValue">
    <input type="text" :placeholder="clue" v-model="inputValue2">

    <h1>value: {{ inputValue }}</h1>
    <hr>
    <h1>value2: {{ inputValue2 }}</h1>
    <hr>
    <div :class="notes.length > 5 ? 'first' : 'second' ">spisok zametok</div>
    <input type="text" :placeholder="clue" v-model="inputValue3" v-on:keypress.enter="dobavitVSpisok">
    <div v-if="notes.length === 1">
      mnacel e mek zametka
      <ul :class="{ }">
        <li
            v-for="(oneNumber, index) in notes"
            :key="index"
        >
          {{ oneNumber }}
          <br>

          <button v-on:click="deleteItem(index)">deleteItem</button>
        </li>
      </ul>
    </div>
    <ul
        :class="{
        yellow: true,
        cyan: notes.length>5
    }"
        v-else-if="notes.length !== 0">
      <li
          v-for="(oneNumber, index) in notes"
          :key="index"
      >
        {{ oneNumber }}
        <br>
        <button v-on:click="deleteItem(index)">deleteItem</button>
      </li>
    </ul>
    <div v-else>chka el zametok</div>

    <div>{{ calkulateNotes }}</div>
    <div>{{ calkulateNotes1() }}</div>
    <hr>
    <br>
    <div :class="{ccc: true}"> <h1>13 Das Props</h1> </div>
<!--    13 Das Props -->
    <my-notes
        v-for="(oneNode, index) in newNote"
        :key="index"
        :newOneNode="oneNode"
    />
<!--    14 das-->
    <hr>
    <br>
<mount-list
    v-for="{month, index, id} in months"
    :key="index"
    :month1="month"
    :id="id"
/>
    <!--    15 das  Emit-->
    <h1>15 das Emit</h1>
  <my-notes-list
  v-for="(note, index) in notesMore"
  :key="index"
  :task="note.task"
  :time="note.time"
  :isOpen="note.isOpen"
  :id="note.id"
  :wasTaskRead="note.wasTaskRead"
  v-on:countTaskOpen="countTaskOpen"
  />
    <hr>
    <br>
    <!--    16 das  Slot-->
    <h1>16 das Slot</h1>
    <app-slots>
      <template v-slot:header><p>Header Slot1</p></template>
      <template v-slot:content><p>Content Slot2</p></template>
      <template v-slot:footer><p>Footer Slot3</p></template>
      <template v-slot:default><p>default slovo</p></template>
    </app-slots>
    <hr>
    <br>
    <h1>17 das  provide inject</h1>
    <!--    17 das  provide inject-->
    <my-notes-info />
    <hr>
    <br>
    <h1>19 das  preventDefault</h1>
    <!--    19 das preventDefault-->
<component-prevent />
    <h1>20 - 21  das  preventDefault</h1>
    <!--    20 das 21 das refs input v-model -->
<input-refs-components />


    <!-- 22-23-24 das checkbox radio  select option-->
    <!-- Mixins-- 25 das> -->
    <hr>
    <br>
    <h1> 25 das Before  Mixins</h1>
<before-mixins-component />

    <h1> 25 das  Mixins</h1>
    <mixins-component-one />
    <hr>
    <br>

<!--    29das store-->
<!--    31 - 32  das mutation-->
<store-counter />

<!--    Lifecycle Hooks-->
    <hr>
    <br>
    <methods-lifecycle-hooks />
  </div>
</template>

<script>
import MyNotes from "@/MyNotes";
import MountList from "@/MountList";
import MyNotesList from "@/MyNotesList";
import InputRefsComponents from "@/InputRefsComponents";
import AppSlots from "@/AppSlots";
import StoreCounter from "@/StoreCounter";
import MethodsLifecycleHooks from "@/MethodsLifecycleHooks";
import MixinsComponentOne from "@/MixinsComponentOne";
import MyNotesInfo from "@/MyNotesInfo";
import ComponentPrevent from "@/ComponentPrevent";
import BeforeMixinsComponent from "@/BeforeMixinsComponent";

export default {
  components: {
    BeforeMixinsComponent,
    ComponentPrevent,
    MyNotesInfo,
    MyNotes,
    MountList,
    InputRefsComponents,
    MyNotesList,
    AppSlots,
    StoreCounter,
    MethodsLifecycleHooks,
    MixinsComponentOne,

  },

 data() {
   return {
     count: 0,
     cure1: 'napisat text',
     inputValue1: '',
     inputValue4: '',
     clue:'vvedite text5555555',
     inputValue: "",
     inputValue2: "",
     notes: ['one', 'two', 'tree'],
     notes1: ['one1', 'two1', 'tree1'],
     inputValue3: "",
     newNote: ['->zametka-1-1-1', '->zametka-2-2-2', '->zametka-3-3-3'],
     months: [
       {
         month: 'hunvar1',
         id: 1
       },
       {
         month: 'petrvar1',
         id: 2
       },
       {
         month: 'mart1',
         id: 3
       },
       {
         month: 'april',
         id: 4
       },
     ],
     notesMore: [
       {
         task:'Pochistit zubi',
         id:1,
         time:'07:30',
         isOpen:false,
         wasTaskRead:0
       },
       {
         task: 'Pohushat',
         id:2,
         time:'08:00',
         isOpen:false,
         wasTaskRead:0
       },
       {
         task: 'Na rabotu',
         id:3,
         time:'09:00',
         isOpen:false,
         wasTaskRead:0
       }

     ]
   }
 },

  methods: {
    addCount() {
      this.count ++
    },
    decreaseCount() {
      this.count = this.count - 1
    },

    deleteItem11(index) {
      this.notes1.splice(index, 1);
    },

    avelac111(event) {
      this.notes1.push(event.target.value)
      this.inputValue4 = ''
    },

    changeValue(event) {
      this.inputValue = event.target.value
    },

    deleteItem(index) {
      this.notes.splice(index,1)
    },

    dobavitVSpisok(ev) {
      this.notes.push(ev.target.value)
     this.inputValue3 = ""
    },

    calkulateNotes1(){
      console.log('calkulateNotes1')
    },

    countTaskOpen(id){
     const indexElement = this.notesMore.find( elem => elem.id === id )
      indexElement.wasTaskRead++
    }
  },

  // provide:{
  //   info: 'Info1111-1-1-1-1 cherez docherni element menq stacanq'
  // },

  provide() {
    return {
      // info: 'Info1111-1-1-1-1 cherez docherni element menq stacanq',
      info2: this.months
    }
  },

  // vorpisi animast shat chashxati ogtagorcum en computed-@
  computed: {
    calkulateNotes() {
      console.log('calkulateNotes-> computed', this.notes.length * 5)
      return this.notes.length * 5
    }
  },

  watch: {
    inputValue3(value){
      console.log('value', value)
      if (value.length === 7) {
        this.notes = []
      }
    }
  }

}
</script>

<style scoped>
.ccc{
  background-color: red;
}

.first {
  background-color: red;
}

.second {
  background-color: blue;
}

.ggg {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.cyan {
  background-color: cyan;
}
</style>