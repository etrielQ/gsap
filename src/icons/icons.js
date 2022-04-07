const icons = [
  {
    iconId: "iconArrow",
    iconSvg: `<svg id="katman_1" data-name="katman 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 162.55"><title>icon-arrow</title><g id="Group_1870" data-name="Group 1870"><rect id="Rectangle_14" data-name="Rectangle 14" x="-7.3" y="-79.1" width="26.48" height="114.94" transform="translate(61.1 69.49) rotate(-45)"/><rect id="Rectangle_15" data-name="Rectangle 15" x="-51.54" y="27.69" width="114.94" height="26.48" transform="translate(16.86 87.81) rotate(-45)"/></g></svg>`,
  },
  {
    iconId: "iconSearch",
    iconSvg: `<svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.02 24.02"><path d="M23.71,22.29l-6-6a10,10,0,1,0-1.42,1.42l6,6a1,1,0,0,0,1.42-1.42ZM10,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z" transform="translate(0.03 0.03)"/></svg>`,
  },
  {
    iconId: "iconFacebook",
    iconSvg: `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512,256C512,114.6,397.4,0,256,0S0,114.6,0,256,114.6,512,256,512c1.5,0,3,0,4.5-.1V312.7h-55V248.6h55V201.4c0-54.7,33.4-84.5,82.2-84.5,23.4,0,43.5,1.7,49.3,2.5v57.2H358.4c-26.5,0-31.7,12.6-31.7,31.1v40.8h63.5l-8.3,64.1H326.7V502.1C433.7,471.4,512,372.9,512,256Z" transform="translate(0 0)"/></svg>`,
  },
  {
    iconId: "iconPhone",
    iconSvg: `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473.12 473.81"><path d="M374.46,293.51c-9.7-10.1-21.4-15.5-33.8-15.5s-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6,8.2-7.5,15.8-15.3,23.2-22.8,2.8-2.8,5.6-5.7,8.4-8.5,21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7l-.2.2-34,34.3a73.16,73.16,0,0,0-21.7,46.5c-2.4,29.2,6.2,56.4,12.8,74.2,16.2,43.7,40.4,84.2,76.5,127.6,43.8,52.3,96.5,93.6,156.7,122.7,23,10.9,53.7,23.8,88,26,2.1.1,4.3.2,6.3.2,23.1,0,42.5-8.3,57.7-24.8.1-.2.3-.3.4-.5,5.2-6.3,11.2-12,17.5-18.1,4.3-4.1,8.7-8.4,13-12.9,9.9-10.3,15.1-22.3,15.1-34.6s-5.3-24.3-15.4-34.3Zm35.8,105.3c-.1,0-.1.1,0,0-3.9,4.2-7.9,8-12.2,12.2a263,263,0,0,0-19.3,20c-10.1,10.8-22,15.9-37.6,15.9-1.5,0-3.1,0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4C202,396,152.26,357.11,111,307.81c-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6a45.9,45.9,0,0,1,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1,6.3,0,11.4,3.8,14.6,7l.3.3c6.1,5.7,11.9,11.6,18,17.9,3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3c10.6,10.6,10.6,20.4,0,31-2.9,2.9-5.7,5.8-8.6,8.6-8.4,8.6-16.4,16.6-25.1,24.4-.2.2-.4.3-.5.5-8.6,8.6-7,17-5.2,22.7l.3.9c7.1,17.2,17.1,33.4,32.3,52.7l.1.1c27.6,34,56.7,60.5,88.8,80.8A136.54,136.54,0,0,0,255,345c3.6,1.8,7,3.5,9.9,5.3.4.2.8.5,1.2.7a21.68,21.68,0,0,0,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5s11.3,3.9,14.4,7.3l.2.2,55.1,55.1C420.46,377.71,420.46,388.21,410.26,398.81Z" transform="translate(-0.34 0)"/><path d="M256.06,112.71a128.7,128.7,0,0,1,104.8,104.8,13.42,13.42,0,0,0,13.3,11.2,17.85,17.85,0,0,0,2.3-.2,13.51,13.51,0,0,0,11.1-15.6,155.62,155.62,0,0,0-126.8-126.8,13.57,13.57,0,0,0-15.6,11A13.35,13.35,0,0,0,256.06,112.71Z" transform="translate(-0.34 0)"/><path d="M473.26,209A256.25,256.25,0,0,0,264.46.21a13.48,13.48,0,1,0-4.4,26.6,228.88,228.88,0,0,1,186.6,186.6,13.42,13.42,0,0,0,13.3,11.2,17.85,17.85,0,0,0,2.3-.2A13.25,13.25,0,0,0,473.26,209Z" transform="translate(-0.34 0)"/></svg>`,
  },
];

export default icons;
