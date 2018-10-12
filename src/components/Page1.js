import React from 'react';
import Evacuees from './Logo/Evacuees';
import './Page1.css';
import Padin from './img/images.jpg';
import Habib from './img/images2.png';
import Footer from './Footer/Footer';


const Page1 = ({ onRouteChange }) =>{
 return (
  <div className = "App">
   
   <article class="helvetica pb5">
    <header class="vh-100 bg-light-pink dt w-100">
        <div     
         className="dtc v-mid cover ph3 ph4-m ph5-l style">
         <h1 class="f2 f-subheadline-l measure lh-title fw9">
         	لاِطْبَعُوا سِكَّاتِكُمْ سُيُوفًا، وَمَنَاجِلَكُمْ رِمَاحًا. لِيَقُلِ الضَّعِيفُ بطل انا 
         </h1>
         <h2 class="f6 fw6 black"> (يوء 3: 10) </h2>
        </div>
     </header>
     <Evacuees />
     <div style={ {color:'#FDFAFF'}} class="serif ph3 ph4-m ph5-l">
         <h1> التنبيهات الهامه </h1>
         <p class="lh-copy f5 f3-m f1-l measure center pv4">
            On <time>  Friday<br/> AM الساعه  :  10.30  </time><br/>ﻣﻴﻌﺎﺩ ﺧﺪﻣﻪ اﻟﻜﺸﺎﻓﻪ ﻓﻰ ﻛﻨﻴﺴﻪ اﻟﻤﻼﻙ ﻣﻴﺨﺎﺋﻴﻞ  
         </p>
         <p class="lh-copy f5 f3-m f1-l measure center pv4">
            On <time> Friday <br/> PM الساعه  :  2.30  </time><br/> مدارس الاحد
         </p>
         <p class="lh-copy f5 f3-m f1-l measure center pv4">
            On <time> Friday <br/> PM الساعه  :  6.30  </time><br/> أجتماع جامعيين
         </p>
         

        <div class="f5 f3-m lh-copy">
          <div class="cf dt-l w-100 bt b--black-10 pv4">
            <div class="dtc-l v-mid mw6 pr3-l">
              <img class="w-100" src={Padin} alt="your browser dose't support this type of images"/>
            </div>
            <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
              <p  class="measure pv4-l center" >
                <span class="fw9 fw4-ns">
                  <h1> بادن باول</h1></span> 
                  مؤسس الكشافه هو اللورد روبيرت استيفن سميث بادن باول حيث تم 
                  ارساله على راس مجموعه من القوات العسكريه ال
                  بريطانيه الى افرقيا لحمايه قريه صغيره تدعى ماكفينج واثناء وجوده 
                  فى ماكفينج قامت عصابات تدعى البوير بمحاولات ح
                  صار ومهاجمه هذه القريه فكان احتياج اللورد لتأسيس فريق مهمته هى ار
                  سال الرسائل المشفره الى موطنه الاصلى بريطانيا ب
                  حيث لا يكون العدو قادرا على قرائه هذه الرسائل  وايضا حراسه المخيم ليلا حتى لا يتمكن العدو من سرقتهم اثناء النوم  
                  ومن هنا جائت فكرة الكشافه 
              </p>
            </div>
          </div>
          <div class="cf dt-l w-100 bt b--black-10 pv4">
            <div class="dtc-l v-mid mw6 pr3-l">
              <img className="w-100 pr0 padding ph0" src={Habib} alt="your browser dose't support this type of images"/>
            </div>
            <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
              <p class="measure pv4-l center pr0" style={ {color:'#FDFAFF'} }>
                <span class="fw9 fw4-ns">
                  <h1 > الارشدياكون حبيب جرجس</h1></span> 
                  فى العام 1918 شعر الأرشيذاكيون 
                  (رئيس الشمامسة) حبيب جرجس، مؤسس مدارس الأحد، 
                  بفقر مادة الدين المسيحى التى يدرسها الطلاب فى المدارس، بعدما ت
                  م إقرارها كمادة تعليمية عام 1908، ولكن عدم وجود مدرسين متخصصين أدى إلى الإهمال فى تدريسه، 
                  فابتكر فكرة مدارس الأحد.
              </p>
            </div>
          </div>
          <div class="cf dn">
            <div class="fl w-100 w-50-l">
              <p class="f5 pv4">
                During high tides, water would flow directly into the pools from the
                nearby ocean, recycling the <span class="db f4 f3-m f1-l fw6 measure lh-title">two million US gallons of water in about an hour. </span>
              </p>
            </div>
            <div class="fl w-100 w-50-l">
              <p class="f5">
                During low tides, a powerful turbine water pump,
                built inside a cave at sea level, could be switched on from a control
                room and could fill the tanks at a rate of 6,000 US gallons a minute,
                recycling all the water in five hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
         <button className='disabled' >Home Page</button>
         <button  className='' onClick={()=> onRouteChange('page2')}>Page2 </button>
         <button  onClick={()=> onRouteChange('page3')}>Contact Us </button> 
         <Footer />
     </div>
    )    


}
export default Page1;