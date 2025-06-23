import { defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    const pinCoords = ref({
      left: `0px`,
      top: `0px`,
    })

    // Can be done using computed to evaluate new coords, but seems like an overkill in this case
    // New variable for the sake of a new variable
    /**
     * Map click handler. Sets new pin coordinates
     * @param {MouseEvent} event
     */
    function handleClick(event: MouseEvent) {
      pinCoords.value.left = `${event.offsetX}px`
      pinCoords.value.top = `${event.offsetY}px`
    }

    return {
      handleClick,
      pinCoords,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="pinCoords">📍</span>
    </div>
  `,
})
