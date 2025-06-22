import { defineComponent, ref, computed } from 'vue'

type Operators = 'sum' | 'subtract' | 'multiply' | 'divide'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(0)
    const secondOperand = ref(0)
    const operator = ref<Operators>('sum')

    const result = computed(() => {
      let result: number
      switch (operator.value) {
        case 'sum':
           result = firstOperand.value + secondOperand.value
           break
        case 'subtract':
           result = firstOperand.value - secondOperand.value
           break
        case 'multiply':
           result = firstOperand.value * secondOperand.value
           break
        case 'divide':
           result = firstOperand.value / secondOperand.value
           break
      }
      return result
    })

    return {
      firstOperand,
      operator,
      secondOperand,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
