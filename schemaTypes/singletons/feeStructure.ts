import {defineField, defineType} from 'sanity'

export const feeStructure = defineType({
  name: 'feeStructure',
  title: 'Fee Structure',
  type: 'document',
  fields: [
    defineField({name: 'year', title: 'Academic Year', type: 'string'}),
    defineField({name: 'oLevelNewDay', title: "O'Level New - Day (UGX)", type: 'number'}),
    defineField({name: 'oLevelNewHostel', title: "O'Level New - Hostel (UGX)", type: 'number'}),
    defineField({name: 'oLevelNewUniformBoys', title: "O'Level New - Uniform Boys (UGX)", type: 'number'}),
    defineField({name: 'oLevelNewUniformGirls', title: "O'Level New - Uniform Girls (UGX)", type: 'number'}),
    defineField({name: 'oLevelNewHostelUniform', title: "O'Level New - Hostel Uniform (UGX)", type: 'number'}),
    defineField({name: 'oLevelContinuingDay', title: "O'Level Continuing - Day (UGX)", type: 'number'}),
    defineField({name: 'oLevelContinuingHostel', title: "O'Level Continuing - Hostel (UGX)", type: 'number'}),
    defineField({name: 'aLevelNewDay', title: "A'Level New - Day (UGX)", type: 'number'}),
    defineField({name: 'aLevelNewHostel', title: "A'Level New - Hostel (UGX)", type: 'number'}),
    defineField({name: 'aLevelNewUniformBoys', title: "A'Level New - Uniform Boys (UGX)", type: 'number'}),
    defineField({name: 'aLevelNewUniformGirls', title: "A'Level New - Uniform Girls (UGX)", type: 'number'}),
    defineField({name: 'aLevelNewHostelUniform', title: "A'Level New - Hostel Uniform (UGX)", type: 'number'}),
    defineField({name: 'aLevelContinuingDay', title: "A'Level Continuing - Day (UGX)", type: 'number'}),
    defineField({name: 'aLevelContinuingHostel', title: "A'Level Continuing - Hostel (UGX)", type: 'number'}),
  ],
})