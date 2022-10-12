import * as React from "react";
import "./logo.scss";

const SvgLogo = () => {
  const LogoIcon = (props) => ({
    /* <svg
      viewBox="575 318.594 380 225.812"
      width={380}
      height={225.812}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <style>
        {
          ".aLgOaV3zRcolors-173f2f44a-c777-46aa-8b4a-adb91bd72d49{fill:#1f0c57;fill-opacity:1}.aLgOaV3zRcolors-273f2f44a-c777-46aa-8b4a-adb91bd72d49{fill:#f1270a;fill-opacity:1}.aLgOaV3zRcolors-373f2f44a-c777-46aa-8b4a-adb91bd72d49{fill:#4b4957;fill-opacity:1}.aLgOaV3zRcolors-473f2f44a-c777-46aa-8b4a-adb91bd72d49{fill:#5f5d73;fill-opacity:1}.aLgOaV3zRcolors-573f2f44a-c777-46aa-8b4a-adb91bd72d49{fill:#7d7d96;fill-opacity:1}.aLgOaV3zRcolors-673f2f44a-c777-46aa-8b4a-adb91bd72d49{fill:#c0c0c4;fill-opacity:1}.aLgOaV3zRcolors-773f2f44a-c777-46aa-8b4a-adb91bd72d49{fill:#e1e1e1;fill-opacity:1}.icon3-str73f2f44a-c777-46aa-8b4a-adb91bd72d49{stroke:#f1270a;stroke-opacity:1}"
        }
      </style>
      <svg
        width={380}
        height={36.079}
        x={575}
        y={508.327}
        preserveAspectRatio="none"
        viewBox="2.871 -28.398 303.223 28.789"
        {...props}
      >
        <g
          style={{
            fill: "#ff6816",
            fillOpacity: 1,
          }}
        >
          <path
            id="id-73f2f44a-c777-46aa-8b4a-adb91bd72d49D6z1nYkh10"
            d="M30.86-18.59v2.3q0 1.74-.43 3.11-.43 1.36-1.16 2.41-.73 1.04-1.69 1.79-.96.74-2 1.21-1.05.47-2.11.68-1.07.21-2.01.21H9.98v-5.07h11.48q.98-.08 1.77-.4.79-.33 1.36-.87.57-.55.88-1.32.31-.77.31-1.75v-2.3q-.1-.96-.41-1.76-.31-.8-.85-1.37-.54-.57-1.3-.89-.76-.32-1.76-.32H10.02q-1.02 0-1.54.53-.53.52-.53 1.52V0H2.87v-20.88q0-1.95.71-3.32.72-1.37 1.78-2.21 1.07-.84 2.32-1.22 1.25-.38 2.3-.38h11.48q1.72 0 3.09.44 1.37.44 2.41 1.17 1.05.74 1.78 1.69.73.96 1.21 2 .48 1.05.69 2.11.22 1.07.22 2.01Zm27.36 2.03v5.11H42.19v-5.11h16.03Zm2.29 11.48V0H42.19q-1.06 0-2.31-.37t-2.31-1.22q-1.07-.85-1.78-2.21-.71-1.36-.71-3.33v-18.32q0-.53.19-1 .2-.46.54-.82.34-.35.81-.54.47-.2 1.02-.2h22.87v5.08H40.16v15.8q0 1 .52 1.52.53.53 1.55.53h18.28ZM93.4-28.01v25.84q0 .55-.21 1.02-.2.47-.54.81-.35.34-.81.54-.47.19-1 .19-.47 0-.95-.18-.48-.17-.85-.56L70.49-19.73V0h-5.08v-25.84q0-.78.44-1.42.44-.63 1.12-.94.73-.3 1.49-.15t1.31.71L88.32-8.28v-19.73h5.08Zm33.89 0v25.84q0 .55-.21 1.02-.2.47-.55.81-.34.34-.81.54-.47.19-.99.19-.47 0-.95-.18-.48-.17-.85-.56l-18.55-19.38V0H99.3v-25.84q0-.78.44-1.42.44-.63 1.12-.94.72-.3 1.48-.15.77.15 1.31.71l18.56 19.36v-19.73h5.08Zm32.57 0v9.38q0 1.74-.44 3.1-.44 1.37-1.16 2.41-.72 1.05-1.69 1.79-.96.74-2 1.22-1.03.48-2.1.7-1.06.21-2 .21h-2.05V0h-5.12v-9.2h-2.03q-.94 0-2-.21-1.07-.22-2.11-.7-1.05-.48-2-1.22-.96-.74-1.69-1.79-.74-1.04-1.18-2.42-.43-1.37-.43-3.09v-9.38h5.07v9.38q0 .99.32 1.78.31.8.88 1.36.56.57 1.37.87.81.3 1.81.3h9.16q.72-.11 1.48-.3.76-.18 1.39-.63.62-.45 1.04-1.25.41-.8.41-2.13v-9.38h5.07Zm45.2 20.88v.98q0 .94-.32 2.01-.33 1.07-1.06 1.99-.73.92-1.9 1.53-1.17.62-2.87.62h-19.28q-.55 0-1.02-.2-.47-.19-.81-.53-.34-.34-.53-.81-.2-.47-.2-1.02v-22.89q0-.53.2-1 .19-.46.53-.82.34-.35.81-.54.47-.2 1.02-.2h16.99q.94 0 2.01.33 1.08.34 2 1.07.93.73 1.55 1.9.61 1.17.61 2.87v.96q0 1.35-.45 2.9-.45 1.55-1.44 2.94.86.53 1.61 1.27.75.74 1.32 1.72.56.98.9 2.21.33 1.23.33 2.71Zm-5.08.94v-.94q0-1-.31-1.79t-.88-1.35q-.57-.57-1.37-.87-.8-.31-1.79-.31h-11.45v-5.11h9.16q1 0 1.8-.31.8-.3 1.36-.86.57-.57.87-1.36.31-.79.31-1.79v-.96q0-1.09-1.06-1.09h-14.47v17.85h16.76q.13 0 .33-.02.19-.02.35-.11.16-.1.27-.34.12-.23.12-.64Zm36.97-19.26V0h-5.07v-6.88h-17.86V0h-5.07v-14q0-3.07 1.05-5.65 1.05-2.58 2.93-4.43 1.87-1.86 4.43-2.89 2.56-1.04 5.59-1.04h11.44q.53 0 1 .2.47.19.82.54.35.36.55.82.19.47.19 1ZM214.02-14v2.05h17.86v-10.98h-8.93q-.24 0-.99.07t-1.74.34q-.98.27-2.08.84-1.09.57-2.01 1.56-.92 1-1.51 2.49-.6 1.5-.6 3.63Zm56.82-14.01v25.84q0 .55-.21 1.02-.2.47-.54.81-.34.34-.81.54-.47.19-1 .19-.47 0-.95-.18-.47-.17-.85-.56l-18.55-19.38V0h-5.08v-25.84q0-.78.44-1.42.44-.63 1.12-.94.73-.3 1.49-.15t1.31.71l18.55 19.36v-19.73h5.08ZM291.7-14l14.39 14h-7.2l-11.43-11.45h-3.57v-5.11h3.57l11.43-11.45h7.2L291.7-14Zm-9.84-14.01V0h-5.08v-28.01h5.08Z"
          />
        </g>
      </svg>
      <svg
        width={190}
        height={159.667}
        x={670}
        y={318.594}
        preserveAspectRatio="none"
        viewBox="0.5 10.675 127 106.725"
        {...props}
      >
        <g
          style={{
            fill: "#ff6816",
            fillOpacity: 1,
          }}
        >
          <path d="M23.3 41.5c.4 0 .8-.3.8-.8V27.5c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v13.3c.1.4.4.7.8.7zM23.3 50.1c.4 0 .8-.3.8-.8V45c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v4.3c.1.5.4.8.8.8zM119.2 41.2l-1.8-1.8c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.8c.1.1.3.2.5.2s.4-.1.5-.2c.4-.3.4-.8.1-1.1zM123.3 45.3c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.8c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.7-1.8zM118.1 45.3l-1.8 1.8c-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2l1.8-1.8c.3-.3.3-.8 0-1.1-.2-.3-.7-.3-1 0zM125.1 39.4c-.3-.3-.8-.3-1.1 0l-1.8 1.8c-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2l1.8-1.8c.4-.3.4-.8.1-1.1zM106 106c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.8c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1L106 106zM111.9 111.9c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.8c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.7-1.8zM106.8 111.9l-1.8 1.8c-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2l1.8-1.8c.3-.3.3-.8 0-1.1-.2-.3-.7-.3-1 0zM112.7 106l-1.8 1.8c-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2l1.8-1.8c.3-.3.3-.8 0-1.1-.2-.3-.7-.3-1 0zM33 13.8c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.8-1.8c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.9 1.8zM38.9 19.7c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.8-1.8c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.9 1.8zM31.7 19.9c.2 0 .4-.1.5-.2l1.8-1.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-1.8 1.8c-.3.3-.3.8 0 1.1.2.1.4.2.6.2zM37.6 14c.2 0 .4-.1.5-.2l1.8-1.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0L37 12.7c-.3.3-.3.8 0 1.1.2.1.4.2.6.2zM100.3 32.1c2.1 0 3.9-1.7 3.9-3.9 0-2.1-1.7-3.8-3.9-3.8-2.1 0-3.9 1.7-3.9 3.8.1 2.2 1.8 3.9 3.9 3.9zm0-6.2c1.3 0 2.3 1.1 2.3 2.3 0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1.1-2.3-2.3 0-1.2 1.1-2.3 2.3-2.3zM36.1 109.6c-2.1 0-3.9 1.7-3.9 3.9s1.7 3.9 3.9 3.9c2.1 0 3.8-1.7 3.8-3.9s-1.7-3.9-3.8-3.9zm0 6.2c-1.3 0-2.3-1.1-2.3-2.3 0-1.3 1.1-2.3 2.3-2.3 1.3 0 2.3 1.1 2.3 2.3 0 1.3-1 2.3-2.3 2.3zM123.7 87.3c-2.1 0-3.8 1.7-3.8 3.9s1.7 3.9 3.8 3.9c2.1 0 3.8-1.7 3.8-3.9s-1.7-3.9-3.8-3.9zm0 6.2c-1.3 0-2.3-1.1-2.3-2.3s1.1-2.3 2.3-2.3c1.3 0 2.3 1.1 2.3 2.3s-1.1 2.3-2.3 2.3zM102 13.6h14.4c.4 0 .8-.3.8-.8s-.3-.8-.8-.8H102c-.4 0-.8.3-.8.8s.4.8.8.8zM121.1 13.6h4.6c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-4.6c-.4 0-.8.3-.8.8s.4.8.8.8zM126.5 17.8c0-.4-.3-.8-.8-.8h-10c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h10c.4-.1.8-.4.8-.8zM108.2 17c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h3.2c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8h-3.2zM25 107.3H10.6c-.4 0-.8.3-.8.8 0 .4.3.8.8.8H25c.4 0 .8-.3.8-.8-.1-.4-.4-.8-.8-.8zM5.9 107.3H1.3c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h4.6c.4 0 .8-.3.8-.8 0-.4-.4-.8-.8-.8zM1.3 103.9h10c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8h-10c-.4 0-.8.3-.8.8s.3.8.8.8zM18.8 103.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8h-3.2c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h3.2zM120.5 76.5V66c0-.4-.3-.8-.8-.8h-7.6c-1.4 0-2.8-.8-3.9-2.4-.4-.9-.8-1.7-1.3-2.5-2-3.5-4.8-6.6-8-9.1l.7-10.4c0-.3-.1-.5-.3-.7-.2-.1-.5-.2-.8-.1l-12 6h-.4c-1.7-.3-3.4-.5-5.1-.5h-1.3c4.2-3.2 6.8-8.3 6.8-13.7 0-9.5-7.7-17.2-17.2-17.2s-17.2 7.7-17.2 17.2c0 5.4 2.6 10.5 6.8 13.7h-2.4c-1.3 0-2.5.1-3.8.3l-.7-.3-12.3-5.9c-.2-.1-.5-.1-.8.1-.2.2-.3.4-.3.7l.7 10.3c-1.5 1-2.9 2.2-4.2 3.5-5.4 5.4-8.6 10.8-8.6 22.4v1c-2.5 6-9.3 8.8-15.3 6.4-1.8-.7-3.3-2.1-4-4-.8-1.8-.8-3.8 0-5.6.5-1.1 1.3-2 2.4-2.5 1.1-.5 2.3-.5 3.5 0 1.4.6 2 2.1 1.5 3.5-.2.4 0 .8.4 1 .4.2.8 0 1-.4.4-1 .4-2.2 0-3.2s-1.2-1.8-2.3-2.2c-3.1-1.3-6.6.2-7.9 3.3-.8 2.1-.8 4.5.1 6.7a8.7 8.7 0 0 0 4.8 4.8c1.6.7 3.3 1 5 1 4.4 0 8.6-2.2 11.1-6 1.6 12.5 11.1 22.6 23.4 25v6.9c0 1.1.9 2.1 2.1 2.1H86c1.1 0 2.1-.9 2.1-2.1v-7c5.3-1.2 10.2-3.9 14.1-7.9 3.4-3.3 5.9-7.5 7.3-12 .1-.3.1-.5.2-.7 1.5-4.5 4.2-7.2 7.1-7.2h3c.4-.2.7-.6.7-1zM53.6 31.8c0-8.7 7.1-15.7 15.7-15.7C78 16 85 23.1 85 31.8c0 5.7-3.1 10.9-8 13.7H61.6c-5-2.8-8-8-8-13.7zm65.4 44h-2.2c-3.6 0-6.9 3.2-8.5 8.3-.1.2-.2.5-.2.7-1.3 4.3-3.7 8.2-6.9 11.4-5.2 5.3-12.2 8.2-19.7 8.2-.4 0-.8.3-.8.8s.3.8.8.8h5.1v6.3c0 .3-.3.6-.6.6H52.3c-.3 0-.6-.3-.6-.6V106h4.2c.4 0 .8-.3.8-.8s-.3-.8-.8-.8c-15.3 0-27.8-12.5-27.8-27.8 0-11.1 3-16.2 8.2-21.4 1-1 2.1-1.9 3.2-2.8l.2 2.7c0 .4.4.7.8.7s.7-.4.7-.8l-.9-13.4L51.5 47l.9.3c.1 0 .2.1.4 0 1.2-.2 2.5-.3 3.8-.3H81c1.6 0 3.3.2 4.9.5l.6.1c.1 0 .3 0 .4-.1L98 42.1l-.9 13.4c0 .4.3.8.7.8h.1c.4 0 .7-.3.8-.7l.2-2.5c2.7 2.2 5.1 4.9 6.8 7.9.1.3.3.6.4.9.1.2.1.3.2.5.2.4.5.9.8 1.3 1.4 2 3.2 3 5.2 3h6.9v9.1z" />
          <path d="M95.2 60c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9.1 0 2.9.8 3.9 4.1.1.3.4.5.7.5h.2c.4-.1.6-.5.5-.9-1.2-4.1-4.7-5.1-4.9-5.1zM70 31.1v-6.5c.8.1 1.5.4 2.1.9.7.6 1.1 1.4 1.1 2.3 0 .4.3.8.8.8.4 0 .8-.3.8-.8 0-1.3-.6-2.5-1.6-3.4-.8-.7-1.9-1.2-3-1.3v-2.2c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8V23c-1.1.1-2.2.6-3 1.3-1 .9-1.6 2.1-1.6 3.4 0 1.3.6 2.5 1.6 3.4.8.7 1.9 1.2 3 1.3V39c-.8-.1-1.5-.4-2.1-.9-.7-.6-1.1-1.4-1.1-2.3 0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8 0 1.3.6 2.5 1.6 3.4.8.7 1.9 1.2 3 1.3v2.2c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-2.2c1.1-.1 2.2-.6 3-1.3 1-.9 1.6-2.1 1.6-3.4 0-1.3-.6-2.5-1.6-3.4-.8-.7-1.8-1.2-3-1.3zM66.5 30c-.7-.6-1.1-1.4-1.1-2.3 0-.9.4-1.7 1.1-2.3.6-.5 1.3-.8 2.1-.9V31c-.8-.2-1.6-.5-2.1-1zm5.6 8.1c-.6.5-1.3.8-2.1.9v-6.4c.8.1 1.5.4 2.1.9.7.6 1.1 1.4 1.1 2.3s-.4 1.7-1.1 2.3z" />
        </g>
      </svg>
        </svg>*/
  });
  return <div className="logoWrapper">{/*<LogoIcon />*/}</div>;
};
export default SvgLogo;
