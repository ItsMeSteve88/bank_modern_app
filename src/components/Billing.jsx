import React from 'react'
import { apple, bill, google } from '../../public/images'
import styles, {layout} from '@/pages/style'
import Image from 'next/image';

const Billing = () => <section id="product" className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <Image src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
    
    <div className="absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
    <div/>
    <div className="absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient" />
    <div/>
  </div>

  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing and invoicing</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
    <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
      <Image src={apple} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" alt='apple store'/>
      <Image src={google} className="w-[128px] h-[42px] object-contain cursor-pointer" alt='google store'/>
    </div>
  </div>
</section>;


export default Billing