import '../../css/home.css'
import Logo1 from '../../images/logo.jpeg'
import Caruser2 from '../bootcarusel/Carusel2';
import Caruser1 from '../bootcarusel/Caruser1';

function Squars() {
  return (
 <div className="flexCol center ">
    <h1 className='squarsOpeningHeader'>תתרשמו קצת מהעבודות שלנו</h1>
    <div className="flexRowToCol h80vh w100">
        <div className="text w50 flexCol center">
<div className="allInSquare flexCol center">
<h1 className='squareh1'>התקנות תריסים חשמליים SOMFI</h1>
<p className="paregraph">
מנוע של תריס חשמלי עושה את החיים לקלים יותר. מנועי תריס חשמלי נהיו מהירים ואמינים, אך עדיין יש שחיקה טבעית, תקלות משימוש לא נכון, תקלות שנובעות מקניית מנוע או התקנה לא איכותיים
</p>
<button className='btnCall margintop'>   <a className='cw' href="tel:+97247901169">ליעוץ חינם התקשרו עכשיו</a></button>
</div>
        </div>
        <div className="images w50">
            <Caruser1/>

        </div>
    </div>
    
    <div className="flexRowToColRevers h80vh w100">
        <div className="text w50 flexCol center">
<div className="allInSquare flexCol center">
<h1 className='squareh1'>כל עבודות הזכוכית </h1>
<p className="paregraph">
פתרונות מותאמים אישית, ייעוץ מקצועי ואחריות מובטחת לתוצאות מעולות.</p>
<button className='btnCall margintop'>   <a className='cw' href="tel:+97247901169">ליעוץ חינם התקשרו עכשיו</a></button>


</div>
        </div>
        <div className=" w50">
<Caruser2/>
        </div>
    </div>
    <div className="flexRowToCol h80vh w100">
        <div className="text w50 flexCol center">
        <div className="allInSquare flexCol center">
<h1 className='squareh1'>חלונות ורשתות </h1>
<p className="paregraph">
תיקון לכל סוגי חלונות האלומניום- רשתות, גלגלים, זכוכיות.</p>
<button className='btnCall margintop'>   <a className='cw' href="tel:+97247901169">ליעוץ חינם התקשרו עכשיו</a></button>

</div>
        </div>
        <div className="images3 w50">

        </div>
    </div>
 </div>
  );
}

export default Squars;
