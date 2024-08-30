import React from 'react';

interface Props {src: string;}

const Banner: React.FC<Props> = ({src}) => (
  <header className="banner">
    <article className="sectionStrip">
      <table align="center">
        <tr>
          <td>
            <img
              src={src}
              alt="logo"
              height="300"
              width="400"
            />
          </td>
        </tr>
      </table>
    </article>
  </header>
);

export default Banner;