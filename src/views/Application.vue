<template>
  <div class="min-h-screen pt-8 pb-16 sm:pt-12 sm:pb-20 space-y-12">
    <Container class="space-y-6 sm:space-y-8">
      <h1 class="text-secondary-20 text-2xl font-medium text-left sm:text-center">
        nicole's wife application
      </h1>
      
      <form class="text-left space-y-12 max-w-lg mx-auto" @submit.prevent>
        <div class="space-y-8">
          <TextInput type="number" name="age" v-model="state.age">
            <template v-slot:label>
              <p class="text-lg font-medium text-neutral-20">
                how old r u
              </p>
            </template>
          </TextInput>
          <TextInput type="text" name="twitter" v-model="state.twitterHandle">
            <template v-slot:label>
              <p class="text-lg font-medium text-neutral-20">
                whats ur twitter handle
              </p>
            </template>
          </TextInput>
          <Select id="hasCrush" placeholder="--pick one--" v-model="state.hasCrush" :options="[{ label: 'Yes', value: 'true' }, { label: 'No', value: 'false' }]">
            <template v-slot:label>
              <p class="text-lg font-medium text-neutral-20">
                do u have a crush on me
              </p>
            </template>
          </Select>
          <Select id="hasSeptum" placeholder="--pick one--" v-model="state.hasSeptum" :options="[{ label: 'Yes', value: 'true' }, { label: 'No', value: 'false' }]">
            <template v-slot:label>
              <p class="text-lg font-medium text-neutral-20">
                do u have a septum piercing
              </p>
            </template>
          </Select>

          <div class="space-y-8 pt-10 pb-8">
            <Slider v-model="state.cuteScale" value="0" min="0" max="10" step="0.1">
              <template v-slot:label>
                <p class="text-lg font-medium text-neutral-20">
                  how cute do u think i am
                </p>
              </template>
            </Slider>
            <Slider v-model="state.funnyScale" value="0" min="0" max="10" step="0.1">
              <template v-slot:label>
                <p class="text-lg font-medium text-neutral-20">
                  how funny do u think i am
                </p>
              </template>
            </Slider>
            <Slider v-model="state.pickleScale" value="0" min="0" max="10" step="0.1">
              <template v-slot:label>
                <p class="text-lg font-medium text-neutral-20">
                  how much do u like pickles (dill only 😡)
                </p>
              </template>
            </Slider>
            <Slider v-model="state.millerScale" value="0" min="0" max="10" step="0.1">
              <template v-slot:label>
                <p class="text-lg font-medium text-neutral-20">
                  how much do u like miller lite
                </p>
              </template>
            </Slider>
          </div>

          <TextInput type="text" name="signs" multiline v-model="state.signs">
            <template v-slot:label>
              <p class="text-lg font-medium text-neutral-20">
                what r ur signs
              </p>
            </template>
          </TextInput>
          <TextInput type="text" name="reason" multiline v-model="state.crushReason">
            <template v-slot:label>
              <p class="text-lg font-medium text-neutral-20">
                y do u have a crush on me
              </p>
            </template>
          </TextInput>
          <TextInput type="text" name="other" multiline v-model="state.other">
            <template v-slot:label>
              <p class="text-lg font-medium text-neutral-20">
                anything else i should know?
              </p>
            </template>
          </TextInput>
        </div>

        <button @click="submit" class="w-full block text-xl font-semibold text-neutral-90 bg-primary-20 px-4 py-3 rounded-lg mx-auto 
          hover:bg-primary-10 hover:shadow-md
          focus:outline-none focus:shadow-outline focus:bg-primary-10
          transition duration-300"
        >
          submit
        </button>
      </form>
    </Container>

    <div v-if="responseState.error" class="text-secondary-20 font-medium">
      <p>{{responseState.result.message}}</p>
    </div>
  </div>
</template>

<script>
import { useEndpoint } from '@/composables'
import { reactive, onMounted } from '@vue/composition-api'
export default {
  name: 'Home',
  setup(_, { root }) {
    const state = reactive({
      hasCrush: '',
      cuteScale: 0,
      funnyScale: 0,
      pickleScale: 0,
      millerScale: 0,
      twitterHandle: '',
      age: 18,
      signs: '',
      hasSeptum: '',
      crushReason: '',
      other: '',
    })
    const { post, responseState } = useEndpoint()

    function submit() {
      post('api/submissions', {
        ...state
      }).then(() => {
        if(!responseState.error) {
          root.$router.push('/thanks')
        }
      })
    }

    function stringify(s) {
      return JSON.stringify(s, null, 2)
    }

    onMounted(() => {
      document.title = 'application 📝'
    })

    return {
      state, 
      responseState, 
      submit,
      stringify
    }
  }
}
</script>
