let PlanComponent =
{
    template: '#plan-template',

    props: 
    {
        name:
        {
            type: String,
            required: true
        }
    },

    selectedPlan:
    {
        type: String
    },

    computed:
    {
        isSelected()
        {
            return this.name === this.selectedPlan
        }
    },

    methods:
    {
        select()
        {
            this.$emit
            (
                'select',
                this.name
            )
            
            this.selected = true
        }
    }
}

let PlanPickerComponent =
{
    template: '#plan-picker-template',

    components:
    {
        plan: PlanComponent
    },

    data ()
    {
        return {
            plans:
            [
                'The Single',
                'The Curious',
                'The Addict'
            ],
            
            selectedPlans: null
        }
    },

    methods:
    {
        selectedPlan(plan)
        {
            this.selectedPlan = plan
        }
    }
}

new Vue
({
    el: '#app',
    components:
    {
        'plan-picker': PlanPickerComponent
    }
})