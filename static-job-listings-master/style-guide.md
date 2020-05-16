# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Desaturated Dark Cyan: hsl(180, 29%, 50%)

### Neutral

- Light Grayish Cyan (Background): hsl(180, 52%, 96%)
- Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
- Dark Grayish Cyan: hsl(180, 8%, 52%)
- Very Dark Grayish Cyan: hsl(180, 14%, 20%)

## Typography

### Body Copy

- Font size: 15px

### Headings

- Family: [Spartan](https://fonts.google.com/specimen/Spartan)
- Weights: 500, 700

### Allison's Notes
- check hasOwnProperty before checking the values


- Still need dynamic images
- Need to figure out when to re-render job lists component with new data
- Close button to wipe state of that one
- Clear button to completely wipe states & tags
- Correct "state updates may be asynchronous" section - https://reactjs.org/docs/state-and-lifecycle.html

###  Old Notes
For FilterBox:
- Tags need to be in an array to map over to display

For filtering actual content:
- State will need to be able to discern what property it is

one option:
combine props.role + props.level into one array before mapping over
but then you have to determine what type it is to add it to the right state
let state = {
  tags: ["Frontend", "Senior", "javascript", "ruby"],
  role: ["Frontend", "Backend"],
  level: ["Senior"],
  languages: ["Javascript" , "Ruby"]
}

another option would be for state to know the tagname, role. if included in the list, it is enabled.

let state = {
  tags: [
    {
      tagName: "FrontEnd",
      tagType: "Role"
    },
    {
      tagName: "Senior",
      tagType: "Level"
    }
  ]

the last option is more hard-coded. the tags would be pre-populated and have a flag for enabled/disabled.
let state = {
  tags: [
    {
      tagName: "FrontEnd",
      tagType: "Role"
    },
    {
      tagName: "Senior",
      tagType: "Level"
    }
  ]
