let sub1 = [
    {
      x: 12,
      y: 6,
      w: 6,
      h: 6,
      content: `<div  class="grid-container" style="height:180px;">Third Item</div>`,
    },
    {
      x: 12,
      y: 6,
      w: 6,
      h: 6,
      content: `<div  class="grid-container style="height:180px;"">Fourth Item</div>`,
    },
  ];
  let sub2 = [
    { x: 0, y: 0 },
    { x: 0, y: 1, w: 2 },
  ];
  let count = 0;
  [...sub1, ...sub2].forEach((d) => (d.content = String(count++)));
  let subOptions = {
    cellHeight: 50, // should be 50 - top/bottom
    column: 12, // size to match container. make sure to include gridstack-extra.min.css
    acceptWidgets: true, // will accept .grid-stack-item by default
    margin: 5,
  };
 export const options = {
    // main grid options
    cellHeight: 50,
    margin: 8,
    minRow: 2, // don't collapse when empty
    disableOneColumnMode: true,
    acceptWidgets: true,
    subGrid: subOptions,
    subGridDynamic: true,
    float:true,
    // resizable: {
    //   handles: 'e,se,s,sw,w'
    // },
    id: "main",
    children: [
      {
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        content: `<div  class="grid-container" style="height:80px;">First Item</div>`,
      },
      {
        x: 1,
        y: 0,
        w: 5,
        h: 4,
        content: `<div  class="grid-container" style="height:180px;">
        <div class="header">
                <h5><strong>voiceSpree</strong></h5>
                <span>Enjoy Freedom</span>
                <button type='button' class='header-button'>Let's do this</button>
            </div>
        </div>`,
      },
      {
        x: 8,
        y: 0,
        w: 6,
        h: 4,
        content: `<div  class="grid-container-3-and-4" style="border: none;"></div>`,
        subGrid: {
          children: [
            {
              x: 12,
              y: 0,
              w: 6,
              h: 5,
              content: `<div  class="grid-container4">Fourth Item</div>`,
            },
            {
              x: 12,
              y: 0,
              w: 6,
              h: 12,
              content: `<div  class="grid-container4">Third Item</div>`,
            },
          ],
          id: "sub1_grid",
          className: "sub1",
          ...subOptions,
        },
      },
      {
        x: 0,
        y: 4,
        w: 20,
        h: 4,
        content: `<div  class="grid-container-5-and-6"></div>`,
        subGrid: {
          children: [
            {
              x: 0,
              y: 6,
              w: 6,
              h: 2,
              content: `<div  class="grid-container5">Fifth Item</div>`,
            },
            {
              x: 12,
              y: 6,
              w: 6,
              h: 2,
              content: `<div  class="grid-container5">Sixth Item</div>`,
            },
          ],
          id: "sub2_grid",
          class: "sub2",
          ...subOptions,
        },
      },
    ],
  };