<template>
  <div class="min-h-screen pt-8 pb-16 sm:pt-12 sm:pb-20 space-y-12">
    <Container class="space-y-6 sm:space-y-8">
      <h1 class="text-secondary-20 text-2xl font-medium text-left sm:text-center">
        nicole's wife applications
      </h1>
      <div v-if="!responseState.error" class="text-left space-y-4">
        <div v-for="response of responseState.result" :key="response._id" class="bg-neutral-80 rounded-lg p-3 sm:p-4">
          <div class="flex space-x-4">
            <img class="w-12 h-12 sm:w-24 sm:h-24 rounded-full" :src="`https://unavatar.now.sh/twitter/${convertHandle(response.twitterHandle)}`" />
            <div class="space-y-4 divide-y divide-neutral-70 w-full">
              <div class="space-y-px">
                <p class="text-xs text-secondary-20 font-medium leading-tight">{{convertDate(response.timestamp)}}</p>
                <div class="flex space-x-2 items-baseline" v-if="typeof response.twitterHandle !== undefined  && response.twitterHandle !== ''">
                  <p class="text-lg text-secondary-20 font-medium">{{convertHandle(response.twitterHandle)}}</p>
                  <p class="text-sm text-neutral-70">&bull;</p>
                  <p class="text-lg text-secondary-20 font-semibold">{{response.age}}</p>
                </div>
                <p class="text-secondary-30 text-sm font-medium">{{response.signs}}</p>
              </div>
              <div class="pt-4 w-full space-y-1">
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex space-x-2 items-baseline" v-if="typeof response.hasCrush !== undefined && response.hasCrush !== ''">
                    <p class="text-sm text-secondary-20 font-medium">{{response.hasCrush ? 'crush 🥰' : 'no crush 💔'}}</p>
                  </div>
                  <div class="flex space-x-2 items-baseline" v-if="typeof response.hasSeptum !== undefined">
                    <p class="text-sm text-secondary-20 font-medium">{{response.hasSeptum ? 'septum 🐽' : 'no septum 😡'}}</p>
                  </div>
                </div>
                <div v-if="typeof response.crushReason !== undefined  && response.crushReason !== ''">
                  <p class="text-sm font-medium">{{response.crushReason}}</p>
                </div>
              </div>
              <div class="pt-4 w-full grid grid-cols-2 gap-4">
                <div v-if="typeof response.cuteScale !== undefined">
                  <p class="text-sm text-secondary-20 font-medium">cute: {{response.cuteScale}}</p>
                </div>
                
                <div v-if="typeof response.funnyScale !== undefined">
                  <p class="text-sm text-secondary-20 font-medium">funny: {{response.funnyScale}}</p>
                </div>
                
                <div v-if="typeof response.pickleScale !== undefined">
                  <p class="text-sm text-secondary-20 font-medium">pickle: {{response.pickleScale}}</p>
                </div>
                
                <div v-if="typeof response.millerScale !== undefined">
                  <p class="text-sm text-secondary-20 font-medium">miller: {{response.millerScale}}</p>
                </div>
              </div>
              <div class="pt-4 w-full" v-if="typeof response.other !== undefined  && response.other !== ''">
                <p class="text-xs text-secondary-20 font-semibold">other:</p>
                <p class="text-sm text-text font-medium">{{response.other}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Container>

    <div v-if="responseState.error" class="text-secondary-20 font-medium">
      <p>{{responseState.result.message}}</p>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { useEndpoint } from '@/composables'
import { onMounted } from '@vue/composition-api'
export default {
  name: 'Submissions',
  setup() {
    const { get, responseState } = useEndpoint()

    function stringify(s) {
      return JSON.stringify(s, null, 2)
    }

    const convertHandle = (handle) => {
      return handle.toLowerCase().replace(/@/g, '')
    }

    const convertDate = (date) => {
      return DateTime.fromISO(date).toRelative({ style: 'short' })
    }

    onMounted(() => {
      get('api/submissions')
      document.title = 'submissions 💍'
    })

    return {
      responseState, 
      stringify,
      convertHandle,
      convertDate
    }
  }
}
</script>