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
  default2: {
    root: {},
    wrap: {},
    content: {},
  },
  default: {
    root: {
      // background: 'url("https://pp.vk.me/c629529/v629529020/1dd4a/JjiHPoWVrMM.jpg") no-repeat center center fixed',
      ...fullscreen,
      backgroundSize: 'cover',
    },
    wrap: {
      // border: '1px green solid',
      // padding: 20,
    },
    content: {
      // border: '1px red dotted',
    }
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
          name: 'Red',
          enable: true,
          root: {
            background: '#ff0000',
          }
        },
        {
          name: 'Image',
          root: {
            backgroundImage: 'url("//mcheck.mgbeta.ru/images/bg3.jpg")',
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
          enable: true,
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
