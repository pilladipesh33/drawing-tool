'use client';

import { MenuContainer } from './_components/menu';
import './page.scss';

export default function Page() {
  return (
    <main>
      <div className='grid-container'>
        <div className='container-1'>
          <MenuContainer />
        </div>
        <div className='container-2'>Container 2</div>
      </div>
    </main>
  );
}
