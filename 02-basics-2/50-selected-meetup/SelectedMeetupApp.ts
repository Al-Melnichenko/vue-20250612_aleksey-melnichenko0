import { defineComponent, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'
import type { MeetupDTO } from './meetups.types.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const current = ref(1)
    const meetup = ref<MeetupDTO | null>(null)

    // Fetch new meetup whenever current value changes
    watch(current, async () => {
      meetup.value = await getMeetup(current.value)
    }, {
      immediate: true, // textbook usecase for this option :)
    })

    return {
      meetup,
      current,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled="current === 1" @click="current--">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button" v-for="num in 5" :key="'radio-' + num">
            <input
              :id="'meetup-id-' + num"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value='num'
              v-model='current'
            />
            <label :for="'meetup-id-' + num" class="radio-group__label">{{ num }}</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" :disabled="current === 5" @click="current++">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup?.title ?? 'Meetup title placeholder' }}</h1>
        </div>
      </div>

    </div>
  `,
})
