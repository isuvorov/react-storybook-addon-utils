const fullscreen = {
  position: 'absolute',
  height:'100%',
  width: '100%',
}
const centered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default {
  default: {
    root: {
      ...fullscreen,
      backgroundSize: 'cover',
    },
  },
  controls: [
    {
      name: 'Backgrounds',
      type: 'bg',
      items: [
        {
          name: 'No',
          root: {
            background: 'transparent',
          }
        },
        {
          name: 'Image',
          root: {
            enable: true,
            backgroundImage: 'url("//mcheck.mgbeta.ru/images/bg3.jpg")',
          }
        },
        {
          name: 'Gray',
          root: {
            background: '#eeeeee',
          }
        }
      ]
    },
    {
      name: 'Centered',
      items: [
        {
          name: 'No',
        },
        {
          name: 'Yes',
          enable: true,
          root: {
            ...centered
          }
        },
      ]
    },
    {
      name: 'Border',
      items: [
        {
          name: 'No',
        },
        {
          name: 'Yes',
          wrap: {
            border: '1px black dotted'
          }
        },
        {
          name: 'Marks',
          marks: true,
          enable: true,
        },
      ]
    },
    {
      name: 'Paddings',
      items: [
        {
          name: 'No',
          enable: true,
        },
        {
          name: '10px',
          wrap: {
            padding: 10,
          }
        },
        {
          name: '50px',
          wrap: {
            padding: 50,
          }
        },
      ]
    },
    {
      name: 'Width',
      items: [
        {
          name: 'No fix',
          enable: true,
        },
        {
          name: '100px',
          content: {
            width: 100,
          }
        },
        {
          name: '200px',
          content: {
            width: 200,
          }
        },
      ]
    },
  ]
}
