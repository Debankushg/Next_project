
import Footer from '../../component/Footer';
import styles from '../../styles/main.module.css'

const Main = () => {
  return (
   <div className={styles.body}>
   
   <div className={`${styles.rar}, ${ styles.section}`}>
    
      <div id="redelement" className={styles.head} >CHOCOLATES & ICE CREAM</div>
   
   
      <div className={styles.P}>Welcome to The Indian Chocolate Factory,where a hankering for scrumptious subs and sweet scoops of ice cream
        are all the golden ticket you need. Indian Chocolate Factory start with fresh-baked chocolate filled with
        everything from tasty traditional fixings to our very own craveable concoctions. As for our Wisconsin-made ice
        cream? It’s the kind that makes you scream!
        </div>
  

  <img className={styles.img} src="/11.jpg" alt="Company factory" width="338px" height="250" />
  </div>




  <div className={styles.ada}>
    <div className={`${styles.chocolate} , ${ styles.section} , ${styles.left}`}>
      <h3 className={styles.head}> CADBURY:</h3>
      <div className={styles.para}>
        <div className={styles.P}>
         
            The original Dairy Milk bar was launched in 1905.
          Variant bars include Caramel, "Fruit & Nut" (a bar with raisins and almonds), "Whole Nut" (with hazelnuts),"Dairy Milk Silk" and a bar with a Turkish delight centre. Dairy Milk Ritz, a bar with salty Ritz crackers was
          launched in the United Kingdom in 2014. Alongside this new bar, Dairy Milk with LU biscuits was also launched.
          
        </div>
    </div>
    <img className={styles.img} src="/455.jpg" alt="choclate factory"  width="338px" height="250" />
    </div>

    
    <div id="icecream" className={ styles.section}>
      <h3 className={styles.head}>BUTTER SCOTCH:</h3>
      <div className="para">
        <div className={styles.P}>
          <summary> Ice cream is a sweetened frozen food typically eaten as a snack or dessert.</summary> It may be made
          from dairy milk or cream and is flavoured with sweetener, either sugar or an alternative, and a spice, such
          as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored
          cream base and liquid nitrogen together. Colorings are sometimes added, in addition to stabilizers.
        
        </div>
    </div>
    <img src="/757.jpg" className={styles.img} alt="choclate factory"  width="338px" height="250" />
    </div>


   </div>

    <Footer/>

   </div>
  )
}

export default Main;